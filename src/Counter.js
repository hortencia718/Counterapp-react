import React, {Component} from "react";

class Counter extends Component {

    constructor(props){
        super(props)
        this.state ={
            count: 0
        };
    }

    // create function for button operation use arrow function
    increment =() =>{
        this.setState({
            count: this.state.count + 1
        });
    };

    // create function for decrement use arrow function
    decrement =() =>{
        this.setState({
            count:this.state.count - 1
        })
    }


    render(){
        return(
            <div>
                <p> this is the current count:{this.state.count}</p>
                <button onClick ={this.increment}>Increment</button>
                <button>Decrement</button>
            </div>
        )
    }
}












export default Counter;