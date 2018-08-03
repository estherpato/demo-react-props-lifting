import React, { Component } from 'react';
import './App.css';
import Formulario from './Formulario';
import Preview from './Preview';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
    console.log(this.state.name)
  }

  render() {
    return (
      <div className="App">
        <Formulario
          estado={this.state}
          onChangeHandler={this.handleChange}
        />
        <Preview 
          name={this.state.name}
        />
      </div>
    );
  }
}

export default App;
