import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Image, Container } from 'semantic-ui-react';
import logo from '../logo.svg';

export default class AppHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
  }
  
  static defaultProps = {
    title: "React Demo App",
  }

  render() {
    const { title } = this.props;
    return (
      <Container>
        <Header as="h1">{title}</Header>
        <Image src={logo} size="small" centered ></Image>
      </Container>
    );
  }
}
