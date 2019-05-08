import React, { Component } from 'react';
import { Form, Header, Grid, Message } from 'semantic-ui-react';
import Axios from 'axios';

export default class NewItem extends Component {

  state = {
    name: '',
    email: '',
    website: '',
    loading: false,
    errors: [],
  }

  handleSubmit = (event) => {
    const newItem = {
      name: this.state.name,
      email: this.state.email,
      website: this.state.website,
    }
    
    if(this.validateReq(newItem)) {
      this.setState({loading: true})
      Axios.post(`https://jsonplaceholder.typicode.com/users`, newItem)
        .then(res => {
          this.setState({name: '', email: '', website: '', loading: false});
          
        })
    }
  }

  validateReq = (item) => {
    let errors = [];
    if (item.name.trim() === '') {
      errors.push("Name cannot be blank");
    }
    if (item.email.trim() === '') {
      errors.push("Email cannot be blank");
    }
    if (item.website.trim() === '') {
      errors.push("Website cannot be blank");
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
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                <div className="ui red left pointing basic label hidden">That name is taken!</div>
              </Form.Field>
              <Form.Field>
                <input type="text" name="website" placeholder="Website" value={this.state.website} onChange={this.handleChange} />
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
