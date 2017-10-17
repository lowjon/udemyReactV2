console.log('App.js is running');

const appObject = {
  title: 'Idecision App!',
  subtitle: 'Never be indecisive again',
  options: ['one', 'two']
}
const template = (
  <div>
    <h1>{appObject.title}</h1>
    {appObject.subtitle && <p>{appObject.subtitle}</p>}
    <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options' }</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
)

const user = {
  name: 'Jonny Bear',
  age: 12,
  location: 'sdurperland'
}

 function getLocation(location) {
   if (location) {
     return <p>Location: {location}</p>;
   }
 }

let count = 0

const addOne = () => {
  count++
renderCounterApp()
}
const minusOne = () => {
  count--
  renderCounterApp()
}
const resetCounter = () => {
  count = 0
  renderCounterApp()
}




const appRoot = document.getElementById('app')



const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {addOne}>+1</button>
      <button onClick = {minusOne}>-1</button>
      <button onClick = {resetCounter}>Reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, appRoot)
}
renderCounterApp()
