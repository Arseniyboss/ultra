import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animateSection = (id: string) => {
  gsap.fromTo(
    `#${id}`,
    { y: -20 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      scrollTrigger: {
        trigger: `#${id}`,
        start: 'top 50%',
      },
    },
  )
}

export const animateCard = () => {
  gsap.to('.card', {
    opacity: 1,
    stagger: 0.2,
    duration: 0.6,
    scrollTrigger: {
      trigger: `.card`,
      start: 'top 70%',
    },
  })
}
