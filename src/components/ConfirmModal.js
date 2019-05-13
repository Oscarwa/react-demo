import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Confirm } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { uiConfirmOpen, uiConfirmClose } from '../actions/actionUI';
import { deleteUser } from '../actions/actionCreators';

class ConfirmModal extends Component {

    static propTypes = {
        open: PropTypes.bool,
        message: PropTypes.string,
        deleteUser: PropTypes.func
    }

    static defaultProps = {
        open: false,
        message: ''
    }

    handleConfirm = event => {
        this.props.deleteUser(this.props.user.id);
        this.props.uiConfirmClose();
    }
    handleCancel = event => {
        this.props.uiConfirmClose();
    }

    render() {
        return (
            <Confirm
                open={this.props.open}
                content={this.props.message}
                onCancel={this.handleCancel}
                onConfirm={this.handleConfirm} />
        )
    }
}

const mapStateToProps = state => ({
    open: state.uiReducer.open,
    user: state.uiReducer.user,
    message: state.uiReducer.message,
  })

const mapDispatchToProps = dispatch => {
	return {
        uiConfirmOpen: (user) => {
            dispatch(uiConfirmOpen(user))
        },
        uiConfirmClose: () => {
            dispatch(uiConfirmClose());
        },
        deleteUser: (uid) => {
            dispatch(deleteUser(uid));
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal)