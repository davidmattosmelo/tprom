# Tprom Web — Soluções Digitais

Site institucional da **Tprom** — presença digital completa para pequenas e médias empresas.

## 🛠 Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Estilos | Tailwind CSS 3 |
| Animações | Framer Motion |
| Ícones | Lucide React |
| Servidor | Nginx (produção) |
| Container | Docker + Docker Compose |

## 📁 Estrutura do Projeto

```
tprom-web/
├── public/                   # Assets estáticos
│   ├── favicon.png
│   ├── logo-branca.svg
│   └── logo-cinza.svg
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx    # Navegação fixa com scroll spy
│   │   │   └── Footer.tsx    # Rodapé com links e social
│   │   ├── sections/
│   │   │   ├── Hero.tsx      # Seção principal com cards flutuantes
│   │   │   ├── About.tsx     # Sobre a empresa
│   │   │   ├── Services.tsx  # Grade de serviços
│   │   │   ├── Plans.tsx     # Plano personalizado
│   │   │   └── Contact.tsx   # Formulário + contatos
│   │   └── ui/
│   │       ├── Button.tsx    # Componente de botão polimórfico
│   │       └── SectionHeader.tsx
│   │
│   ├── constants/
│   │   ├── navigation.ts     # Links de nav, URLs de contato
│   │   ├── services.ts       # Dados dos serviços
│   │   └── contact.ts        # Itens de contato
│   │
│   ├── hooks/
│   │   ├── useTheme.ts       # Dark/light mode com localStorage
│   │   ├── useScrolled.ts    # Detecta scroll para estilizar header
│   │   ├── useScrollSpy.ts   # Rastreia seção ativa na nav
│   │   └── useReveal.ts      # IntersectionObserver para animações
│   │
│   ├── types/
│   │   └── index.ts          # Interfaces e tipos TypeScript
│   │
│   ├── styles/
│   │   └── globals.css       # Tailwind base + estilos globais
│   │
│   ├── App.tsx               # Componente raiz
│   └── main.tsx              # Entry point
│
├── Dockerfile                # Multi-stage (build + nginx)
├── Dockerfile.dev            # Desenvolvimento com HMR
├── docker-compose.yml        # Produção
├── docker-compose.dev.yml    # Desenvolvimento
├── nginx.conf                # Configuração Nginx para SPA
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Rodando o Projeto

### Desenvolvimento local

```bash
npm install
npm run dev
# http://localhost:5173
```

### Docker — Desenvolvimento (com Hot Reload)

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
# http://localhost:5173
```

### Docker — Produção

```bash
docker-compose up --build -d
# http://localhost:80
```

### Build manual

```bash
npm run build
npm run preview
```

## 🎨 Design System

### Paleta de cores

| Variável | Valor | Uso |
|---|---|---|
| `brand-blue` | `#0033ff` | Cor primária, gradiente hero |
| `brand-orange` | `#ff7f00` | Cor secundária (logo), CTAs |
| `brand-yellow` | `#ffc107` | Acento |
| `brand-dark` | `#111111` | Fundo escuro, textos |

### Tipografia

- **Display / Títulos**: [Syne](https://fonts.google.com/specimen/Syne) — geométrica, moderna
- **Body / Texto**: [DM Sans](https://fonts.google.com/specimen/DM+Sans) — legível, clean

## 🔧 Scripts

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # ESLint
npm run type-check   # Verificação TypeScript
```

## 📦 Variáveis de Ambiente

Copie `.env.example` para `.env` e ajuste conforme necessário:

```env
PORT=80
NODE_ENV=production
```

## 🌐 Deploy com Traefik (opcional)

O `docker-compose.yml` inclui labels do Traefik para reverse proxy com HTTPS automático. Configure o domínio nas labels e o Traefik resolverá os certificados SSL automaticamente.

---

© 2025 Tprom. Todos os direitos reservados.
