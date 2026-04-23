import { ref, onMounted, onUnmounted } from 'vue'
import { PHONE } from '../config.js'

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

function fmt(y, m, d) {
  const dt = new Date(y, m, d)
  return dt.getFullYear() + '-' +
    String(dt.getMonth() + 1).padStart(2, '0') + '-' +
    String(dt.getDate()).padStart(2, '0')
}

function parseCSV(text) {
  const map = {}
  const lines = text.trim().split('\n')
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',').map(c => c.trim().replace(/"/g, ''))
    if (cols.length < 2) continue
    const [date, rawStatus] = cols
    if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) continue
    const s = rawStatus.toLowerCase().trim()
    let status
    if (s === 'hot') {
      status = 'hot'
    } else if (s.includes('indispon')) {
      status = 'unavailable'
    } else {
      status = 'available'
    }
    map[date] = status
  }
  return map
}

async function fetchCSV(url) {
  try {
    const res = await fetch(url, { mode: 'cors', cache: 'no-store' })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    return await res.text()
  } catch (e) {
    console.warn('[Sheets] Fetch direto falhou, tentando proxy...', e.message)
  }
  try {
    const proxy = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url)
    const res = await fetch(proxy, { cache: 'no-store' })
    if (!res.ok) throw new Error('Proxy HTTP ' + res.status)
    return await res.text()
  } catch (e) {
    console.warn('[Sheets] Proxy também falhou:', e.message)
    throw e
  }
}

export function useCalendario(sheetsUrl, fallback = [], onToast = null) {
  const today = new Date()
  const thisYear = today.getFullYear()
  const thisMonth = today.getMonth()

  const currentYear = ref(thisYear)
  const currentMonth = ref(thisMonth)
  const dateMap = ref({})
  const updatedLabel = ref('· carregando...')
  const loading = ref(true)

  function todayStr() {
    return fmt(thisYear, thisMonth, today.getDate())
  }

  async function load() {
    loading.value = true
    if (!sheetsUrl || sheetsUrl.startsWith('SUA_URL')) {
      dateMap.value = {}
      ;(fallback || []).forEach(({ date, status }) => {
        dateMap.value[date] =
          status === 'hot' ? 'hot'
          : (status === 'indisponivel' || status === 'unavailable') ? 'unavailable'
          : 'available'
      })
      updatedLabel.value = '· dados locais'
      loading.value = false
      return
    }

    try {
      const text = await fetchCSV(sheetsUrl)
      dateMap.value = parseCSV(text)
      const now = new Date()
      updatedLabel.value = '· atualizado às ' + now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0')
    } catch (err) {
      console.warn('[Calendário] Todas as tentativas falharam:', err)
      dateMap.value = {}
      ;(fallback || []).forEach(({ date, status }) => { dateMap.value[date] = status })
      updatedLabel.value = '· usando dados locais'
    }
    loading.value = false
  }

  function prevMonth() {
    if (currentYear.value === thisYear && currentMonth.value <= thisMonth) return
    if (currentMonth.value === 0) {
      currentMonth.value = 11
      currentYear.value--
    } else {
      currentMonth.value--
    }
  }

  function nextMonth() {
    if (currentMonth.value === 11) {
      currentMonth.value = 0
      currentYear.value++
    } else {
      currentMonth.value++
    }
  }

  function isPrevDisabled() {
    return currentYear.value === thisYear && currentMonth.value <= thisMonth
  }

  function getDays() {
    const year = currentYear.value
    const month = currentMonth.value
    const tStr = todayStr()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const days = []
    for (let i = 0; i < firstDay; i++) {
      days.push({ type: 'empty', key: 'e-' + i })
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = fmt(year, month, d)
      const isPast = dateStr < tStr
      const status = dateMap.value[dateStr]
      let type = 'available'
      if (isPast) type = 'past'
      else if (status === 'unavailable') type = 'unavailable'
      else if (status === 'hot') type = 'hot'
      days.push({
        type,
        day: d,
        dateStr,
        isToday: dateStr === tStr,
        key: dateStr
      })
    }
    return days
  }

  function getMonthLabel() {
    return MONTHS[currentMonth.value]
  }

  function openWhatsApp(dateStr, cabinName) {
    const [y, m, d] = dateStr.split('-')
    const formatted = parseInt(d) + ' de ' + MONTHS[parseInt(m) - 1] + ' de ' + y
    const msg = encodeURIComponent('Olá! Gostaria de reservar a ' + cabinName + ' para a data: ' + formatted)
    if (onToast) onToast(cabinName + ' · ' + formatted)
    setTimeout(() => {
      window.open('https://wa.me/' + PHONE + '?text=' + msg, '_blank')
    }, 520)
  }

  let refreshInterval = null

  onMounted(() => {
    load()
    refreshInterval = setInterval(load, 60 * 1000)
  })

  onUnmounted(() => {
    if (refreshInterval) clearInterval(refreshInterval)
  })

  return {
    currentYear,
    currentMonth,
    dateMap,
    updatedLabel,
    loading,
    prevMonth,
    nextMonth,
    isPrevDisabled,
    getDays,
    getMonthLabel,
    openWhatsApp,
    load,
    MONTHS
  }
}
