<template>
  <nav :class="{ scrolled }">
    <a href="#" class="nav-logo">Cabana<span> do Park</span></a>
    <ul class="nav-links" :style="menuStyle">
      <li><a href="#sobre" @click="closeMenu">Sobre</a></li>
      <li><a href="#diferenciais" @click="closeMenu">Diferenciais</a></li>
      <li><a href="#galeria" @click="closeMenu">Galeria</a></li>
      <li><a href="#avaliacoes" @click="closeMenu">Avaliações</a></li>
      <li><a href="#localizacao" @click="closeMenu">Localização</a></li>
      <li>
        <a href="#calendario" @click="closeMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:5px"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>Calendário
        </a>
      </li>
      <li>
        <a :href="reservarLink" target="_blank" class="nav-cta" @click="closeMenu">Reservar</a>
      </li>
    </ul>
    <button class="hamburger" aria-label="Menu" @click="toggleMenu">
      <span></span><span></span><span></span>
    </button>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { waLink } from '../config.js'

const scrolled = ref(false)
const menuOpen = ref(false)

const reservarLink = waLink('Olá! Gostaria de fazer uma reserva na Cabana do Park.')

const menuStyle = computed(() => {
  if (!menuOpen.value) return {}
  return {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '70px',
    right: '0',
    left: '0',
    background: 'rgba(26,46,26,.97)',
    backdropFilter: 'blur(14px)',
    padding: '28px 5%',
    gap: '20px',
    zIndex: '99',
  }
})

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
