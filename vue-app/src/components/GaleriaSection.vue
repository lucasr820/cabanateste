<template>
  <section id="galeria">
    <div style="max-width:1200px;margin:0 auto;">
      <div class="galeria-header reveal">
        <span class="section-tag">Galeria</span>
        <h2 class="section-title">Veja o paraíso<br>que <em>te espera</em></h2>
      </div>
      <div class="galeria-grid">
        <div v-for="(img, i) in images" :key="img.src" class="g-item" :class="['reveal', i > 0 && i <= 2 ? 'reveal-delay-' + i : '']">
          <img :src="img.src" :alt="img.alt" @click="openLightbox(i)" />
          <div class="g-overlay"><span>{{ img.label }}</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <div class="lightbox" :class="{ active: lightboxOpen }" @click.self="closeLightbox">
    <button class="lb-btn lb-prev" aria-label="Anterior" @click="prevImage">&#8249;</button>
    <img
      class="lightbox-img"
      :src="images[lightboxIndex]?.src"
      :alt="images[lightboxIndex]?.alt"
      :style="{ opacity: imgVisible ? 1 : 0 }"
    />
    <button class="lb-btn lb-next" aria-label="Próxima" @click="nextImage">&#8250;</button>
    <button class="lb-close" aria-label="Fechar" @click="closeLightbox">&#x2715;</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  { src: '/assets/images/camapilar.webp',    alt: 'Cama da cabana',           label: 'Interior aconchegante' },
  { src: '/assets/images/pilarbanheira.webp', alt: 'Banheira',                label: 'Banheira quentinha' },
  { src: '/assets/images/cozinhapilar.webp',  alt: 'Cozinha da Pilar',        label: 'Utensílios para cozinha' },
  { src: '/assets/images/interiorpilar.webp', alt: 'Interior',                label: 'Interior da cabana' },
  { src: '/assets/images/cozinharaiz.webp',   alt: 'Cozinha da Raiz',         label: 'Cozinha da Raiz' },
  { src: '/assets/images/foraraiz.webp',      alt: 'Área externa da Raiz',    label: 'Grande área externa' },
]

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const imgVisible = ref(true)

function openLightbox(i) {
  lightboxIndex.value = i
  imgVisible.value = true
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function showImg(i) {
  lightboxIndex.value = (i + images.length) % images.length
  imgVisible.value = false
  setTimeout(() => { imgVisible.value = true }, 50)
}

function prevImage() { showImg(lightboxIndex.value - 1) }
function nextImage() { showImg(lightboxIndex.value + 1) }

function onKey(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape')     closeLightbox()
  if (e.key === 'ArrowLeft')  prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

let touchStartX = 0
function onTouchStart(e) { touchStartX = e.changedTouches[0].clientX }
function onTouchEnd(e) {
  const dx = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(dx) > 50) showImg(lightboxIndex.value + (dx < 0 ? 1 : -1))
}

onMounted(() => {
  document.addEventListener('keydown', onKey)
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKey)
})
</script>
