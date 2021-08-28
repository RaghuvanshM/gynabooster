/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './src/redux/store/appstore'
import { name as appName } from './app.json';
import Example from './src/component/student/Component/Stopwatch';

const Root = () => (
  <Provider store={store()}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
