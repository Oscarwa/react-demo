import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class LayoutSelector extends Component {

  clickEvent = (layoutType) => {
    this.props.setLayout(layoutType);
  };

  render() {
    const currentLayout = this.props.current;
    return (
      <div className="ui secondary menu">
        <Button icon className={ currentLayout === 'grid' ? 'item active' : 'item'} onClick={() => { this.clickEvent('grid') }}>
            <Icon name="grid layout" />
        </Button>
        <Button icon className={ currentLayout === 'table' ? 'item active' : 'item'} onClick={() => { this.clickEvent('table') }}>
            <Icon name="table" />
        </Button>
      </div>
    )
  }
}

export default LayoutSelector;