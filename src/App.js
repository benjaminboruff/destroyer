import React, {
    Component
} from 'react';
import './App.css';
import Header from './components/header';
import Shape from './components/shape';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'blue',
            size: 100,
            radius: 50,
            x: 100,
            y: 100,
            time: 48,
            display: 'none'
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.makeShapeAppear = this.makeShapeAppear.bind(this);
    }

    clickHandler(e) {
      e.preventDefault();
      console.log("Clicked!");
      setTimeout(this.makeShapeAppear, Math.random() * 500);
    }

    makeShapeAppear() {
        let red = Math.floor(Math.random() * 255) + 1;
        let green = Math.floor(Math.random() * 255) + 1;
        let blue = Math.floor(Math.random() * 255) + 1;
        let color = "rgb(" + red + ", " + green + ", " + blue + ")";
        let radius = Math.random() >= 0.5 ? 50 : 0;
        let size = Math.floor(Math.random() * 150) + 50;
        let x = Math.floor(Math.random() * (100 - 1));
        let y = Math.floor(Math.random() * (100 - 1));

        this.setState({
            color: color,
            radius: radius,
            size: size,
            x: x > 85 ? 85 : x,
            y: y > 22 && y <= 80 ? y : y > 80 ? 80 : y + 22,
            display: 'block'
        });
    }

    componentWillMount() {
        this.makeShapeAppear();
    }

    render() {
        return (
          <div className="App" >
            <Header time={ this.state.time.toString() + ' seconds' } />
            <Shape
              color={ this.state.color }
              size={ this.state.size.toString() + 'px' }
              radius={ this.state.radius.toString() + '%' }
              x={ this.state.x.toString() + '%' }
              y={ this.state.y.toString() + '%' }
              display={ this.state.display }
              onClick={this.clickHandler} />
          </div>
        );
    }
}

export default App;
