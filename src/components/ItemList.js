import React from 'react';
import ItemCard from './ItemCard';
import ItemTable from './ItemTable';
import LayoutSelector from './LayoutSelector';
import { Table, Card, Button, Grid, Popup } from 'semantic-ui-react';

import ConfirmModal from './ConfirmModal';
import EditModal from './EditModal';


class ItemList extends React.Component {    

    clickEvent = (value) => {
        this.props.layoutHandler(value);
    }

    refreshUsers = () => {
        this.props.refresh();
    }

    render() {
        let layout;
        if(this.props.layout === 'grid') {
            layout = (
                <Card.Group doubling itemsPerRow={4} stackable>
                    {this.props.users.map(i => <ItemCard key={i.id} user={i} loading={this.props.loading}></ItemCard>)}
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
                        {this.props.users.map(i => <ItemTable key={i.id} user={i} loading={this.props.loading}></ItemTable>)}
                    </Table.Body>
                </Table>
            )
        }
        return (
            <React.Fragment>
                <Grid>
                    <Grid.Column width={14}>
                        <LayoutSelector setLayout={this.clickEvent} current={this.props.layout} />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Popup content='Restores the user list from the service.' trigger={
                            <Button icon='refresh' onClick={this.refreshUsers} color="blue"></Button>
                        } />
                    </Grid.Column>
                </Grid>

                
                {layout}

                <ConfirmModal />
                <EditModal />
            </React.Fragment>
        );
    }
}

export default ItemList