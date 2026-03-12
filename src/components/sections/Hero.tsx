import { motion } from 'framer-motion'
import { Globe, Video, Code2, Zap, ArrowDown, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { WHATSAPP_URL } from '@/constants/navigation'

const FLOATING_CARDS = [
  {
    icon: Code2,
    label: 'Software',
    className: 'top-8 left-0 animate-float',
  },
  {
    icon: Zap,
    label: 'Automação',
    className: 'top-8 right-0 animate-float-delayed',
  },
  {
    icon: Globe,
    label: 'Sites',
    className: 'bottom-8 left-8 animate-float-delayed-2',
  },
  {
    icon: Video,
    label: 'Vídeos',
    className: 'bottom-8 right-0 animate-float-delayed-3',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function smoothScroll(href: string) {
  const target = document.querySelector(href)
  if (target) target.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl pulse-glow" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-orange/15 blur-3xl pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-140px)]">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <div className="glow-dot" />
              <span className="text-sm font-body font-medium text-white/70 tracking-wide">
                Tecnologia para o seu negócio
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 text-balance"
            >
              Sua empresa no{' '}
              <span className="gradient-text">próximo nível</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/65 font-body mb-8 max-w-lg leading-relaxed"
            >
              Criamos sistemas sob medida, automatizamos o que é manual e construímos
              uma presença digital que{' '}
              <span className="text-white/90 font-medium">vende.</span>
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                as="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                <MessageCircle size={20} />
                Fale Conosco no WhatsApp
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={() => smoothScroll('#services')}
              >
                Ver Serviços
              </Button>
            </motion.div>
          </motion.div>

          {/* Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-80 lg:h-[460px] flex items-center justify-center"
          >
            {/* Central orb */}
            <div className="relative w-48 h-48 lg:w-56 lg:h-56">
              <div className="absolute inset-0 rounded-full bg-brand-blue/30 blur-2xl" />
              <div className="absolute inset-4 rounded-full bg-brand-blue/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <img src="/logo-branca.svg" alt="Tprom" className="w-28 h-auto" />
              </div>
              <div className="absolute inset-0 rounded-full border border-white/10"
                style={{ animation: 'spin 20s linear infinite' }}
              />
            </div>

            {/* Floating Cards */}
            {FLOATING_CARDS.map(({ icon: Icon, label, className }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
                className={`absolute glass rounded-2xl px-4 py-3 flex items-center gap-3 ${className}`}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-brand-orange" />
                </div>
                <span className="text-sm font-display font-semibold text-white whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs font-body tracking-widest uppercase">Role</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
