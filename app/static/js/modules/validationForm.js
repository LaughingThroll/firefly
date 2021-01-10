const validationEmail = email => /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(email)


function validationForm(options) {
  const email = options.form.querySelector('[name="emeail"]')
  const url = options.form.querySelector('[name="url"]')
  if (email) {
    if (!validationEmail(email.value)) {
      console.log('email fuck validate')
      email.classList.add('validate-error')
      return 
    } else {
      email.classList.remove('validate-error')
      console.log('email validate')
    }
  } 
  

}


export default validationForm