import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import p404 from './p404';
import Header from './Header';
import ItemList from './ItemList';
import NewItem from './NewItem';

export default class AppContainer extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route path="/list" component={ItemList}/>
          <Route path="/new" component={NewItem}/>
          <Route component={p404}/>
        </Switch>
    )
  }
}
