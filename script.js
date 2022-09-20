const idContainer = document.querySelector('span')
const adviceContainer = document.querySelector('#advice')
const button =  document.querySelector('#dice')

const url = `https://api.adviceslip.com/advice`

button.addEventListener('click', () => {
  fetch(url, {cache: 'no-store'})
  .then(response => response.json())
  .then(data => {
    let id = data.slip.id
    let advice = data.slip.advice

    idContainer.textContent = `#${id}`
    adviceContainer.textContent = `"${advice}"`

    console.log(id)
    console.log(advice)
  })
  .catch(err => console.error(err))
})

// button.addEventListener('click', getAdvice)

// async function getAdvice() {
//   let response = await fetch(url)
//   let data = await response.json()

//   let id = data.slip.id
//   let advice = data.slip.advice

//   console.log(id)
//   console.log(advice)

//   idContainer.textContent = `#${id}`
//   adviceContainer.textContent = `"${advice}"`
// }