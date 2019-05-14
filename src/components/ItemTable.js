import React, { Component } from 'react';
import { Table, Header, Image } from 'semantic-ui-react';

import ItemActions from './ItemActions';

class ItemTable extends Component {

    render() {
        const { name, img, age, role } = this.props.user;
        return (
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Image src={img} rounded size='mini' />
                    </Header>
                </Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{age}</Table.Cell>
                <Table.Cell>{role}</Table.Cell>
                <Table.Cell>
                    <ItemActions user={this.props.user} loading={this.props.loading} />
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default ItemTable