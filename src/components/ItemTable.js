import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Header, Image, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { uiConfirmOpen } from '../actions/actionUI'

class ItemTable extends Component {

    static propTypes = {
        uiConfirmOpen: PropTypes.func,
    }

    deleteUserHandler = () => {
        this.props.uiConfirmOpen(this.props.item)
    }

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
                    <Button icon onClick={this.deleteUserHandler}>
                        <Icon name="delete"  />
                    </Button>
                    <Button icon>
                        <Icon name="edit" />
                    </Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uiConfirmOpen: (item) => {
            dispatch(uiConfirmOpen(item))
        }
    }
}

export default connect(null, mapDispatchToProps)(ItemTable)