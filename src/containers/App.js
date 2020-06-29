import React, { Component } from 'react'
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfiled: ''
        }
    }
    componentDidMount() {//we use () because this is part of react component 
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) // .then(response =>{response.json()}) 
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfiled: event.target.value })
        console.log(event.target.value);

    }
    render() {
        const { robots, searchfiled } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfiled.toLowerCase())
        })
        return !robots.length ? //robots.length === 0
            <h1>Loding ...</h1> :
            (
                <div className='tc'>
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }



}

export default App; 