<template>
  <div>
    <!-- Header row: badge + source badge -->
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:8px;">
      <span class="cal-cabin-badge" :class="cabinId">
        <svg v-if="cabinId === 'raizes'" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14"/><path d="m14 10 3 3.3a1 1 0 0 1-.7 1.7H7.7a1 1 0 0 1-.7-1.7L10 10"/><path d="M12 2 8.3 6.3a1 1 0 0 0 .7 1.7h6a1 1 0 0 0 .7-1.7L12 2"/><path d="M12 22v-3"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
        {{ badgeText }}
      </span>
      <div class="cal-source-badge">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>
        Google Sheets
        <span>{{ updatedLabel }}</span>
      </div>
    </div>

    <!-- Legend -->
    <div class="cal-legend">
      <div class="cal-legend-item"><div class="cal-legend-dot leg-available"></div> Disponível</div>
      <div class="cal-legend-item"><div class="cal-legend-dot leg-hot"></div> Mais procurado 🔥</div>
      <div class="cal-legend-item"><div class="cal-legend-dot leg-unavailable"></div> Indisponível</div>
    </div>

    <!-- Navigation -->
    <div class="cal-nav">
      <button class="cal-nav-btn" :disabled="isPrevDisabled()" @click="prevMonth" aria-label="Mês anterior">&#8592;</button>
      <div class="cal-month-label">{{ getMonthLabel() }} <span>{{ currentYear }}</span></div>
      <button class="cal-nav-btn" @click="nextMonth" aria-label="Próximo mês">&#8594;</button>
    </div>

    <!-- Weekday headers -->
    <div class="cal-weekdays">
      <div class="cal-weekday">Dom</div>
      <div class="cal-weekday">Seg</div>
      <div class="cal-weekday">Ter</div>
      <div class="cal-weekday">Qua</div>
      <div class="cal-weekday">Qui</div>
      <div class="cal-weekday">Sex</div>
      <div class="cal-weekday">Sáb</div>
    </div>

    <!-- Calendar grid -->
    <div class="cal-grid">
      <template v-if="loading">
        <div class="cal-loading">
          <div class="cal-spinner"></div>
          <span>Carregando datas...</span>
        </div>
      </template>
      <template v-else>
        <div
          v-for="day in getDays()"
          :key="day.key"
          class="cal-day"
          :class="[day.type, day.isToday ? 'today-mark' : '']"
          :title="getDayTitle(day)"
          @click="day.type === 'available' || day.type === 'hot' ? openWhatsApp(day.dateStr, cabinName) : null"
        >
          <span v-if="day.type !== 'empty'" class="day-num">{{ day.day }}</span>
        </div>
      </template>
    </div>

    <!-- Info box -->
    <div class="cal-info" style="margin-top:24px;">
      <div class="cal-info-icon">
        <svg v-if="cabinId === 'raizes'" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14"/><path d="m14 10 3 3.3a1 1 0 0 1-.7 1.7H7.7a1 1 0 0 1-.7-1.7L10 10"/><path d="M12 2 8.3 6.3a1 1 0 0 0 .7 1.7h6a1 1 0 0 0 .7-1.7L12 2"/><path d="M12 22v-3"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
      </div>
      <div class="cal-info-text">
        <strong>{{ cabinName }}</strong>
        <p>{{ infoText }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { useCalendario } from '../composables/useCalendario.js'

const props = defineProps({
  cabinId:       { type: String, required: true },
  cabinName:     { type: String, required: true },
  sheetsUrl:     { type: String, required: true },
  fallbackDates: { type: Array, default: () => [] },
  badgeText:     { type: String, default: '' },
  infoText:      { type: String, default: '' },
})

const showToast = inject('showToast', null)

const {
  currentYear,
  currentMonth,
  updatedLabel,
  loading,
  prevMonth,
  nextMonth,
  isPrevDisabled,
  getDays,
  getMonthLabel,
  openWhatsApp,
} = useCalendario(props.sheetsUrl, props.fallbackDates, showToast)

function getDayTitle(day) {
  if (day.type === 'unavailable') return 'Data indisponível'
  if (day.type === 'hot') return '◆ Data muito procurada! Reserve logo'
  if (day.type === 'available') return 'Clique para reservar esta data'
  return ''
}
</script>
