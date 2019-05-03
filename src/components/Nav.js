import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className="ui pointing tabular menu">
        <Link to="/">
            <a className="item">
                <i aria-hidden="true" className="home icon"></i>
            </a>
        </Link>
        <Link to="/list">
            <a className="item">Inicio</a>
        </Link>
        <Link to="/list">
            <a className="item">Lista</a>
        </Link>
        <Link to="/new">
            <a className="item">Nuevo</a>
        </Link>
      </nav>
    )
  }
}
