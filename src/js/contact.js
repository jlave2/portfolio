const nameInput = document.getElementById('contact-name')
const emailInput = document.getElementById('contact-email')
const messageInput = document.getElementById('contact-message')
const submitBtn = document.getElementById('submit-contact')

submitBtn.addEventListener('click', e => {
  e.preventDefault()

  const apiUrl = 'https://us-central1-portfolio-3e213.cloudfunctions.net/sendMail'
  const contactForm = document.getElementById('contact-form')
  const contactFormContainer = document.getElementById('contact-form-container')
  const contactFormHeight = contactForm.getBoundingClientRect().height
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  }

  contactForm.remove()
  const statusIconContainer = document.createElement('div')
  Object.assign(statusIconContainer.style, {
    height: contactFormHeight.toFixed(0) + 'px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  })
  const statusIcon = document.createElement('i')
  statusIcon.classList.add('fa', 'fa-circle-o-notch', 'fa-spin', 'fa-2x', 'fa-fw')
  statusIconContainer.appendChild(statusIcon)
  contactFormContainer.appendChild(statusIconContainer)
  const statusText = document.createElement('p')
  statusIconContainer.appendChild(statusText)

  axios.post(apiUrl, data, { headers: { 'Content-Type': 'application/json' } })
    .then(res => {
      if (res.status === 200) {
        statusIcon.classList.remove('fa-circle-o-notch', 'fa-spin')
        statusIcon.classList.add('fa-check', 'animated', 'bounceIn')
        statusText.innerText = 'Got it!'
        statusText.classList.add('lead', 'animated', 'bounceIn')
      }
    })
    .catch(err => {
      console.log(err)
      statusIcon.classList.remove('fa-circle-o-notch', 'fa-spin')
      statusIcon.classList.add('fa-exclamation-circle', 'animated', 'bounceIn')
      statusText.innerText = 'Something went wrong. Please refresh this page and try again.'
      statusText.classList.add('lead', 'animated', 'bounceIn')
    })
})