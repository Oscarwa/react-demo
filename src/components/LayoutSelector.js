import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';

class LayoutSelector extends Component {

  clickEvent = (layoutType) => {
    this.props.setLayout(layoutType);
  };

  render() {
    const currentLayout = this.props.current;
    return (
      <div className="ui secondary menu">
        <Popup content='Displays data in a Grid layout' basic trigger={
          <Button icon="grid layout" className={ currentLayout === 'grid' ? 'item active' : 'item'} onClick={() => { this.clickEvent('grid') }}></Button>
        } />
        <Popup content='Displays data in a Table layout' basic trigger={
          <Button icon="table" className={ currentLayout === 'table' ? 'item active' : 'item'} onClick={() => { this.clickEvent('table') }}></Button>
        } />
      </div>
    )
  }
}

export default LayoutSelector;