const React = require('react');
const ReactDOM = require('react-dom')
const Timer = require('./components/Timer')

class HelloWorld extends React.Component{
  render() {
    return (
      <div>World!</div>
    )
  }
}

ReactDOM.render(<Timer />, document.getElementById('app'))
