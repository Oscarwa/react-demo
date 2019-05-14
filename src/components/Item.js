import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Image, Icon, Button, Placeholder } from 'semantic-ui-react';

import { uiConfirmOpen } from '../actions/actionUI'

class Item extends Component {

    static propTypes = {
        uiConfirmOpen: PropTypes.func,
    }

    deleteUserHandler = () => {
        this.props.uiConfirmOpen(this.props.item)
    }

    render() {
        const {name, img, age, role} = this.props.item;
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
                        <Button icon disabled={loading} onClick={this.deleteUserHandler}>
                            <Icon name="delete" />
                        </Button>
                        <Button icon disabled={loading}>
                            <Icon name="edit" />
                        </Button>
                    </Card.Content>
                </Card>
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

export default connect(null, mapDispatchToProps)(Item)
