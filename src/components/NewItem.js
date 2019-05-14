import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Header, Grid, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { postUser, updateUser, uiModalClose } from '../actions';

class NewItem extends Component {

  static propTypes = {
    postUser: PropTypes.func,
    updateUser: PropTypes.func,
    uiModalClose: PropTypes.func,
	}

  state = {
    name: '',
    age: '',
    role: '',
    img: '',
    loading: false,
    errors: [],
    update: false,
  }
  componentDidMount() {
    if(!!this.props.user) {
      const { id, name, age, role, img } = this.props.user;
      this.setState({id, name, age, role, img, update: true});
    }
  }

  handleSubmit = (event) => {
    const user = {
      name: this.state.name,
      age: this.state.age,
      role: this.state.role,
      img: this.state.img,
    }
    
    if(this.validateReq(user)) {
      this.setState({loading: true})
        if(this.state.update) {
          user.id = this.state.id;
          this.props.updateUser(user);
          // setTimeout(() => {
            this.props.uiModalClose();
          // }, 200);
        } else {
          this.props.postUser(user);
          // setTimeout(() => {
            this.props.history.push('/users');
          // }, 200);
      }
    }
  }

  validateReq = (item) => {
    let errors = [];
    if (item.name.trim() === '') {
      errors.push("Name cannot be blank");
    }
    if (typeof item.age === 'string' && item.age.trim() === '') {
      errors.push("Age cannot be blank");
    }
    else if (isNaN(parseInt(item.age))) {
      errors.push("Age must be a number");
    }
    if (item.role.trim() === '') {
      errors.push("Role cannot be blank");
    }
    this.setState({errors});
    return errors.length === 0;
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header as="h1" hidden={this.state.update}>New User</Header>
        <Grid centered>
          <Grid.Column width={10}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <input type="text" name="role" placeholder="Role" value={this.state.role} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <input type="text" name="img" placeholder="Image URL" value={this.state.img} onChange={this.handleChange} />
              </Form.Field>
              <Form.Button loading={this.state.loading} type='submit'>Save</Form.Button>
            </Form>
          </Grid.Column>
          <Grid.Row>
            <Message
              error
              size='small'
              hidden={!this.state.errors.length}
              header='There was some error with your submission'
              list={this.state.errors} />
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
	return {
			postUser: (newUser) => {
					dispatch(postUser(newUser))
			},
			updateUser: (user) => {
					dispatch(updateUser(user))
			},
			uiModalClose: () => {
					dispatch(uiModalClose())
			},
	}
}

export default connect(null, mapDispatchToProps)(NewItem)