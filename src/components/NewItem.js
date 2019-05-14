import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Header, Grid, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { postUser } from '../actions/actionCreators';

class NewItem extends Component {

  static propTypes = {
		postUsers: PropTypes.func
	}

  state = {
    name: '',
    age: '',
    role: '',
    loading: false,
    errors: [],
  }

  handleSubmit = (event) => {
    const newItem = {
      name: this.state.name,
      age: this.state.age,
      role: this.state.role,
    }
    
    if(this.validateReq(newItem)) {
      this.setState({loading: true})
      this.props.postUser(newItem);
      setTimeout(() => {
        this.props.history.push('/users');
      }, 500);
    }
  }

  validateReq = (item) => {
    let errors = [];
    if (item.name.trim() === '') {
      errors.push("Name cannot be blank");
    }
    if (item.age.trim() === '') {
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
        <Header as="h1">New Item</Header>
        <Grid centered>
          <Grid.Column width={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                <div className="ui red left pointing basic label hidden">That name is taken!</div>
              </Form.Field>
              <Form.Field>
                <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
                <div className="ui red left pointing basic label hidden">That name is taken!</div>
              </Form.Field>
              <Form.Field>
                <input type="text" name="role" placeholder="Role" value={this.state.role} onChange={this.handleChange} />
                <div className="ui red left pointing basic label hidden">That name is taken!</div>
              </Form.Field>
              <Form.Button loading={this.state.loading} type='submit'>Save</Form.Button>
            </Form>
          </Grid.Column>
          <Grid.Row>
            <Message
              error
              size='small'
              hidden={!this.state.errors.length}
              header='There was some errors with your submission'
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
			}
	}
}

export default connect(null, mapDispatchToProps)(NewItem)