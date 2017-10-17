'use strict';

console.log('build-it-visible is running');

var appRoot = document.getElementById('app');

var buttonText = 'Show Details';
var textVis = true;

var theGreatClick = function theGreatClick() {
  textVis ? textVis = false : textVis = true;
  buttonText == 'Show Details' ? buttonText = 'Hide Details' : buttonText = 'Show Details';
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: theGreatClick },
      buttonText
    ),
    React.createElement(
      'p',
      { hidden: textVis },
      'Text that should be toggle-able'
    )
  );
  ReactDOM.render(template, appRoot);
};
renderApp();
