import React, { Component } from 'react';
import { Table, Header, Image } from 'semantic-ui-react';

export default class Item extends Component {
    render() {
        const {name, username, email, website} = this.props.item;
        const imgSrc = `https://via.placeholder.com/300/0000FF/808080?text=${username}`;
        return (
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Image src={imgSrc} rounded size='mini' />
                    </Header>
                </Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
                <Table.Cell>{website}</Table.Cell>
                <Table.Cell>
                    <i className></i>
                </Table.Cell>
            </Table.Row>
        )
    }
}
