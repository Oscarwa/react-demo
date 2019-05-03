import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: [],
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                this.setState({persons: res.data});
                console.log(res);
            })
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(p => <li key={p.id}>{p.name}</li>)}
            </ul>
        );
    }
}