import App, { Container } from 'next/app';
import { React } from 'react';

export default class extends App {
	render() {
		const { Component, PageProps } = this.props;

		return (
			<Component {...pageProps} />
		)
	}
}