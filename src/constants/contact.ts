import type { ContactItem } from '@/types'
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from './navigation'

export const CONTACT_ITEMS: ContactItem[] = [
  {
    id: 'whatsapp',
    icon: 'MessageCircle',
    label: 'WhatsApp',
    value: '+55 73 98157-0676',
    href: WHATSAPP_URL,
  },
  {
    id: 'email',
    icon: 'Mail',
    label: 'E-mail',
    value: 'tpromprado@gmail.com',
    href: `mailto:${EMAIL}`,
  },
  {
    id: 'instagram',
    icon: 'Instagram',
    label: 'Instagram',
    value: '@tprom.oficial',
    href: INSTAGRAM_URL,
  },
]
