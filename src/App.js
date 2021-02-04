import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './component/Header'
import Section from './component/Section'
import {DataProvider} from './component/Context'
import Home from './component/Home'


class App extends React.Component{
  render() {
      return(
          <DataProvider>
            <div className="app">
                <Router>
                  <Switch>
                    <Route path="/product">
                      <Header />
                      <Section />
                    </Route>
                    <Route path="/cart">
                      <Header />
                      <Section />
                    </Route>
                    <Route path="/contact">
                      <Header />
                      <Section />
                    </Route>
                    <Route path="/about">
                      <Header />
                      <Section />
                    </Route>
                    <Route path="/login">
                      <Header />
                      <Section />
                    </Route>
                    <Route path="/payment">
                      <Header />
                      <Section />
                    </Route>
                    <Route path="/online-store">
                      <Header />
                      <Home />
                      <Section />
                    </Route>
                  </Switch>
                </Router>
            </div>
          </DataProvider>
        )
      }
}

export default App
