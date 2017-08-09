const heroText = document.getElementById('hero-text')
const heroTextPosition = heroText.getBoundingClientRect()
const heroTextYMax = heroTextPosition.top + heroText.clientHeight

const heroFooter = document.getElementById('hero-footer')
const heroFooterY = heroFooter.getBoundingClientRect().top - heroFooter.clientHeight

const navbar = document.getElementById('navbar')
const navLinks = Array.from(document.getElementsByClassName('nav-link'))
const callDown = document.getElementById('call-down')

window.addEventListener('load', handleNavbar)
window.addEventListener('scroll', handleNavbar)
window.addEventListener('scroll', handleServiceIcons)

function handleNavbar () {
  const scrollPosY = window.pageYOffset || document.body.scrollTop

  if (scrollPosY > heroFooterY) {
    navbar.classList.add('nav-solid')
    callDown.style.visibility = 'hidden'
  } else {
    navbar.classList.remove('nav-solid')
  }
}

const serviceIcons = document.getElementsByClassName('service-icon')
const serviceIconPosition = serviceIcons.item(0).getBoundingClientRect().top

function handleServiceIcons () {
  if (isScrolledIntoView(serviceIcons.item(0))) {
    window.removeEventListener('scroll', handleServiceIcons)
    for (let i = 0; i < serviceIcons.length; i++) {
      setTimeout(() => {
        serviceIcons[i].classList.add('animated', 'rollIn')
      }, 500 * i)
    }
  }
}

function isScrolledIntoView (el) {
  const top = el.getBoundingClientRect().top
  const bottom = el.getBoundingClientRect().bottom

  return (top >= 0) && (bottom <= window.innerHeight)
}
