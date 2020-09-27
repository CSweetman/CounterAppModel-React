import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props);
    console.log('App-Constructor', this.props);
    //this.state = this.props.something;
  }

  componentDidMount() {
    //Perfect place for Ajax Calls
    console.log('App - mounted');
    //this.setState({movies});
  }

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
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>

      </React.Fragment >
    );
  }
}

export default App;
