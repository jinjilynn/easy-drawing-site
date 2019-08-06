import React  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createHashHistory } from "history";
import Provider,{ Dynamic } from 'dva-react-hook';
import Home from './routes/home.js';
import './index.css';
const customHistory = createHashHistory();

function App() {
  return (
    <Provider>
        <Router history={customHistory}>
            <Route path="/" render={(props) => <Dynamic {...props} component={Home} models={() => [import('./models/example.js')]} />} />
        </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
