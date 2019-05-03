import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
  }
  
  static defaultProps = {
    title: "Title",
  }

  state = {
    count: 0,
  }

  render() {
    const { title } = this.props;
    const { count } = this.state;
    return (
      <React.Fragment>
        <h1>{title}</h1>
        <h2>{count}</h2>
      </React.Fragment>
    );
  }
}
