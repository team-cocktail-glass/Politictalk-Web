import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/defaultLayout/navigation';
import { Provider } from 'react-redux';
import { store } from './core/redux/store/store';
import Footer from './components/defaultLayout/footer';
import { StickyContainer, Sticky } from 'react-sticky';
import { Main, ReportMain,ReportProfile, ReportPost, ReportWrite, Meeting, MeetingPost, MeetingProfile, MeetingWrite } from './container';

import './App.css';

export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <StickyContainer>
              <Sticky>{({ style,distanceFromTop }) => <Navigation distanceFromTop={distanceFromTop}/>}</Sticky>
              </StickyContainer>
              <Switch>
                <Route path="/login" exact />
                <Route render={() => 
                    <Switch>
                      <Route path="/" component={Main} exact />
                      <Route path="/report" component={ReportMain} exact />
                      <Route path="/report/:uuid" component={ReportProfile} exact/>
                      <Route path="/report/:uuid/write" component={ReportWrite} exact/>
                      <Route path="/report/:uuid/:postid" component={ReportPost} exact/>
                      <Route path="/meeting" component={Meeting} exact />
                      <Route path="/meeting/:uuid" component={MeetingProfile} exact/>
                      <Route path="/meeting/:uuid/write" component={MeetingWrite} exact/>
                      <Route path="/meeting/:uuid/:postid" component={MeetingPost} exact/>
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