const React = require('react');
const ReactDOM = require('react-dom')
const PomodoroButton = require('./components/PomodoroButton')

class HelloWorld extends React.Component{
  render() {
    return (
      <div>World!</div>
    )
  }
}

ReactDOM.render(<PomodoroButton />, document.getElementById('app'))
