import React, { Component } from 'react';
import CardList from './CardList';
import SerchBox from './SerchBox';
import Scroll from './Scroll';
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
    
        const filteredRobots = this.state.robots.filter(robots => {
                return robots.name.toLowerCase().includes(this.state.serchfield.toLowerCase());
            });
        if(this.state.robots.length === 0){
            return <h1>Loading ...</h1>
        } else {   
            return (
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
}

export default App;