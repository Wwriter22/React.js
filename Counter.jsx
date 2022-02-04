import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    render() {
        return (
            <h1>{this.state.count}</h1>
        );
    }

    incrementCount = () => {
           this.setState({
               count: this.state.count+1
           });

    }

    render() {
        return (
            <div className="counter">
                <h1>{this.state.count}</h1>
                <button onClick = {this.incrementCount}>
                    Increment Count
                </button>
            </div>
        );
    }
}

export default Counter;