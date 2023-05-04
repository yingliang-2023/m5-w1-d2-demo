class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // add variables here
      // think of it as data
      brand:"Ford",
      model:"Mustang",
      color:"Red",
      year:1964

    };
  }
  render() {
    return ( 
      // render variables here
      //like a mirror of html
      <div>
     <h1>My {this.state.brand}</h1>
     <p>
      It is a {this.state.color} 
      {this.state.model} from 
      {this.state.year}
     </p>
     </div>
    );
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));


