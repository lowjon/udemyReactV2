'use strict';

console.log('build-it-visible is running');

const appRoot = document.getElementById('app')

let buttonText = 'Show Details'
let textVis = true

const theGreatClick = () => {
  textVis ? textVis = false : textVis = true
  buttonText == 'Show Details' ? buttonText = 'Hide Details' : buttonText = 'Show Details'
  renderApp()
}

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={theGreatClick}>{buttonText}</button>
      <p hidden={textVis}>Text that should be toggle-able</p>
    </div>
  )
  ReactDOM.render(template, appRoot);
}
renderApp()
