require('./main.scss');
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./hello');
ReactDOM.render(
    <Hello name="main test" />,
    document.querySelector('#main')
);
