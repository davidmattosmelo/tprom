// DOM Elements
const themeToggle = document.getElementById("theme-toggle")
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const emailForm = document.getElementById("email-form")
const contactForm = document.getElementById("contact-form")
const filterBtns = document.querySelectorAll(".filter__btn")
const portfolioItems = document.querySelectorAll(".portfolio__item")
const navLinks = document.querySelectorAll(".nav__link")

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
  updateThemeIcon(savedTheme)
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
}

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector("i")
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon"
}

// Mobile Navigation
function toggleMobileNav() {
  navMenu.classList.toggle("active")
  const icon = navToggle.querySelector("i")
  icon.className = navMenu.classList.contains("active") ? "fas fa-times" : "fas fa-bars"
}

function closeMobileNav() {
  navMenu.classList.remove("active")
  const icon = navToggle.querySelector("i")
  icon.className = "fas fa-bars"
}

// Portfolio Filter
function filterPortfolio(category) {
  portfolioItems.forEach((item) => {
    const itemCategory = item.getAttribute("data-category")

    if (category === "all" || itemCategory === category) {
      item.style.display = "block"
      setTimeout(() => {
        item.style.opacity = "1"
        item.style.transform = "scale(1)"
      }, 10)
    } else {
      item.style.opacity = "0"
      item.style.transform = "scale(0.8)"
      setTimeout(() => {
        item.style.display = "none"
      }, 300)
    }
  })
}

// Smooth Scrolling for Navigation Links
function smoothScroll(target) {
  const element = document.querySelector(target)
  if (element) {
    const headerHeight = document.querySelector(".header").offsetHeight
    const elementPosition = element.offsetTop - headerHeight

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }
}

// Google Sheets Configuration
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycby-_AyOM_lypomFP6Zvr78GUMWhTNj2pLq3Yx8RkSDt47ncOS-0J7OAZ22ocqTY4AUA/exec'

// Function to send data to Google Sheets
async function sendToGoogleSheets(data) {
  console.log('🚀 Enviando dados para Google Sheets:', data)
  console.log('📍 URL:', GOOGLE_SHEETS_URL)

  try {
    // Criar FormData para enviar como form-encoded
    const formData = new FormData()
    Object.keys(data).forEach(key => {
      formData.append(key, data[key])
    })

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      body: formData
    })

    // Como usamos no-cors, não podemos ler a resposta
    // Mas se chegou até aqui sem erro, provavelmente funcionou
    console.log('✅ Dados enviados para Google Sheets')
    console.log('📊 Status da resposta:', response.type)
    return true
  } catch (error) {
    console.error('❌ Erro ao enviar para Google Sheets:', error)
    return false
  }
}

// Function to send data to WhatsApp
function sendToWhatsApp(data) {
  console.log('📱 Iniciando envio para WhatsApp:', data)
  
  let message = `🌟 *Nova mensagem do site Tprom!*\n\n`

  if (data.nome) message += `👤 *Nome:* ${data.nome}\n`
  if (data.email) message += `📧 *E-mail:* ${data.email}\n`
  if (data.telefone) message += `📱 *Telefone:* ${data.telefone}\n`
  if (data.mensagem) message += `💬 *Mensagem:* ${data.mensagem}\n`
  if (data.tipo) message += `📋 *Tipo:* ${data.tipo}\n`

  message += `\n⏰ *Data:* ${new Date().toLocaleString('pt-BR')}`

  const whatsappUrl = `https://wa.me/5573982005252?text=${encodeURIComponent(message)}`
  
  console.log('📲 URL do WhatsApp gerada:', whatsappUrl)
  console.log('📝 Mensagem formatada:', message)
  
  try {
    const newWindow = window.open(whatsappUrl, '_blank')
    if (newWindow) {
      console.log('✅ WhatsApp aberto com sucesso!')
    } else {
      console.warn('⚠️ Pop-up bloqueado! Tentando alternativa...')
      // Alternativa: usar location.href
      window.location.href = whatsappUrl
    }
  } catch (error) {
    console.error('❌ Erro ao abrir WhatsApp:', error)
    // Fallback: mostrar URL para o usuário
    alert(`Não foi possível abrir o WhatsApp automaticamente. Copie este link: ${whatsappUrl}`)
  }
}

