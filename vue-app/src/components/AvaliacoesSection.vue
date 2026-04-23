<template>
  <section id="avaliacoes">
    <div style="max-width:1200px;margin:0 auto;">
      <div class="avaliacoes-header reveal">
        <span class="section-tag">Avaliações</span>
        <h2 class="section-title">O que nossos<br><em>hóspedes dizem</em></h2>
        <div class="rating-summary">
          <div class="rating-big">4,5</div>
          <div>
            <div class="stars">★★★★½</div>
            <div class="rating-count">15 avaliações no Google</div>
          </div>
        </div>
      </div>
      <div class="reviews-grid">
        <div v-for="(review, i) in reviews" :key="review.name"
          class="review-card reveal"
          :class="i > 0 ? 'reveal-delay-' + i : ''"
        >
          <div class="review-quote">"</div>
          <p class="review-text">{{ review.text }}</p>
          <div class="review-author">
            <div class="review-avatar">{{ review.initial }}</div>
            <div>
              <div class="review-name">{{ review.name }}</div>
              <div class="review-stars">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    initial: 'A',
    name: 'Ana Paula S.',
    text: 'Lugar aconchegante, limpo, silencioso e romântico. Banheira quentinha e cama muito confortável! Superou todas as nossas expectativas.',
  },
  {
    initial: 'M',
    name: 'Marcos R.',
    text: 'Perfeito para relaxar e ficar em paz. A privacidade é total, o ambiente é lindo. Nos sentimos em outro mundo estando tão perto da cidade.',
  },
  {
    initial: 'C',
    name: 'Camila F.',
    text: 'Tudo muito lindo e maravilhoso. A decoração é impecável e a estrutura do lugar é de dar inveja. Com certeza voltaremos em breve!',
  },
  {
    initial: 'R',
    name: 'Rafael & Ju',
    text: 'Experiência incrível! O atendimento é excelente, muito atenciosos. A cabana é gostosa, limpa e com tudo que precisamos para relaxar.',
  },
]
</script>
