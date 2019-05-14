import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';

import p404 from './p404';
import Header from './Header';
import ItemList from './ItemList';
import NewItem from './NewItem';

import { getUsers } from '../actions/actionCreators';

 class AppContainer extends Component {
  static propTypes = {
		users: PropTypes.array,
		getUsers: PropTypes.func
	}

  state = {
    layout: 'grid',
  }
  layoutHandler = (string) => {
    this.setState({layout: string});
  }

	static defaultProps = {
		users: []
  }
  
  refreshUsers = () => {
    this.props.getUsers();
  }

  componentDidMount() {
    this.refreshUsers();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/home" component={Header}/>
          <Route exact path="/users" render={() => <ItemList users={this.props.users} loading={this.props.loading} refresh={this.refreshUsers} layout={this.state.layout} layoutHandler={this.layoutHandler} />}/>
          <Route exact path="/create" component={NewItem}/>
          <Route exact path="/404" component={p404}/>

          <Redirect from="*" to="/404"/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.mainReducer.users,
  layout: state.mainReducer.layout,
  loading: state.mainReducer.loading,
})

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
        dispatch(getUsers())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer))