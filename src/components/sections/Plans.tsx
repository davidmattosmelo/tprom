import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle, Sparkles } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { WHATSAPP_URL } from '@/constants/navigation'

const PLAN_FEATURES = [
  'Análise gratuita das suas necessidades digitais',
  'Combinação personalizada de serviços',
  'Suporte e atendimento dedicado',
  'Resultados mensuráveis e relatórios',
  'Ajustes e otimizações contínuas',
]

export function Plans() {
  const whatsappMessage = encodeURIComponent(
    'Olá! Tenho interesse em montar um plano personalizado para minha empresa. Gostaria de mais informações.'
  )

  return (
    <section
      id="plans"
      className="section-padding bg-brand-dark relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          label="Planos"
          title="Plano Sob Medida"
          subtitle="Sua empresa é única. Seu marketing digital também deveria ser."
          light
        />

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Card */}
            <div className="rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 md:p-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-6">
                <Sparkles size={14} className="text-brand-orange" />
                <span className="text-brand-orange text-xs font-display font-semibold tracking-wide uppercase">
                  Como Funciona
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Desenvolvemos a solução ideal para o seu negócio
              </h3>

              <p className="text-white/60 font-body text-sm leading-relaxed mb-8">
                Vamos conversar e montar juntos o plano perfeito. Você escolhe os serviços,
                nós entregamos os resultados.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {PLAN_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/70 font-body">
                    <CheckCircle size={16} className="text-brand-orange flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                as="a"
                href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                fullWidth
              >
                <MessageCircle size={20} />
                Solicitar Proposta Personalizada
              </Button>
            </div>

            {/* Glow effect behind card */}
            <div className="absolute inset-0 rounded-3xl bg-brand-orange/5 blur-xl -z-10 scale-105" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
