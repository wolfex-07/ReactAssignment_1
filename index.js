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
import SnakeGame from './SnakeGame/SnakeGame';
import HomeScreen from './ReduxTask/Modules/Home';
import Dots from './AssignMents/Dots';
import Store from './ReduxTask/Services/Store';
import { Provider } from 'react-redux';



const ReduxApp = () => (
    <Provider store={Store}>
      <App />
    </Provider>
);

entry(ReduxApp);
function entry(className) {
    AppRegistry.registerComponent(appName, () => className);
}
