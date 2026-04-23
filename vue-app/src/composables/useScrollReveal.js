import { onMounted } from 'vue'

export function useScrollReveal(selector = '.reveal') {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll(selector).forEach(el => observer.observe(el))
  })
}
