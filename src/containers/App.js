import React, { Component } from 'react';
import CardList from '../components/CardList';
import SerchBox from '../components/SerchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component  {
    constructor() {
        super()
        this.state = {
            robots: [],
            serchfield: ''
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.cypress.io/users')
        .then(Response => Response.json())
        .then(users => this.setState({robots: users}));
    }

    onSerchChange = (event) => {
        this.setState({serchfield: event.target.value}) 
    }

    render() {
        const {robots, serchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(serchfield.toLowerCase());
        });
        return !robots.length ?
            <h1>Loading ...</h1>
            :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SerchBox serchChange={this.onSerchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;