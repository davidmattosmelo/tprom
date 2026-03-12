import type { Service } from '@/types'

export const SERVICES: Service[] = [
  // ── Serviços principais (featured) ──────────────────────────────────────
  {
    id: 'software',
    icon: 'Code2',
    title: 'Desenvolvimento de Software',
    description:
      'Criamos sistemas web sob medida para o seu negócio: dashboards, CRMs, ERPs, portais e muito mais. Da ideia ao deploy, entregamos software de qualidade com arquitetura escalável.',
    highlights: [
      'Sistemas web completos (React, Node.js)',
      'Dashboards e painéis administrativos',
      'Integrações com APIs e serviços externos',
      'Arquitetura limpa e código bem documentado',
    ],
    featured: true,
    badge: 'Principal',
  },
  {
    id: 'automation',
    icon: 'Zap',
    title: 'Automação de Processos',
    description:
      'Eliminamos tarefas manuais e repetitivas do seu fluxo de trabalho usando IA e ferramentas modernas de automação. Mais produtividade, menos erro humano.',
    highlights: [
      'Automações com n8n, Make e Zapier',
      'Bots e agentes com Inteligência Artificial',
      'Integração entre sistemas e plataformas',
      'Notificações, relatórios e fluxos automáticos',
    ],
    featured: true,
    badge: 'Com IA',
  },

  // ── Serviços complementares ──────────────────────────────────────────────
  {
    id: 'sites',
    icon: 'Globe',
    title: 'Criação de Sites',
    description:
      'Sites institucionais, landing pages e lojas virtuais responsivos, rápidos e otimizados para conversão.',
    highlights: ['Design responsivo', 'Alta performance', 'SEO otimizado'],
  },
  {
    id: 'video',
    icon: 'Video',
    title: 'Edição de Vídeos',
    description:
      'Produção e edição profissional de vídeos para campanhas de alto impacto.',
    highlights: ['Motion graphics', 'Edição profissional', 'Formatos diversos'],
  },
  {
    id: 'design',
    icon: 'Palette',
    title: 'Artes Gráficas',
    description:
      'Design criativo e estratégico para materiais impressos e digitais de alto impacto.',
    highlights: ['Identidade visual', 'Material impresso', 'Peças digitais'],
  },
]

export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured)
export const COMPLEMENTARY_SERVICES = SERVICES.filter((s) => !s.featured)
