import React, { Component } from 'react';
import { Header, Button, Image, Label } from 'semantic-ui-react';
import logo from '../logo.svg';


export default class p404 extends Component {
  render() {
    return (
      <React.Fragment>
        <Header as="h1" size="huge">
          <span>404</span>
          : Resource Not Found.
        </Header>
        <Image src={logo} centered size='medium' />
        <p>
          <Button icon="back" onClick={this.props.history.goBack}>Go back</Button>
        </p>
      </React.Fragment>
    )
  }
}
