import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="w-6 h-px bg-brand-orange" />
          <span
            className={`text-sm font-semibold uppercase tracking-widest font-display ${
              light ? 'text-brand-orange' : 'text-brand-orange'
            }`}
          >
            {label}
          </span>
          <span className="w-6 h-px bg-brand-orange" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${
          light ? 'text-white' : 'text-brand-dark dark:text-white'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light
              ? 'text-white/70'
              : 'text-brand-gray-mid dark:text-white/60'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