// Form Handling
async function handleEmailSubmit(e) {
  e.preventDefault()
  const email = e.target.querySelector('input[type="email"]').value

  const button = e.target.querySelector("button")
  const originalText = button.textContent

  button.textContent = "Enviando..."
  button.disabled = true

  // Prepare data
  const data = {
    email: email,
    tipo: 'Newsletter',
    data: new Date().toISOString(),
    timestamp: new Date().toLocaleString('pt-BR')
  }

  console.log('📧 Dados do formulário de email:', data)

  // Send to Google Sheets (background)
  const sheetsResult = await sendToGoogleSheets(data)
  console.log('📊 Resultado do envio para Google Sheets:', sheetsResult)

  // Send to WhatsApp
  sendToWhatsApp(data)

  // Reset form
  setTimeout(() => {
    e.target.reset()
    button.textContent = originalText
    button.disabled = false
  }, 1000)
}

async function handleContactSubmit(e) {
  e.preventDefault()
  const formData = new FormData(e.target)
  const formObject = Object.fromEntries(formData)

  const button = e.target.querySelector('button[type="submit"]')
  const originalText = button.textContent

  button.textContent = "Enviando..."
  button.disabled = true

  // Get form inputs by their placeholders since they don't have names
  const inputs = e.target.querySelectorAll('.form__input')
  const data = {
    nome: inputs[0]?.value || '',
    email: inputs[1]?.value || '',
    telefone: inputs[2]?.value || '',
    mensagem: inputs[3]?.value || '',
    tipo: 'Contato',
    data: new Date().toISOString(),
    timestamp: new Date().toLocaleString('pt-BR')
  }

  console.log('📝 Dados do formulário de contato:', data)

  // Send to Google Sheets (background)
  const sheetsResult = await sendToGoogleSheets(data)
  console.log('📊 Resultado do envio para Google Sheets:', sheetsResult)

  // Send to WhatsApp (com pequeno delay)
  setTimeout(() => {
    sendToWhatsApp(data)
  }, 500)

  // Reset form
  setTimeout(() => {
    e.target.reset()
    button.textContent = originalText
    button.disabled = false
  }, 1000)
}

// Header Scroll Effect - ATUALIZADO PARA HEADER TRANSPARENTE
function handleScroll() {
  const header = document.querySelector(".header")
  const scrollTop = window.pageYOffset

  if (scrollTop > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
}

// Intersection Observer for Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".service__card, .portfolio__item, .plan__card, .stat")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Active Navigation Link
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]")
  const scrollPos = window.pageYOffset + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  initTheme()
  initScrollAnimations()
  handleScroll() // Verifica o scroll inicial
})

themeToggle.addEventListener("click", toggleTheme)
navToggle.addEventListener("click", toggleMobileNav)

// Close mobile nav when clicking on links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const target = link.getAttribute("href")
    smoothScroll(target)
    closeMobileNav()
  })
})

// Portfolio filter buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"))
    // Add active class to clicked button
    btn.classList.add("active")
    // Filter portfolio items
    const category = btn.getAttribute("data-filter")
    filterPortfolio(category)
  })
})

// Form submissions
if (emailForm) {
  emailForm.addEventListener("submit", handleEmailSubmit)
}

if (contactForm) {
  contactForm.addEventListener("submit", handleContactSubmit)
}

// Scroll events
window.addEventListener("scroll", () => {
  handleScroll()
  updateActiveNavLink()
})

// Close mobile nav when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    closeMobileNav()
  }
})

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMobileNav()
  }
})

// Plan selection handling
document.querySelectorAll(".plan__card .btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
    const planTitle = e.target.closest(".plan__card").querySelector(".plan__title").textContent
    const message = `Olá! Tenho interesse em montar um plano. Gostaria de mais informações.`
    const whatsappUrl = `https://wa.me/5573982005252?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  })
})

// Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src || img.src
        img.classList.remove("loading")
        observer.unobserve(img)
      }
    })
  })

  document.querySelectorAll("img[data-src]").forEach((img) => {
    img.classList.add("loading")
    imageObserver.observe(img)
  })
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debounce to scroll handler
window.addEventListener(
  "scroll",
  debounce(() => {
    handleScroll()
    updateActiveNavLink()
  }, 10),
)