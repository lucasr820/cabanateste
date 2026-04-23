<template>
  <footer>
    <div class="footer-wrap">
      <div class="footer-brand">
        <a href="#" class="nav-logo">Cabana<span> do Park</span></a>
        <p>Um refúgio exclusivo para momentos inesquecíveis em Campo Grande, MS.</p>
      </div>
      <div class="footer-col">
        <h4>Navegação</h4>
        <a href="#sobre">Sobre</a>
        <a href="#diferenciais">Diferenciais</a>
        <a href="#galeria">Galeria</a>
        <a href="#avaliacoes">Avaliações</a>
        <a href="#localizacao">Localização</a>
        <a href="#calendario">Calendário</a>
      </div>
      <div class="footer-col">
        <h4>Contato</h4>
        <a :href="waBase" target="_blank">(67) 99982-6656</a>
        <a href="https://instagram.com/cabanadopark" target="_blank">@cabanadopark</a>
        <a href="#localizacao">Chácara dos Poderes, Campo Grande – MS</a>
      </div>
    </div>
    <p class="footer-bottom">© 2026 Cabana do Park. Todos os direitos reservados.</p>
  </footer>
</template>

<script setup>
import { WA_BASE } from '../config.js'
const waBase = WA_BASE
</script>
