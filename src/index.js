import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import GamePages from './components/gamesPage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger)
    )
);

ReactDOM.render(
<Provider store={store}>
    <Router>
        <div className="ui container">
            <div className="ui three item menu"> 
                <NavLink className="item" to="/" exact={true} activeClassName="active">Home</NavLink>  
                <NavLink className="item" to="/games" activeClassName="active">Games</NavLink>  
                <NavLink className="item" to="/games/new" activeClassName="active">Add New Game</NavLink>  
            </div>
            <Route path="/" component={App} exact={true}/>
            <Route path="/games" component={GamePages} />
            <App />
        </div>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
