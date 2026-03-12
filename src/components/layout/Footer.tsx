import { Instagram, MessageCircle, ArrowUp } from 'lucide-react'
import { WHATSAPP_URL, INSTAGRAM_URL, NAV_ITEMS } from '@/constants/navigation'

function smoothScroll(href: string) {
  const target = document.querySelector(href)
  if (target) target.scrollIntoView({ behavior: 'smooth' })
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-white/5">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src="/logo-branca.svg" alt="Tprom" className="h-9 w-auto mb-4" />
            <p className="text-white/50 text-sm font-body leading-relaxed max-w-xs">
              Presença digital completa para pequenas e médias empresas se destacarem online.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => smoothScroll(item.href)}
                    className="text-white/60 hover:text-brand-orange text-sm font-body transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Redes
            </h4>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-200"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} Tprom. Todos os direitos reservados.
          </p>

          <button
            onClick={() => smoothScroll('#home')}
            aria-label="Voltar ao topo"
            className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-orange hover:border-brand-orange/50 transition-all duration-200"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
