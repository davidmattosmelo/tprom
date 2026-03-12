import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { NAV_ITEMS } from '@/constants/navigation'
import type { Theme } from '@/types'

interface HeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

function smoothScroll(href: string) {
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled()
  const activeSection = useScrollSpy(NAV_ITEMS.map((i) => i.href))

  const handleNavClick = useCallback(
    (href: string) => {
      smoothScroll(href)
      setMobileOpen(false)
    },
    []
  )

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/90 backdrop-blur-xl shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="flex-shrink-0"
        >
          <img
            src="/logo-branca.svg"
            alt="Tprom"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`relative font-body font-medium text-sm transition-colors duration-200 ${
                  activeSection === item.href
                    ? 'text-brand-orange'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Alternar tema"
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="flex md:hidden items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="absolute top-full left-0 right-0 z-50 bg-brand-dark-2 border-b border-white/10"
            >
              <ul className="container-custom py-4 flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-body font-medium transition-colors duration-200 ${
                        activeSection === item.href
                          ? 'text-brand-orange bg-brand-orange/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}

                <li className="pt-2 pb-1 border-t border-white/10 mt-2">
                  <button
                    onClick={onToggleTheme}
                    className="w-full text-left px-4 py-3 rounded-lg font-body font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors duration-200 flex items-center gap-2"
                  >
                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    {theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
                  </button>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
