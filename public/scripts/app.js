'use strict';

console.log('App.js is running');

var appObject = {
  title: 'Idecision App!',
  subtitle: 'Never be indecisive again',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); //prevents default page refresh

  var option = e.target.elements.option.value;

  if (option) {
    appObject.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var removeAll = function removeAll() {
  appObject.options.length = 0;
  renderApp();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderApp = function renderApp() {
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
      appObject.options.length > 0 ? 'Here are your options:' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      appObject.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      appObject.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
renderApp();
