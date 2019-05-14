import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Image, Placeholder } from 'semantic-ui-react';

import ItemActions from './ItemActions';
import { uiConfirmOpen } from '../actions/actionUI'

class ItemCard extends Component {

    static propTypes = {
        uiConfirmOpen: PropTypes.func,
    }

    deleteUserHandler = () => {
        this.props.uiConfirmOpen(this.props.user)
    }

    render() {
        const {name, img, age, role} = this.props.user;
        const {loading} = this.props;
        return (
                <Card>
                    {loading ? (
                        <Placeholder>
                            <Placeholder.Image square />
                        </Placeholder>
                    ) : (
                        <Image src={img} wrapped />
                    )}
                    <Card.Content> 
                        {loading ? (
                            <Placeholder>
                                <Placeholder.Header>
                                    <Placeholder.Line />
                                    <Placeholder.Line length='medium' />
                                    <Placeholder.Line length='short' />
                                </Placeholder.Header>
                            </Placeholder>
                        ) : (
                            <React.Fragment>
                                <Card.Header>{name}</Card.Header>
                                <Card.Meta>Age: {age}</Card.Meta>
                                <Card.Description>{role}</Card.Description>
                            </React.Fragment>
                        )}
                    </Card.Content>
                    <Card.Content extra>
                        <ItemActions user={this.props.user} loading={loading} />
                    </Card.Content>
                </Card>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uiConfirmOpen: (user) => {
            dispatch(uiConfirmOpen(user))
        }
    }
}

export default connect(null, mapDispatchToProps)(ItemCard)
