import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
// import createHistory from 'history/createMemoryHistory';
import configureStore from './stores';
import { PersistGate } from 'redux-persist/integration/react';
import { getLoadableState } from 'loadable-components/server';

import App, { routes } from './App';

// 引入css 和 js
import buildPath from '../build/asset-manifest.json';

// const history = createHistory();

const app = express();

/**
 * 匹配当前请求url是否跟客户端路由一致 不一致则执行next 进行静态资源处理等
 * @param {*} routesArray 
 * @param {*} url 
 */
const getMatch = (routesArray, url) => {
  return routesArray.some(router => matchPath(url, {
    path: router.path,
    exact: router.exact,
  }))
}

app.get('*', (req, res, next) => {
  let isMatch = getMatch(routes, req.url);
  if (req.url.startsWith('/static/') || req.url === '/favicon.ico' || !getMatch) {
    return next()
  }
  const context = {};
  const { store, persistor } = configureStore();

  const reactApp = ( 
    <Provider store={store}>
      <Router context={context} location={req.url}>
        <App/>
      </Router>
    </Provider>
  );

  getLoadableState(reactApp).then(loadableState => {
    console.log(loadableState.getScriptTag());  
    const promises =
      routes
        .filter(route => matchPath(req.url, {...route, exact: true}))
        .map(route => {
          const fetch = route.component.asyncData;
          return fetch instanceof Function ? fetch(store, req.url) : Promise.resolve(null);
        });

    Promise.all(promises).then(() => {

      const reactDom = renderToString(reactApp);
      const initState = store.getState();
      const helmetData = Helmet.renderStatic();
      const scriptData = loadableState.getScriptTag();

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmlTemplate(reactDom, initState, helmetData, scriptData));
    });
  })


});


app.use(express.static(path.resolve(__dirname, '../build')));

app.listen(3082, () => {
  console.log("open Browser http://localhost:3082");
});

function htmlTemplate(reactDom, initState, helmetData, scriptData) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <link href="/${buildPath['main.css']}" rel="stylesheet">
        <title>React SSR</title>
        ${helmetData.title.toString()}
        ${helmetData.meta.toString()}
      </head>
      
      <body>
        <div id="root">${reactDom}</div>
        <script>window.__INITIAL_STATE__ = ${JSON.stringify(initState)}</script>
        <script src="/${buildPath['main.js']}"></script>
        ${scriptData}
      </body>
    </html>
    `;
}