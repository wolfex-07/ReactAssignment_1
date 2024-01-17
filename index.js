/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Graph from './AssignMents/Graph1';
import DotsGraph from './AssignMents/DotGraph/DotsGraph';
import Home from './AssignMents/Navigations/Home';
import StockApp from './AssignMents/Stocks/Stocks';
import TabComponent from './AssignMents/Stocks/Tab';

entry(StockApp);
function entry(className) {
    AppRegistry.registerComponent(appName, () => className);
}
