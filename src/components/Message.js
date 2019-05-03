import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    const { message } = this.props;
    return (
        <div class="ui icon warning top attached message">
            <i aria-hidden="true" class="attention icon"></i>
            <div class="content">
                <p>{message}</p>
            </div>
        </div>
    )
  }
}
