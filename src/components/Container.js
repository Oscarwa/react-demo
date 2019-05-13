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

	static defaultProps = {
		users: []
	}

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route exact path="/list" render={() => <ItemList users={this.props.users} loading={this.props.loading} layout='grid' />}/>
          <Route path="/new" component={NewItem}/>
          <Route component={p404}/>

          <Redirect from="*" to={p404}/>
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