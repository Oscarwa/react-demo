import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from './Item';
import ItemTable from './ItemTable';
import LayoutSelector from './LayoutSelector';
import { Table, Card } from 'semantic-ui-react';

import { getItems } from '../actions/actionCreators';
import API from '../Api';

class ItemList extends React.Component {
    // state = {
    //     items: [{id:1},{id:2},{id:3},{id:4}],
    //     layout: 'grid',
    //     loading: true,
    // }

    static propTypes = {
		items: PropTypes.array,
		getUsers: PropTypes.func
	}

	static defaultProps = {
        items: [{id:1}, {id:2}, {id:3}, {id:4}],
        loading: true,
        layout: 'grid',
	}

    componentDidMount() {
        // API.get(`/users`)
        //     .then(res => {
        //         this.setState({items: res.data, loading: false});
        //     });
        this.props.getItems();
    }

    clickEvent = (string) => {
        //this.setState({layout: string});
    }

    render() {
        let layout;
        if(this.props.layout === 'grid') {
            layout = (
                <Card.Group doubling itemsPerRow={4} stackable>
                    {this.props.items.map(i => <Item key={i.id} item={i} loading={this.props.loading}></Item>)}
                </Card.Group>
            );
        } else if (this.props.layout === 'table') {
            layout = (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Photo</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Website</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.items.map(i => <ItemTable key={i.id} item={i}></ItemTable>)}
                    </Table.Body>
                </Table>
            )
        }
        return (
            <React.Fragment>
                <LayoutSelector click={this.clickEvent} current={this.props.layout} />
                
                {layout}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    items: state.mainReducer.items,
    layout: state.mainReducer.layout,
    loading: state.mainReducer.loading,
})

const mapDispatchToProps = dispatch => {
	return {
			getItems: () => {
                dispatch(getItems())
			}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)