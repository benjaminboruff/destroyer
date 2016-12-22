// @flow
import React from 'react';
import Header from './components/header';
import Shape from './components/shape';

class App extends React.Component {

    // type declarations for state
    // that are stripped-out by Flow
    state: {
      color: string,
      size: number,
      radius: number,
      x: number,
      y: number,
      startTime: number,
      time: number,
      display: string
    };

    constructor() {
        super();
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
        // $FlowFixMe this is because of the stupid covariant/invariant crap
        this.clickHandler = this.clickHandler.bind(this);
        // $FlowFixMe
        this.makeShapeAppear = this.makeShapeAppear.bind(this);
    }

    clickHandler(e: Event) {
      e.preventDefault();
      let endTime = new Date().getTime();
      let totalTime = (endTime - this.state.startTime) / 1000;
      //console.log("Clicked!");
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
