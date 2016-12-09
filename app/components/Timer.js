var React = require('react');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      running: false,
      timeRemaining: 5000,
      previousTime: 0,
    }
  },

  componentDidMount: function() {
    this.interval = setInterval(this.onTick, 100);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  onTick: function() {
    if (this.state.running && this.state.timeRemaining > 500) {
      var now = Date.now();
      this.setState({
        previousTime: now,
        timeRemaining: this.state.timeRemaining - (now - this.state.previousTime),
      });
    }
    console.log('onTick');
  },

  onStart: function() {
    this.setState({
      running: true,
      previousTime: Date.now(),
    });
  },

  onStop: function() {
    this.setState({ running: false });
  },

  onReset: function() {
    this.setState({
      running: false,
      timeRemaining: 5000,
      previousTime: Date.now()
    });
  },

  render: function() {
    var seconds = Math.floor(this.state.timeRemaining / 1000);
    return (
      <div className="stopwatch">
        <h2>Caprese</h2>
        <div className="stopwatch-time">{seconds}</div>
        { this.state.running ?
          <button onClick={this.onStop}>Stop</button>
          :
          <button onClick={this.onStart}>Start</button>
        }
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
});
module.exports = Timer
