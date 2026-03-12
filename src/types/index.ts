export interface NavItem {
  label: string
  href: string
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  highlights: string[]
  featured?: boolean
  badge?: string
}

export interface ContactItem {
  id: string
  icon: string
  label: string
  value: string
  href: string
}

export interface FloatingCardData {
  icon: string
  label: string
  animationClass: string
  position: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export type Theme = 'light' | 'dark'
