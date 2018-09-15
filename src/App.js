import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/defaultLayout/navigation';
import { Provider } from 'react-redux';
import { store } from './core/redux/store/store';
import Footer from './components/defaultLayout/footer';
import { Main, ReportMain,ReportProfile, ReportPost, ReportWrite } from './container';

import './App.css';

export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Navigation/>
              <Switch>
                <Route path="/login" exact />
                <Route render={() => 
                    <Switch>
                      <Route path="/" component={Main} exact />
                      <Route path="/report" component={ReportMain} exact />
                      <Route path="/report/:uuid" component={ReportProfile} exact/>
                      <Route path="/report/:uuid/write" component={ReportWrite} exact/>
                      <Route path="/report/:uuid/:postid" component={ReportPost} exact/>
                      <Route path="/meeting" exact />
                      <Route path="/law"  exact />
                    </Switch>
                } />
              </Switch>
            <Footer/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}