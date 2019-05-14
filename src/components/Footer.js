import React, { Component } from 'react'
import { Segment, Container, Image, List } from 'semantic-ui-react';
import logo from '../logo.svg';

export default class Footer extends Component {
  render() {
    return (
        <Segment inverted style={{ margin: '2em 0em 0em', position: 'absolute', right: '0', bottom: '0', left: '0' }} vertical>
        <Container textAlign='center'>
          <Image src={logo} centered size='mini' />
          <List horizontal inverted divided link size='small'>
            <List.Item >
              {(new Date()).getFullYear()} - React Demo App
            </List.Item>
          </List>
        </Container>
      </Segment>
    )
  }
}
