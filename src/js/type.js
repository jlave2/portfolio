const subtitle = document.getElementById('hero-subtitle')
subtitle.style.opacity = 0
const typedString = document.getElementById('typed-string')
const stringText = typedString.innerText
typedString.innerText = ''

let i = 0
const typeTimer = setInterval(() => {
  typedString.innerHTML += stringText[i]
  if (i === stringText.length - 1) {
    subtitle.classList.add('animated', 'fadeIn')
    return clearInterval(typeTimer)
  }
  i++
}, 150)

const cursor = document.getElementById('blinking-cursor')

setInterval(() => {
  if (cursor.style.display === 'none') {
    cursor.style.display = 'inline'
  } else {
    cursor.style.display = 'none'
  }
}, 500)