function makeRequest(URL, options) {
  window.fetch(URL, options)
  .then((res) => res.json())
  .catch(e => window.console.log(e))
}


function sendForm(options) {
  return makeRequest(options.URL, {
    ...options.headers,
    body: JSON.stringify(options.body)
  })
}

export default sendForm