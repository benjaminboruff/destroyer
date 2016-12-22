import React from 'react';
import Header from './components/header';
import Shape from './components/shape';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'blue',
            size: 100,
            radius: 50,
            x: 100,
            y: 100,
            startTime: 0,
            time: 0,
            display: 'none'
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.makeShapeAppear = this.makeShapeAppear.bind(this);
    }

    clickHandler(e) {
      let endTime = new Date().getTime();
      let totalTime = (endTime - this.state.startTime) / 1000;
      e.preventDefault();
      console.log("Clicked!");
      this.setState({display: 'none', time: totalTime});
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
            x: x > 79 ? 79 : x, // shape should not be off screen on x axis
            y: y > 22 && y <= 80 ? y : y > 73 ? 73 : y + 22, // same for y axis
            display: 'block',
            startTime: new Date().getTime()
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
