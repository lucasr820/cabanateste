export const PHONE = '5567999826656'

export const WA_BASE = `https://wa.me/${PHONE}`

export function waLink(text) {
  return `${WA_BASE}?text=${encodeURIComponent(text)}`
}
