'use strict';

console.log('App.js is running');

var appObject = {
  title: 'Idecision App!',
  subtitle: 'Never be indecisive again',
  options: ['one', 'two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObject.title
  ),
  appObject.subtitle && React.createElement(
    'p',
    null,
    appObject.subtitle
  ),
  React.createElement(
    'p',
    null,
    appObject.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'item one'
    ),
    React.createElement(
      'li',
      null,
      'item two'
    )
  )
);

var user = {
  name: 'Jonny Bear',
  age: 12,
  location: 'sdurperland'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var resetCounter = function resetCounter() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: resetCounter },
      'Reset'
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
