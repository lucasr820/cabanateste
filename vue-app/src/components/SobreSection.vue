<template>
  <section id="sobre">
    <div class="sobre-wrap">
      <div class="sobre-img-grid reveal">
        <div class="sobre-img">
          <img src="/assets/images/aconchegantepilar.webp" alt="Interior aconchegante da cabana" />
        </div>
        <div class="sobre-img">
          <img src="/assets/images/banheiraaquecida.webp" alt="Banheira aquecida" />
        </div>
        <div class="sobre-img">
          <img src="/assets/images/natureza.webp" alt="Natureza ao redor" />
        </div>
      </div>
      <div class="sobre-text reveal reveal-delay-1">
        <span class="section-tag">Sobre o local</span>
        <h2 class="section-title">Um lugar onde o<br><em>tempo para</em></h2>
        <p class="section-desc">
          A Cabana do Park foi criada para quem busca um refúgio íntimo e exclusivo.
          Aqui, cada detalhe foi pensado para proporcionar uma experiência única —
          longe do barulho, perto do que realmente importa.
        </p>
        <ul class="sobre-bullets">
          <li>
            <div class="bullet-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </div>
            <span>Ambiente completamente cercado pela natureza, proporcionando paz e silêncio absolutos</span>
          </li>
          <li>
            <div class="bullet-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <span>Ideal para casais que desejam renovar os momentos especiais com privacidade total</span>
          </li>
          <li>
            <div class="bullet-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span>Localizado na Chácara dos Poderes, a apenas minutos do centro de Campo Grande</span>
          </li>
          <li>
            <div class="bullet-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4M19 17v4M3 5h4M17 19h4"/></svg>
            </div>
            <span>Ambiente decorado com requinte, limpeza impecável e conforto de alto padrão</span>
          </li>
        </ul>
        <a :href="falarLink" target="_blank" class="btn-primary">Falar com a gente</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { waLink } from '../config.js'
const falarLink = waLink('Olá! Gostaria de saber mais sobre a Cabana do Park.')
</script>
