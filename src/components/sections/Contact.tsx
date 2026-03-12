import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Instagram, Send, CheckCircle } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { CONTACT_ITEMS } from '@/constants/contact'
import { WHATSAPP_URL } from '@/constants/navigation'
import type { FormData } from '@/types'

const ICON_MAP = {
  MessageCircle,
  Mail,
  Instagram,
}

type IconName = keyof typeof ICON_MAP

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = `Olá! Me chamo ${form.name}.\n\nE-mail: ${form.email}\nTelefone: ${form.phone}\n\nMensagem:\n${form.message}`
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm(INITIAL_FORM)
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-brand-dark-2"
    >
      <div className="container-custom">
        <SectionHeader
          label="Contato"
          title="Vamos conversar sobre seu projeto"
          subtitle="Estamos prontos para transformar sua presença digital"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {CONTACT_ITEMS.map((item, i) => {
              const Icon = ICON_MAP[item.icon as IconName]
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-brand-gray-light dark:bg-brand-dark-3 border border-transparent hover:border-brand-orange/20 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-orange/10 dark:bg-brand-orange/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange transition-colors duration-200">
                    {Icon && (
                      <Icon
                        size={20}
                        className="text-brand-orange group-hover:text-white transition-colors duration-200"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-brand-dark dark:text-white">
                      {item.label}
                    </p>
                    <p className="text-sm text-brand-gray-mid dark:text-white/50 font-body">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-body font-medium text-brand-dark dark:text-white/80 mb-2">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-xl border border-brand-border dark:border-brand-border-dark bg-white dark:bg-brand-dark-3 text-brand-dark dark:text-white placeholder:text-brand-gray-mid/60 dark:placeholder:text-white/30 font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-body font-medium text-brand-dark dark:text-white/80 mb-2">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-brand-border dark:border-brand-border-dark bg-white dark:bg-brand-dark-3 text-brand-dark dark:text-white placeholder:text-brand-gray-mid/60 dark:placeholder:text-white/30 font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-body font-medium text-brand-dark dark:text-white/80 mb-2">
                  Telefone <span className="text-brand-gray-mid dark:text-white/30 font-normal">(opcional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-brand-border dark:border-brand-border-dark bg-white dark:bg-brand-dark-3 text-brand-dark dark:text-white placeholder:text-brand-gray-mid/60 dark:placeholder:text-white/30 font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-body font-medium text-brand-dark dark:text-white/80 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Conte sobre seu projeto..."
                  className="w-full px-4 py-3 rounded-xl border border-brand-border dark:border-brand-border-dark bg-white dark:bg-brand-dark-3 text-brand-dark dark:text-white placeholder:text-brand-gray-mid/60 dark:placeholder:text-white/30 font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all duration-200 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Enviado com sucesso!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensagem via WhatsApp
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
