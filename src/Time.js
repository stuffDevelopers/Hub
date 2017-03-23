import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Time extends Component {
  render() {
    return (tick());
  }
}
function Clock (props){
    return (
            <div className="App">
                <h1>Hello, world!</h1>
                <h2>It is {props.date.toLocaleTimeString()}</h2>
            </div>
            );
    }
    function tick() {
            ReactDOM.render(
                <Clock date={new Date()}/>,
                document.getElementById('time')
                     );
                } 
setInterval(tick, 1000);
export default Time;