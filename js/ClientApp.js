/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1
var h2 = React.DOM.h2
var h3 = React.DOM.h3

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, 'Delicious time!'),
        h2(null, 'Delicious time!'),
        h3(null, 'Delicious time!'))
      )
  }
})

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFact({color: 'aliceblue'}),
    MyTitleFact({color: 'dodgerblue'}),
    MyTitleFact({color: 'blue'})
    )
  )

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
