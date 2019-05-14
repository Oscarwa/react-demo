import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { uiConfirmOpen, uiModalOpen } from '../actions'


class ItemActions extends Component {
    static propTypes = {
        uiConfirmOpen: PropTypes.func,
        uiModalOpen: PropTypes.func,
    }

    deleteUserHandler = () => {
        this.props.uiConfirmOpen(this.props.user)
    }
    editUserHandler = () => {
        this.props.uiModalOpen(this.props.user)
    }

    render() {
        return (
            <React.Fragment>
                <Button icon="delete" basic color='red' disabled={this.props.loading} onClick={this.deleteUserHandler}></Button>
                <Button icon="edit" basic color="blue" disabled={this.props.loading} onClick={this.editUserHandler}></Button>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uiConfirmOpen: (user) => {
            dispatch(uiConfirmOpen(user))
        },
        uiModalOpen: (user) => {
            dispatch(uiModalOpen(user))
        }
    }
}

export default connect(null, mapDispatchToProps)(ItemActions)