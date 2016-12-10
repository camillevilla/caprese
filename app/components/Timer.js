var React = require('react');


var Timer = React.createClass({
  getInitialState: function() {
    return {
      running: false,
      timeRemaining: 250000000,
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
      <div>
        <h2>Caprese</h2>
        { this.state.running ?
          <div onClick={this.onStop} className="timer timer-running">
            <div className="stopwatch-time"><h1 className="seconds">{seconds}</h1></div>
          </div>
          :
          <div onClick={this.onStart} className="timer timer-stopped">
            <div className="stopwatch-time"><h1 className="seconds">{seconds}</h1></div>
          </div>
        }
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
});
module.exports = Timer
