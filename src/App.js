import gnome from './gnome.png';
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
        <img src={gnome} className="App-logo" alt="logo" 
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

    const speed = 100;
    let newPosition = this.state.currentPosition;

    if (e.keyCode === KEY.LEFT   || e.keyCode === KEY.A) newPosition.x -= speed;
    if (e.keyCode === KEY.RIGHT  || e.keyCode === KEY.D) newPosition.x += speed;
    if(e.keyCode === KEY.UP     || e.keyCode === KEY.W) newPosition.y -= speed;
    if(e.keyCode === KEY.DOWN     || e.keyCode === KEY.S) newPosition.y += speed;
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
