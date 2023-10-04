/*const heading = React.createElement(
    'h1',
    {id: 'abc'},
    'This is Dharma.'
);
ReactDOM.render(
    heading,
    document.getElementById('react-container')
);

const paragraph = React.createElement(
    'p',
    null,
    'Dev is errihook'
);

const box = React.createElement(
    'div',
     { className: 'box'},
    heading,
    paragraph,
);

ReactDOM.render(
    box,

    document.getElementById('react-container')
);

 const box = (
    <div className = 'box'>
        <h1 id='abc'>hello DEV are u errihook.</h1>
        <p> No srinivas is errihook</p>
        <p>how are u</p>
    </div>
 );
 */
/*
const Box=(props) =>{
    return (
        <div className='box'>
        <h1 id='abc'>{props.heading}</h1>
        <p> No srinivas is errihook</p>
      </div>
    );
};

const App=()=>{
    return (
        <div className='row'>
            <div className = 'col'>
                <Box heading='First heading'/>
            </div>
            <div className = 'col'>
                <Box heading='areyy errihuka'/>
            </div>
        </div>
    );
};

ReactDOM.render(
    <App/>,
  
    document.getElementById('react-container')
  );
 */

  const Box = (props) => {
    return (
        <div className='box'>
            <h1 className = {props.color}> {props.heading} </h1>
            <p>This is a test paragraph which is created by React. This paragraph has no attribute and is contained inside a div which is also created by React.</p>
            <button onClick={()=>props.changeColor(props.id,"red")}>Red</button>
            <button onClick={()=>props.changeColor(props.id,"yellow")}>Yellow</button>
            <button onClick={()=>props.changeColor(props.id,"blue")}>Blue</button>
            <button onClick={()=>props.changeColor(props.id,"green")}>Green</button>
        </div>
    );
  }
  const Stats = (props) => {
    let boxes = props.boxes;
    let black_count = 0, red_count = 0, yellow_count = 0, blue_count = 0, green_count = 0;
     boxes.forEach(box => {
      if (box.color == "black") {
        black_count++;
      } else if (box.color == "red") {
        red_count++;
      } else if (box.color == "yellow") {
        yellow_count++;
      } else if (box.color == "blue") {
        blue_count++;
      } else if (box.color == "green") {
        green_count++;
      }
    });
    
    return (
      <div className='stats'>
        Total heading color count:
        <div>Black: {black_count}</div>
        <div>Red: {red_count}</div>
        <div>Yellow: {yellow_count}</div>
        <div>Blue: {blue_count}</div>
        <div>Green: {green_count}</div>
      </div>
    );
    }
  
  class App extends React.Component {
  state = {
    boxes: [
        {
            id: 1, 
            heading: "First Heading",
            color: "black"
        },
        { 
            id: 2,
            heading: "Second Heading",
            color: "black"
        },
        {
            id: 3, 
            heading: "Third Heading",
            color: "black"
        },
        {
            id: 4, 
            heading: "Fourth Heading",
            color: "black"
        },
        {
            id: 5,
            heading: "Fifth Heading",
            color: "black"
        },
        {
            id: 6, 
            heading: "Sixth Heading",
            color: "black"
        },
    ]
  };
  
  changeColor(id, color) {
    let boxes = this.state.boxes;
    boxes[id-1].color = color;
    this.setState({
        boxes: boxes
    });
  }
  
  render() {
    return (
        <div>
            <div className='row'>
                {this.state.boxes.map( box =>
                    <div className='col'>
                        <Box
                            id={box.id}
                            heading={box.heading}
                            color={box.color}
                            changeColor={this.changeColor.bind(this)}
                        />
                    </div>
                )}
            </div>
            <div className='row'>
                <Stats boxes={this.state.boxes}/>
            </div>
        </div>
    );
}
}
  
  ReactDOM.render(
  <App />,
  document.getElementById('react-container')
  );
  