const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const button = document.querySelector('#form-button')

button.addEventListener('click', (e) => {
  e.preventDefault()
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }
  alert('Passwords match!')
})