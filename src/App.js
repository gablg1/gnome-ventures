import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';



class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPosition: {
        x: 0,
        y: 0
      }
    }


  }

  render() {
    return (
      <div className="App">
        <img src={"https://i.pinimg.com/564x/58/d6/f2/58d6f2613ea7d1f883f7513e3a73241a.jpg"} className="App-logo" alt="logo" 
          style={{position: 'absolute', top: this.state.currentPosition.y, left: this.state.currentPosition.x}}

        />
      </div>
    );
  }

  handleKeys(value, e) {
    const KEY = {
      LEFT:  37,
      RIGHT: 39,
      UP: 38,
      DOWN: 40,
      A: 65,
      D: 68,
      W: 87,
      S: 83,
      SPACE: 32
    };

    const offset = 10;
    let newPosition = this.state.currentPosition;

    if(e.keyCode === KEY.LEFT   || e.keyCode === KEY.A) newPosition.x -= offset;
    if(e.keyCode === KEY.RIGHT  || e.keyCode === KEY.D) newPosition.x += offset
    if(e.keyCode === KEY.UP     || e.keyCode === KEY.W) newPosition.y -= offset;
    if(e.keyCode === KEY.DOWN     || e.keyCode === KEY.S) newPosition.y += offset;
    //if(e.keyCode === KEY.SPACE) keys.space = value;

    this.setState({currentPosition: newPosition});
  }

  componentDidMount() {
    window.addEventListener('keyup',   this.handleKeys.bind(this, false));
    window.addEventListener('keydown', this.handleKeys.bind(this, true));
    //window.addEventListener('resize',  this.handleResize.bind(this, false));

    //const context = this.refs.canvas.getContext('2d');
    //this.setState({ context: context });
    //this.startGame();
    //requestAnimationFrame(() => {this.update()});
  }

}

export default App;
