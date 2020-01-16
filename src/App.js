import React, { Component } from 'react';
import rumah from "./pages/home"
import scroller from "./component/scroll"
import list from "./component/images"
import karo from "./pages/ngetes"
import { Route, Switch } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={rumah} exact />
        <Route path="/tes" component={scroller} />
        <Route path="/gambar" component={list} />
        <Route path="/kepo" component={karo}/>
      </div>
      )
    }
  }
  
export default App