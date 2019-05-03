import React, { Component } from 'react'

export default class LayoutSelector extends Component {
  render() {
    const clickEvent = this.props.click;
    const currentLayout = this.props.current;
    return (
      <div className="ui secondary menu">
        <a className={ currentLayout === 'grid' ? 'item active' : 'item'} onClick={() => { clickEvent('grid') }}>
            <i className="icon grid layout"></i>
        </a>
        <a className={ currentLayout === 'table' ? 'item active' : 'item'} onClick={() => { clickEvent('table') }}>
            <i className="icon table"></i>
        </a>
      </div>
    )
  }
}
