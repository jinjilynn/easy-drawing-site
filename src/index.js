import React  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createHashHistory } from "history";
import Provider,{ Dynamic } from 'dva-react-hook';
import Home from './routes/home.js';
import './index.css';
const customHistory = createHashHistory();
const initState = {
  isIn: false,
  history: customHistory,
  lang:'en'
}

function App() {
  return (
    <Provider {...initState}>
        <Router history={customHistory}>
            <Route path="/" render={(props) => <Dynamic {...props} component={Home} />} />
        </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
