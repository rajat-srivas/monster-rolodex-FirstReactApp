import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super(); //includes the react components method
    this.state = {
      monsters: [
      ],
      searchFiled: ''
    }
  }

  //life cycle method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    //we need arrow function, other this.setState wont work as context of this will change
    // to acheive this with normal function we would then have to bind the this of App explicitly to the method
    this.setState({ searchFiled: e.target.value });
  }

  render() {

    //creating a seperate object from the actual state object as we dont want to modify the actual object
    // we create a reply and then based on the searchField we filter the replica
    // so that everytime we start we have all the data
    // done via destucturing

    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    })
    return (
      <div className="App">
        <h1 className="mainHeading">Monster Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}


export default App;
