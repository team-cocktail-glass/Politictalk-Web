import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './container/defaultLayout/navigation';
import Footer from './container/defaultLayout/footer';
import { Main } from './container';

import './App.scss';

export default class app extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div className="app">
          <Navigation/>
            <Switch>
              <Route path="/login" exact />
              <Route render={() => 
                  <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="/report" exact />
                    <Route path="/meeting" exact />
                    <Route path="/law"  exact />
                  </Switch>
              } />
            </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}