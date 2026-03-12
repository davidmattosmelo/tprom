import { motion } from 'framer-motion'
import { Zap, Target, Award } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const PILLARS = [
  {
    icon: Zap,
    title: 'Tecnologia',
    description: 'Usamos as ferramentas mais modernas para entregar resultados de excelência.',
  },
  {
    icon: Target,
    title: 'Estratégia',
    description: 'Cada solução é pensada para os objetivos específicos do seu negócio.',
  },
  {
    icon: Award,
    title: 'Qualidade',
    description: 'Compromisso com a entrega de trabalhos que fazem sua marca brilhar.',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-brand-dark-2">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main card */}
            <div className="relative rounded-3xl bg-hero-gradient p-10 text-white overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-blue/30 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-brand-orange/20 blur-3xl" />

              <div className="relative z-10">
                <p className="font-display text-3xl font-bold mb-2">
                  5<span className="text-brand-orange">+</span>
                </p>
                <p className="text-white/70 text-sm font-body mb-8">Serviços Especializados</p>

                <img src="/logo-branca.svg" alt="Tprom" className="h-10 w-auto opacity-90" />
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-5 -right-5 glass-dark rounded-2xl px-5 py-4 text-white"
            >
              <p className="font-display font-bold text-xl text-brand-orange">PME</p>
              <p className="text-xs text-white/60 font-body">Focados em você</p>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              label="Sobre Nós"
              title="Tecnologia e criatividade a serviço do seu negócio"
              centered={false}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-brand-gray-mid dark:text-white/60 font-body text-base leading-relaxed mb-10"
            >
              A Tprom une tecnologia e criatividade para dar mais visibilidade e
              profissionalismo ao seu negócio. Nossa missão é ajudar pequenas e
              médias empresas a se destacarem online com soluções completas e personalizadas.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 dark:bg-brand-orange/20 flex items-center justify-center mb-3 group-hover:bg-brand-orange/20 transition-colors duration-200">
                    <pillar.icon size={18} className="text-brand-orange" />
                  </div>
                  <h4 className="font-display font-semibold text-sm text-brand-dark dark:text-white mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-brand-gray-mid dark:text-white/50 font-body leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
