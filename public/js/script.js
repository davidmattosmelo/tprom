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

// Form Handling
function handleEmailSubmit(e) {
  e.preventDefault()
  const email = e.target.querySelector('input[type="email"]').value

  // Simulate form submission
  const button = e.target.querySelector("button")
  const originalText = button.textContent

  button.textContent = "Enviando..."
  button.disabled = true

  setTimeout(() => {
    alert(`Obrigado! Entraremos em contato através do e-mail: ${email}`)
    e.target.reset()
    button.textContent = originalText
    button.disabled = false
  }, 1500)
}

function handleContactSubmit(e) {
  e.preventDefault()
  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)

  // Simulate form submission
  const button = e.target.querySelector('button[type="submit"]')
  const originalText = button.textContent

  button.textContent = "Enviando..."
  button.disabled = true

  setTimeout(() => {
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    e.target.reset()
    button.textContent = originalText
    button.disabled = false
  }, 1500)
}

// Header Scroll Effect
function handleScroll() {
  const header = document.querySelector(".header")
  const scrollTop = window.pageYOffset
  const currentTheme = document.documentElement.getAttribute("data-theme")

  if (scrollTop > 100) {
    // Usar cores que se adaptam ao tema
    if (currentTheme === "dark") {
      header.style.backgroundColor = "rgba(26, 26, 26, 0.95)" // Cor escura com transparência
    } else {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)" // Cor clara com transparência
    }
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.backgroundColor = "var(--white-color)"
    header.style.backdropFilter = "none"
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