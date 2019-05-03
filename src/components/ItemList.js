import React from 'react';
import axios from 'axios';
import Item from './Item';
import ItemTable from './ItemTable';
import LayoutSelector from './LayoutSelector';
import { Table, Header } from 'semantic-ui-react';

export default class ItemList extends React.Component {
    state = {
        items: [],
        layout: 'grid',
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                this.setState({items: res.data});
                console.log(res);
            })
    }

    clickEvent = (string) => {
        console.log(string);
        this.setState({layout: string});
    }



    render() {
        let layout;
        if(this.state.layout === 'grid') {
            layout = (
                <div className="ui grid">
                    {this.state.items.map(i => <Item key={i.id} item={i}></Item>)}
                </div>
            );
        } else if (this.state.layout === 'table') {
            layout = (
                <Table basic='very' celled collapsing>
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