// navbar
// navbar should turn light when page is scrolled past the hero footer

const heroText = document.getElementById('hero-text')
const heroTextPosition = heroText.getBoundingClientRect()
const heroTextYMax = heroTextPosition.top + heroText.clientHeight

const heroFooter = document.getElementById('hero-footer')
const heroFooterY = heroFooter.getBoundingClientRect().top - heroFooter.clientHeight

const navbar = document.getElementById('navbar')
const navLinks = Array.from(document.getElementsByClassName('nav-link'))
const callDown = document.getElementById('call-down')

const animateNavbar = () => {
  const scrollPosY = window.pageYOffset || document.body.scrollTop

  if (scrollPosY > heroFooterY) {
    navbar.classList.add('nav-solid')
    callDown.style.visibility = 'hidden'
  } else {
    navbar.classList.remove('nav-solid')
  }
}

window.addEventListener('load', animateNavbar)
window.addEventListener('scroll', animateNavbar)

// service icons
// each icon should animate when it's scrolled into view

const serviceIcons = Array.from(document.getElementsByClassName('service-icon'))
const serviceIconPosition = serviceIcons[0].getBoundingClientRect().top

const hasBeenAnimated = el => el.classList.contains('animated')

const isInView = (el) => {
  const top = el.getBoundingClientRect().top
  // const bottom = el.getBoundingClientRect().bottom

  // return (top >= 0) && (bottom <= window.innerHeight)
  return top <= window.innerHeight - 100
}

const allHaveBeenAnimated = () => serviceIcons.map(hasBeenAnimated).reduce((a, b) => a && b)

const allAligned = () => {
  const firstIconY = serviceIcons[0].getBoundingClientRect().top
  return serviceIcons.every((icon) => icon.getBoundingClientRect().top === firstIconY)
}

// called on each scroll event
const animateServiceIcons = () => {
  if (allHaveBeenAnimated()) {
    return window.removeEventListener('scroll', animateServiceIcons)
  }
  console.log(allAligned())
  if (allAligned()) {
    for (let i = 0; i < serviceIcons.length; i++) {
      setTimeout(() => {
        serviceIcons[i].classList.add('animated', 'rollIn')
      }, 1000 * i)
    }
  } else {
    serviceIcons.forEach(icon => {
      if (isInView(icon) && !hasBeenAnimated(icon)) {
        icon.classList.add('animated', 'rollIn')
      }
    })
  }
}

window.addEventListener('scroll', animateServiceIcons)

// portrait
const portrait = document.getElementsByClassName('portrait').item(0)
portrait.style.opacity = 0

const animatePortrait = () => {
  if (hasBeenAnimated(portrait)) {
    return window.removeEventListener('scroll', animatePortrait)
  }
  if (isInView(portrait) && !hasBeenAnimated(portrait)) {
    portrait.classList.add('animated', 'flipInY')
    portrait.style.opacity = 1
  }
}

window.addEventListener('scroll', animatePortrait)
