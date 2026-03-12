import { motion } from 'framer-motion'
import {
  Globe, Video, Palette,
  CheckCircle, Code2, Zap, ArrowRight,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FEATURED_SERVICES, COMPLEMENTARY_SERVICES } from '@/constants/services'

const ICON_MAP = {
  Globe,
  Video,
  Palette,
  Code2,
  Zap,
}

type IconName = keyof typeof ICON_MAP

export function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-brand-gray-light dark:bg-brand-dark relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeader
          label="O que fazemos"
          title="Nossos Serviços"
          subtitle="Do software personalizado ao conteúdo visual — uma equipe para tudo"
        />

        {/* ── Featured services (software + automation) ─────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {FEATURED_SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon as IconName]

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative bg-brand-dark dark:bg-brand-dark-3 rounded-2xl p-8 overflow-hidden border border-white/5 hover:border-brand-orange/30 transition-all duration-300 shadow-card hover:shadow-glow-orange"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Badge */}
                {service.badge && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-display font-semibold bg-brand-orange/15 border border-brand-orange/30 text-brand-orange rounded-full px-3 py-1 mb-5">
                    {service.id === 'automation' && <Zap size={11} />}
                    {service.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/15 flex items-center justify-center mb-5 group-hover:bg-brand-orange group-hover:scale-105 transition-all duration-300">
                  {Icon && (
                    <Icon
                      size={26}
                      className="text-brand-orange group-hover:text-white transition-colors duration-300"
                    />
                  )}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/55 text-sm font-body leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5">
                  {service.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2.5 text-sm text-white/65 font-body"
                    >
                      <CheckCircle size={14} className="text-brand-orange flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-1.5 text-xs font-display font-semibold text-brand-orange opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  Saiba mais <ArrowRight size={13} />
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Divider label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="flex-1 h-px bg-brand-border dark:bg-white/10" />
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-brand-gray-mid dark:text-white/30 whitespace-nowrap">
            Serviços complementares
          </span>
          <div className="flex-1 h-px bg-brand-border dark:bg-white/10" />
        </motion.div>

        {/* ── Complementary services ────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMPLEMENTARY_SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon as IconName]

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group bg-white dark:bg-brand-dark-3 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-transparent hover:border-brand-orange/15"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 dark:bg-brand-orange/15 flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:scale-105 transition-all duration-300">
                  {Icon && (
                    <Icon
                      size={20}
                      className="text-brand-orange group-hover:text-white transition-colors duration-300"
                    />
                  )}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-base text-brand-dark dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-brand-gray-mid dark:text-white/50 text-sm font-body leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5">
                  {service.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-xs text-brand-gray-mid dark:text-white/40 font-body"
                    >
                      <CheckCircle size={12} className="text-brand-orange flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
