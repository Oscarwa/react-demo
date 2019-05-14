import React from 'react';
import Item from './Item';
import ItemTable from './ItemTable';
import LayoutSelector from './LayoutSelector';
import { Table, Card } from 'semantic-ui-react';
import ConfirmModal from './ConfirmModal';


class ItemList extends React.Component {    

    clickEvent = (value) => {
        this.props.layoutHandler(value);
    }

    render() {
        let layout;
        if(this.props.layout === 'grid') {
            layout = (
                <Card.Group doubling itemsPerRow={4} stackable>
                    {this.props.users.map(i => <Item key={i.id} item={i} loading={this.props.loading}></Item>)}
                </Card.Group>
            );
        } else if (this.props.layout === 'table') {
            layout = (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Photo</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Age</Table.HeaderCell>
                            <Table.HeaderCell>Role</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.users.map(i => <ItemTable key={i.id} item={i}></ItemTable>)}
                    </Table.Body>
                </Table>
            )
        }
        return (
            <React.Fragment>
                <LayoutSelector setLayout={this.clickEvent} current={this.props.layout} />
                
                {layout}

                <ConfirmModal />
            </React.Fragment>
        );
    }
}

export default ItemList