const React = require('react');

class PomodoroButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: this.props.initialTimeRemaining,
      timeoutId: null,
      prevTime: null
    };
    this.tick = this.tick.bind(this);
    this.getFormattedTime = this.getFormattedTime.bind(this);
  }
  componentDidMount() {
    this.tick();
  }
  componentWillReceiveProps(newProps) {
    if (this.state.timeoutId) { clearTimeout(this.state.timeoutID); }
    this.setState({prevTime: null, timeRemaining: newProps.initialTimeRemaining})
  }
  componentDidUpdate() {
    if ((!this.state.prevTime) && this.state.timeRemaining > 0 && this.isMounted()) {
      this.tick();
    }
  }
  componentWillUnmount() {
    clearTimeout(this.state.timeoutId);
  }
  tick() {
    const currentTime = Date.now();
    const dt = this.state.prevTime ? (currentTime - this.state.prevTime) : 0;
    const interval = this.props.interval

    const timeRemainingInInterval = (interval - (dt % interval))
    const timeout = timeRemainingInInterval

        if (timeRemainingInInterval < (interval / 2.0)) {
          timeout += interval;
        }

        const timeRemaining = Math.max(this.state.timeRemaining - dt, 0);
        const countdownComplete = (this.state.prevTime && timeRemaining <= 0);

        if (this.isMounted()) {
          if (this.state.timeoutId) { clearTimeout(this.state.timeoutId); }
          this.setState({
            timeoutId: countdownComplete ? null : setTimeout(this.tick, timeout),
            prevTime: currentTime,
            timeRemaining: timeRemaining
          });
        }

        if (countdownComplete) {
          if (this.props.completeCallback) { this.props.completeCallback(); }
          return;
        }

        if (this.props.tickCallback) {
          this.props.tickCallback(timeRemaining);
        }
  }
  getFormattedTime(milliseconds) {
      if (this.props.formatFunc) {
        return this.props.formatFunc(milliseconds);
      }

      const totalSeconds = Math.round(milliseconds / 1000);

      var seconds = parseInt(totalSeconds % 60, 10);
      var minutes = parseInt(totalSeconds / 60, 10) % 60;
      var hours = parseInt(totalSeconds / 3600, 10);

      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      hours = hours < 10 ? '0' + hours : hours;

      return hours + ':' + minutes + ':' + seconds;
  }

  render() {
    const timeRemaining = this.state.timeRemaining;
    return(
      <div className='timer'>
        {this.getFormattedTime(timeRemaining)}
      </div>
    )
  }
}

PomodoroButton.defaultProps = {
  interval: 1000,
  formatFunc: null,
  tickCallBack: null,
  completeCallBack: null
};

module.exports = PomodoroButton
