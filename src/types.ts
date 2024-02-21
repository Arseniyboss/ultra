export type Image = {
  src: string
  width: number
  height: number
}

export type PageSection = {
  id: string
  heading: string
  description: string
  buttonLabel: string
  img: Image
}

export type FooterSection = {
  title: string
  links: string[]
}
