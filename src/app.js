'use strict';

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

const appRoot = document.getElementById('app');


const renderApp = () => {
  const template = (
    <div>
      <h1>{appObject.title}</h1>
      {appObject.subtitle && <p>{appObject.subtitle}</p>}
      <p>{appObject.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
      <p>{appObject.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
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
