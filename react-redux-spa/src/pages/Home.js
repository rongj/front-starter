import React, { Component } from 'react';

import '../styles/home.scss';

import { Button, Input } from 'antd';

export default class extends Component {

	state = {
		count: 1
	}

	increment = () => {}

	decrement = () => {}

	render() {
		let { count } = this.state;

		return (
			<div>
				index page
				<br/>
				<Input className="home-input" value={count} readOnly />
				<Button onClick={this.increment}>+</Button>
				<Button onClick={this.decrement}>-</Button>
			</div>
		)
	}
}