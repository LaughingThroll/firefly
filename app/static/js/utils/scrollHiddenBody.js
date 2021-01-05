
const scrollHiddenBody = () => {
  if (!document.body.classList.contains('overflow-hidden')) {
      document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }



}
export default scrollHiddenBody