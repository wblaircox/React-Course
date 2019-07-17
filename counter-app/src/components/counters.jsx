import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    //this.setState({ counters: counters }); //override the counters 'property' with the counters 'constant'
    this.setState({ counters }); //as the key and value are the same, can be simplified
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            //value={counter.value}
            //id={counter.id} // simplify passing value and id, by passing the counter object itself.
            counter={counter} //to work, requires changes in the counter.jsx component
          />
        ))}
      </div>
    );
  }
}

export default Counters;
