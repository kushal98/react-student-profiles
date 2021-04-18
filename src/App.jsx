import React, { Component } from 'react';
import inventory, { categories } from './profiles';

import Button from './components/button';
import Item from './components/item';

import './App.css';

class App extends Component {
  state = {
    currentCat: [],
  };

  getCategories() {
    return categories.map(cat => (
      <span key={cat}>
        <Button
          value={cat}
          classes={this.buttonClasses(cat)}
          onClick={c => this.changeCategory(c)}
        />
      </span>
    ));
  }

  getInventory() {
    const { currentCat } = this.state;

    return inventory
      .filter((item) => {
        let selected = false;
        if (currentCat.length === 0) {
          selected = true;
        } else {
          currentCat.forEach((cat) => {
            if (cat === item.category) {
              selected = true;
            }
          });
        }
        return selected;
      })
      .map(({
        id, name, email, price, description,
      }) => (
        <Item key={id} name={name} email={email} price={price} desc={description} />
      ));
  }

  buttonClasses(cat) {
    let active = false;
    const { currentCat } = this.state;

    currentCat.forEach((c) => {
      if (c === cat) {
        active = true;
      }
    });

    return active ? 'button active' : 'button';
  }

  allButtonClasses() {
    const { currentCat } = this.state;
    return currentCat.length === 0 ? 'button active' : 'button';
  }

  changeCategory(cat) {
    let { currentCat } = this.state;
    let found = false;

    if (cat !== 'All') {
      for (let i = 0; i < currentCat.length; i += 1) {
        if (currentCat[i] === cat) {
          found = true;
          currentCat.splice(i, 1);
        }
      }

      if (!found) {
        currentCat.push(cat);
      }
    } else {
      currentCat = [];
    }

    this.setState({
      currentCat,
    });
  }

  render() {
    return (
      <div className="App" 
      style={{
        textAlign: "center",
      }}
    >
        <h1>Select Profile</h1>

        <div 
          style={{
            textAlign: "center",
          }}
        >
          <span key="All">
            <Button
              value="All"
              classes={this.allButtonClasses()}
              onClick={c => this.changeCategory(c)}
            />
          </span>
          {this.getCategories()}
        </div>

        <div 
          style={{
            textAlign: "center",
          }}
        >
          {this.getInventory()}
        </div>
      </div>
    );
  }
}

export default App;
