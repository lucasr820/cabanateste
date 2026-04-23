<template>
  <section id="localizacao">
    <div class="loc-wrap">
      <div class="loc-map reveal">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.0414847627057!2d-54.52598932476001!3d-20.4223739810795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e989bb26f78b%3A0xd4b6fc4258a10f18!2sCabana%20Do%20park!5e0!3m2!1spt-BR!2sbr!4v1774374507666!5m2!1spt-BR!2sbr"
          title="Localização Cabana do Park"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
      <div class="loc-info reveal reveal-delay-1">
        <span class="section-tag">Como chegar</span>
        <h2 class="section-title">Fácil acesso,<br>perto de <em>tudo</em></h2>
        <p class="section-desc">Localizado na Chácara dos Poderes, em Campo Grande — um refúgio natural a poucos minutos da cidade. Acesso fácil e indicações fornecidas no momento da reserva.</p>
        <div class="loc-detail">
          <div class="loc-detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div class="loc-detail-text">
            <strong>Endereço</strong>
            <span>Estr. Né Oito, 362 – Chácara dos Poderes, Campo Grande – MS</span>
          </div>
        </div>
        <div class="loc-detail">
          <div class="loc-detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 9.8 19.79 19.79 0 0 1 1.08 1.18 2 2 0 0 1 3.08 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>
          </div>
          <div class="loc-detail-text">
            <strong>WhatsApp / Telefone</strong>
            <span>(67) 99982-6656</span>
          </div>
        </div>
        <div class="loc-detail">
          <div class="loc-detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </div>
          <div class="loc-detail-text">
            <strong>Instagram</strong>
            <a href="https://instagram.com/cabanadopark" target="_blank" style="color:inherit;text-decoration:none;">@cabanadopark</a>
          </div>
        </div>
        <a :href="reservarLink" target="_blank" class="btn-primary" style="margin-top:28px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Reservar pelo WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { waLink } from '../config.js'
const reservarLink = waLink('Olá! Gostaria de fazer uma reserva na Cabana do Park.')
</script>
