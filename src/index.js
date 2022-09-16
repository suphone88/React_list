import React from "react";
import ReactDOM from "react-dom";

class Item extends React.Component{
    render(){
        return(
            <li>{this.props.name},
            {this.props.price}</li>
        );
    }
}

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "React Book", price: 20000 },
      { id: 2, name: "PHP Book", price: 3600 },
    ],
  };

  nameRef = React.createRef();
  priceRef=React.createRef();

  add = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.setState({
      items: [...this.state.items, { id, name, price }],
    });
  };

  render() {
    return (
      <div>
        <h1> Hello React </h1>
        <ul>
            {this.state.items.map(i=> {
                return(
                    <Item key={i.id} name={i.name} price={i.price} />
                )
            })}
        </ul>
        <label>Name</label>
        <input type="text" ref={this.nameRef} /> <br/>
        <label>Price</label>
        <input type="text" ref={this.priceRef} />
        <button onClick={this.add}> Add </button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
// export default App;
