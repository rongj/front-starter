import React, {Component} from 'react';


export const asyncComponent = (loadComponent, requireAuth) => (
	class extends Component {
		state = {
			Component: null,
		}

		componentWillMount() {
			if (this.hasLoadedComponent()) {
				return;
			}

			loadComponent()
				.then(module => module.default)
				.then((Component) => {
					this.setState({ Component });
					// let { uid } = this.props.appStore.user;
					// if(requireAuth && !uid) {
					// 	this.props.history.replace({
					// 		pathname: '/login',
					// 		search: 'redirect='+this.props.location.pathname
					// 	});
					// }
				})
				.catch((err) => {
					console.error(`Cannot load component in <AsyncComponent />`);
					throw err;
				});

		}

		hasLoadedComponent() {
			return this.state.Component !== null;
		}

		render() {
			const { Component } = this.state;
			return (Component) ? <Component {...this.props} /> : null;
		}
	}
);