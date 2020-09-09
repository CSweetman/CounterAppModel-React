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

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    render() {
        return (<div>
            {this.state.counters.map(counter =>
                <Counter
                    key={counter.id}                //Key used internally by React
                    onDelete={this.handleDelete}
                    //These props are separated which will become messy, should put in an object to encapsulate
                    //value={counter.value}
                    //id={counter.id}
                    counter={counter}
                />
            )}
        </div>);
    }
}

export default Counters;