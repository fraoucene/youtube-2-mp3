import React from "react";
import { render } from 'react-dom';
import axios from 'axios';


// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import PlayListDetail from './components/PlayListDetail';
import PlayListGrid from './components/PlayListGrid';
import ChannelsGird from './components/ChannelsGird';
import Contact from './components/Contact';
import Home from './components/Home';
import UrlForm from './components/UrlForm';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 
import { Provider } from 'react-redux';
import store, { history } from './store';



const router = (
	<Provider store={store}>
		<Router history={browserHistory}>
	      <Route path="/" component={App}>
	        <IndexRoute component={Home}></IndexRoute>
	        <Route path="/playlist/:playlistId" component={PlayListDetail}></Route>
	        <Route path="/channel/:playlistId" component={PlayListDetail}></Route>
	        <Route path="/video" component={PlayListDetail}></Route>
	        <Route path="/playlist" component={PlayListGrid}></Route>
	        <Route path="/channel" component={ChannelsGird}></Route>
	        <Route path="/contact" component={Contact}></Route>
	        <Route path="/url" component={UrlForm}></Route>
	      </Route>
	    </Router>
    </Provider>
)

render(router, 
	document.getElementById('root'));