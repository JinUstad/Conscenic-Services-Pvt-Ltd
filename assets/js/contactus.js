const scriptURL = 'https://script.google.com/macros/s/AKfycbxa94liBCZzvNQ7LsS1qOvXQaxPODIbxcERuuFC5BbnFy-xJl4Ut_si1oiuZ21jyLb8/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})


  