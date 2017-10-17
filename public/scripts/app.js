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
    { id: 'my-id', className: 'myClass' },
    '+1'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
