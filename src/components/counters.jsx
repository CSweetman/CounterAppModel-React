import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handleIncrement = (counter) => {
        //Wont update state directly, instead create new counters array
        const counters = [...this.state.counters];      //CLONES THE REFERENCE OF THE COUNTERS ARRAY IN THE STATE
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };               //Clone the counter object, but is not the same reference
        counters[index].value++;
        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    render() {
        return (<div>
            <button
                onClick={this.handleReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter =>
                <Counter
                    key={counter.id}                //Key used internally by React
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    counter={counter}
                />
            )}
        </div>);
    }
}

export default Counters;