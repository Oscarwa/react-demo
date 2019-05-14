import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Header } from 'semantic-ui-react';
import { uiModalClose, uiModalOpen, updateUser } from '../actions';
import NewItem from './NewItem';

class EditModal extends Component {
    static propTypes = {
        open: PropTypes.bool,
        user: PropTypes.object,
        updateUser: PropTypes.func,
    }

    static defaultProps = {
        open: false,
        user: {},
        message: ''
    }

    handleConfirm = event => {
        //this.props.updateUser(this.props.user.id);
        this.props.uiModalClose();
    }
    handleCancel = event => {
        this.props.uiModalClose();
    }

    render() {
        return (
            <Modal 
                open={this.props.open} 
                closeOnEscape={true}
                closeOnDimmerClick={true}
                onClose={this.handleCancel}
                size='small'>
                <Header icon='edit' content='Update user' />
                <Modal.Content>
                    <NewItem user={this.props.user} />
                </Modal.Content>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    open: state.uiReducer.openModal,
    user: state.uiReducer.user,
})

const mapDispatchToProps = dispatch => {
    return {
        uiModalOpen: (user) => {
            dispatch(uiModalOpen(user))
        },
        uiModalClose: () => {
            dispatch(uiModalClose());
        },
        deleteUser: (user) => {
            dispatch(updateUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)