import React from 'react';
import axios from 'axios';
import Item from './Item';
import ItemTable from './ItemTable';
import LayoutSelector from './LayoutSelector';
import { Table, Card } from 'semantic-ui-react';

export default class ItemList extends React.Component {
    state = {
        items: [{id:1},{id:2},{id:3},{id:4}],
        layout: 'grid',
        loading: true,
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                this.setState({items: res.data, loading: false});
            });
    }

    clickEvent = (string) => {
        this.setState({layout: string});
    }



    render() {
        let layout;
        if(this.state.layout === 'grid') {
            layout = (
                <Card.Group doubling itemsPerRow={4} stackable>
                    {this.state.items.map(i => <Item key={i.id} item={i} loading={this.state.loading}></Item>)}
                </Card.Group>
            );
        } else if (this.state.layout === 'table') {
            layout = (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Photo</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Website</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.items.map(i => <ItemTable key={i.id} item={i}></ItemTable>)}
                    </Table.Body>
                </Table>
            )
        }
        return (
            <React.Fragment>
                <LayoutSelector click={this.clickEvent} current={this.state.layout} />
                
                {layout}
            </React.Fragment>
        );
    }
}