import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/home.scss';

import { Button, Input } from 'antd';
import { increase, decrease } from '../stores/actions/home';

@connect(
	state => ({ home: state.home }),
	dispatch => ({
		handleIncrease: () => dispatch(increase()),
		handleDecrease: () => dispatch(decrease())
	})
)
export default class extends Component {
	render() {
		let { home, handleIncrease, handleDecrease } = this.props;
		let { count } = home;

		return (
			<div>
				index page
				<br/>
				<Input className="home-input" value={count} readOnly />
				<Button onClick={handleIncrease}>+</Button>
				<Button onClick={handleDecrease}>-</Button>
			</div>
		)
	}
}