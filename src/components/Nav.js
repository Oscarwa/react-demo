import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

export default class Nav extends Component {
  render() {
    return (
      <Menu secondary>
        <Link to="/">
          <Menu.Item header>
            <Icon name="home" />
            Home
          </Menu.Item>
        </Link>
        <Link to="/list">
          <Menu.Item header>
            List
          </Menu.Item>
        </Link>
        <Link to="/new">
          <Menu.Item header>
            New
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}
