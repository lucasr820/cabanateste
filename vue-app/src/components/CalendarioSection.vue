<template>
  <section id="calendario">
    <div class="cal-wrap">

      <div class="cal-header reveal">
        <span class="section-tag">Disponibilidade</span>
        <h2 class="section-title">Verifique a<br><em>disponibilidade</em></h2>
        <p class="section-desc">Selecione a cabana desejada, escolha uma data disponível e reserve agora pelo WhatsApp</p>
      </div>

      <!-- Tabs -->
      <div class="cabin-tabs reveal reveal-delay-1">
        <div
          class="cabin-tab"
          :class="{ active: activeCabin === 'raizes' }"
          data-cabin="raizes"
          @click="activeCabin = 'raizes'"
        >
          <div class="tab-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14"/><path d="m14 10 3 3.3a1 1 0 0 1-.7 1.7H7.7a1 1 0 0 1-.7-1.7L10 10"/><path d="M12 2 8.3 6.3a1 1 0 0 0 .7 1.7h6a1 1 0 0 0 .7-1.7L12 2"/><path d="M12 22v-3"/></svg>
          </div>
          <div class="tab-name">Raízes</div>
          <div class="tab-desc">Rústica · Original</div>
        </div>
        <div
          class="cabin-tab"
          :class="{ active: activeCabin === 'pilar' }"
          data-cabin="pilar"
          @click="activeCabin = 'pilar'"
        >
          <div class="tab-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
          </div>
          <div class="tab-name">Pilar</div>
          <div class="tab-desc">Moderna · Nova</div>
        </div>
      </div>

      <!-- Panels -->
      <div class="cal-panel" :class="{ active: activeCabin === 'raizes' }" id="panel-raizes">
        <CabinCalendar
          cabin-id="raizes"
          cabin-name="Cabana Raízes"
          :sheets-url="cabins.raizes.sheetsUrl"
          :fallback-dates="cabins.raizes.fallback"
          badge-text="Cabana Raízes — Aspectos rústicos e aconchegantes"
          info-text="A primeira unidade da Cabana do Park. Ambiente rústico, madeira original, banheira aquecida e aquela sensação de estar em plena natureza."
        />
      </div>

      <div class="cal-panel" :class="{ active: activeCabin === 'pilar' }" id="panel-pilar">
        <CabinCalendar
          cabin-id="pilar"
          cabin-name="Cabana Pilar"
          :sheets-url="cabins.pilar.sheetsUrl"
          :fallback-dates="cabins.pilar.fallback"
          badge-text="Cabana Pilar — Design moderno e sofisticado"
          info-text="A unidade mais nova, com design contemporâneo e acabamentos modernos. Sofisticação e conforto elevados para uma experiência ainda mais exclusiva."
        />
      </div>

    </div>
  </section>

  <!-- Toast (global, positioned fixed) -->
  <div class="cal-toast" :class="{ show: toastVisible }">
    ✓ Abrindo WhatsApp para <b>{{ toastText }}</b>...
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import CabinCalendar from './CabinCalendar.vue'

const activeCabin = ref('raizes')

const cabins = {
  raizes: {
    sheetsUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDzJ1liKtRHtthJwohAGgO7Y7iamsYrLtKBA0A-qrhAo2han_04Wso18RyfqVrQIk-6OrtptJkZLNR/pub?gid=0&single=true&output=csv',
    fallback: [],
  },
  pilar: {
    sheetsUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRQ8RG4EaT7gxcYp_zBjYi2y3WYs5_soFMZc1VIP-WiCsqTnCGSc5zMEmWHVUIJC4JxYAvbafpTDZTs/pub?output=csv',
    fallback: [],
  },
}

// Toast state — shared with CabinCalendar via provide/inject
const toastVisible = ref(false)
const toastText = ref('')
let toastTimer = null

function showToast(text) {
  toastText.value = text
  toastVisible.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastVisible.value = false }, 3500)
}

provide('showToast', showToast)
</script>
