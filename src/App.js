import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Defaultlayout from './container/defaultLayout';
import Navigation from './container/defaultLayout/navigation';
import Footer from './container/defaultLayout/footer';

import './App.scss';

export default class app extends React.Component{
  render(){
    return (
      <Router>
        <div className="app">
          <Navigation/>
            <Switch>
              <Route path="/login" exact />
              <Route render={() => 
                <Defaultlayout>
                  <Switch>
                    <Route path="/report" exact />
                    <Route path="/meeting" exact />
                    <Route path="/law"  exact />
                  </Switch>
                </Defaultlayout>
              } />
            </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}