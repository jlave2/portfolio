const projectsContainer = document.getElementById('project-slider')
const slides = document.getElementsByClassName('slide')
const n = slides.length
const active = {
  index: 0,
  nextIndex () {
    return (this.index + 1 % n + n) % n
  },
  prevIndex () {
    return (this.index - 1 % n + n) % n
  },
  increment () {
    this.index = this.nextIndex()
  },
  decrement () {
    this.index = this.prevIndex()
  }
}

const prev = document.getElementById('slider-prev')
const next = document.getElementById('slider-next')

setActiveSlide(active.index)
const slideTimer = setInterval(() => {
  setActiveSlide(active.nextIndex())
  active.increment()
}, 5000)

next.addEventListener('click', e => {
  clearInterval(slideTimer)
  setActiveSlide(active.nextIndex())
  active.increment()
})

prev.addEventListener('click', e => {
  clearInterval(slideTimer)
  setActiveSlide(active.prevIndex())
  active.decrement()
})

function setActiveSlide (i) {
  const currentSlide = slides.item(active.index)
  const newSlide = slides.item(i)
  const newProject = newSlide.getAttribute('data-project')
  currentSlide.classList.remove('active')
  newSlide.classList.add('active')
  newSlide.classList.add('fadeIn')
  projectsContainer.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url('../img/projects/${newProject}/background.jpg')`
}
