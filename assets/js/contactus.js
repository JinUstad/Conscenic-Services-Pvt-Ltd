const scriptURL = 'https://script.google.com/macros/s/AKfycbwFJW2HDDzXR10fYmHxyY4R5CDuaNP4cC8a2CEpwIfa9Ak3injswVPJTo2ANTSa218tNw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})