import React, { Component } from 'react';
import rumah from "./pages/home"
import scroller from "./component/scroll"
import list from "./component/images"
import karo from "./pages/ngetes"
import { Route} from "react-router-dom"
import aaa from "./component/tes"

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={karo} exact />
        <Route path="/tes" component={scroller} />
        <Route path="/gambar" component={list} />
      </div>
      )
    }
  }
  
export default App