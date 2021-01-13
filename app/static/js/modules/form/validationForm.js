const validationEmail = email => /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(email)
const validationLength = value => value.length > 2

function addError(fn, input) {
  if (!fn(input.value)) {
    input.classList.add('validate-error')
    input.value = ''
    return false
  } else {
    input.classList.remove('validate-error')
    return true
  }
}

function validationForm(form) {
  
  const email = form.querySelector('[name="email"]')
  const firstName = form.querySelector('[name="first-name"]')
  const lastName = form.querySelector('[name="last-name"]')
  const message = form.querySelector('[name="message"]')

  let emailFlag = false
  const tempArr = [firstName, lastName, message]
  const flagArr = [false, false, false]

  if (email) emailFlag = addError(validationEmail, email)
  
  for (let i = 0; i < tempArr.length; i++) {
    flagArr[i] = addError(validationLength, tempArr[i])
  }
  
  if (emailFlag && flagArr.every(bool => bool)) {
    return {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      message: message.value
    }
  }     
}


export default validationForm




