import React, { Component } from 'react';
import CardList from './CardList';
import SerchBox from './SerchBox';
import { robots } from './robots';
import './App.css';


class App extends Component  {
    constructor() {
        super()
        this.state = {
            robots: robots,
            serchfield: ''
        }
    }

    onSerchChange = (event) => {
        this.setState({serchfield: event.target.value}) 
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
                return robots.name.toLowerCase().includes(this.state.serchfield.toLowerCase());
            })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SerchBox serchChange={this.onSerchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;