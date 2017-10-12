import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import Jumbotron from './components/Jumbotron/jumbotron';
import Search from './components/Search/search';
import Results from './components/Results/results';
import Saved from './components/Saved/saved'; */

import ArticleScrape from './pages/ArticleScrape';


const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={ArticleScrape}/>
            </Switch>
        </div>  
    </Router>  
);

export default App;