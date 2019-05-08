import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default class LayoutSelector extends Component {
  render() {
    const clickEvent = this.props.click;
    const currentLayout = this.props.current;
    return (
      <div className="ui secondary menu">
        <Button icon className={ currentLayout === 'grid' ? 'item active' : 'item'} onClick={() => { clickEvent('grid') }}>
            <Icon name="grid layout" />
        </Button>
        <Button icon className={ currentLayout === 'table' ? 'item active' : 'item'} onClick={() => { clickEvent('table') }}>
            <Icon name="table" />
        </Button>
      </div>
    )
  }
}
