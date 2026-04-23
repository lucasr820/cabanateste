<template>
  <!-- Stats bar lives outside sections to match original layout -->
  <NavBar />
  <HeroSection />

  <!-- Stats Bar -->
  <div class="stats-bar">
    <div class="stat reveal"><span class="stat-num">4,5★</span><span class="stat-label">Avaliação Google</span></div>
    <div class="stat reveal reveal-delay-1"><span class="stat-num">100%</span><span class="stat-label">Privacidade</span></div>
    <div class="stat reveal reveal-delay-3"><span class="stat-num">10km</span><span class="stat-label">Do centro</span></div>
  </div>

  <SobreSection />
  <DiferenciaisSection />
  <GaleriaSection />
  <AvaliacoesSection />
  <LocalizacaoSection />
  <CalendarioSection />
  <CtaSection />
  <FooterSection />
  <WaFloat />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import SobreSection from './components/SobreSection.vue'
import DiferenciaisSection from './components/DiferenciaisSection.vue'
import GaleriaSection from './components/GaleriaSection.vue'
import AvaliacoesSection from './components/AvaliacoesSection.vue'
import LocalizacaoSection from './components/LocalizacaoSection.vue'
import CalendarioSection from './components/CalendarioSection.vue'
import CtaSection from './components/CtaSection.vue'
import FooterSection from './components/FooterSection.vue'
import WaFloat from './components/WaFloat.vue'
import { useScrollReveal } from './composables/useScrollReveal.js'

useScrollReveal()
</script>
