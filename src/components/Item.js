import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const {name, username, email, website} = this.props.item;
        const imgSrc = `https://via.placeholder.com/300/0000FF/808080?text=${username}`;
        return (
            <div className="four wide doubling column">
                <div className="ui card">
                    <img src={imgSrc} className="ui image" />
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="meta">{email}</div>
                        <div className="description">{website}</div>
                    </div>
                    <div className="extra content">
                        <a className="item button">
                            <i className="delete icon"></i>
                        </a>
                        <a><i aria-hidden="true" className="user icon"></i>16 Friends</a>
                    </div>
                </div>
            </div>
        )
    }
}
