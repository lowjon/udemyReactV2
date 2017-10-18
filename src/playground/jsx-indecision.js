console.log('App.js is running');

var appObject = {
  title: 'Idecision App!',
  subtitle: 'Never be indecisive again',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault() //prevents default page refresh

  const option = e.target.elements.option.value

  if (option) {
    appObject.options.push(option)
    e.target.elements.option.value = ''
    renderApp()
  }

}

const removeAll = () => {
  appObject.options.length = 0
  renderApp()
}
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appObject.options.length)
  const option = appObject.options[randomNum]
  alert(option)
}
const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000]

const renderApp = () => {
  const template = (
    <div>
      <h1>{appObject.title}</h1>
      {appObject.subtitle && <p>{appObject.subtitle}</p>}
      <p>{appObject.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
      <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>

      <ol>
        {
          appObject.options.map((option) => <li key = {option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type = "text" name = "option"/>
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot);
}
renderApp()
