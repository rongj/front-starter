import React from 'react';
import '../styles/common.scss';
import '../styles/layout.scss';

import { Button, Icon } from 'antd';

import { Helmet } from "react-helmet";

import fetch from 'isomorphic-unfetch';

// export default () => (
// 	<>
// 		index page
// 	</>
// )


const Index = ({ stars }) =>
	<div>
		Next stars: {stars}
		<Button type="primary">测试</Button>
		<Icon type="home" />
	</div>

Index.getInitialProps = async ({ req }) => {
	const res = await fetch('https://api.github.com/repos/zeit/next.js')
	const json = await res.json()
	return { stars: json.stargazers_count }
}

export default Index