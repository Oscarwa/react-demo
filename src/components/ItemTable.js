import React, { Component } from 'react';
import { Table, Header, Image, Button, Icon } from 'semantic-ui-react';

export default class Item extends Component {
    render() {
        const { name, img, age, role } = this.props.item;
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
                    <Button icon>
                        <Icon name="delete" />
                    </Button>
                    <Button icon>
                        <Icon name="search" />
                    </Button>
                    <Button icon>
                        <Icon name="edit" />
                    </Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}
