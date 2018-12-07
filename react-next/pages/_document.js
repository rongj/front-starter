import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { Helmet } from "react-helmet";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		const helmet = Helmet.renderStatic();
		const htmlAttrs = helmet.htmlAttributes.toComponent();
		const bodyAttrs = helmet.bodyAttributes.toComponent();
		return (
			<html lang="zh-cn" {...htmlAttrs}>
				<Head>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
					/>
					<title>react-next-demo</title>
					{helmet.title.toComponent()}
					{helmet.meta.toComponent()}
					{helmet.link.toComponent()}
				</Head>
				<body {...bodyAttrs}>
					<Main />
					{helmet.script.toComponent()}
					<NextScript />
				</body>
			</html>
		)
	}
}