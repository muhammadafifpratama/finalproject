import React, { Component } from 'react';
import rumah from "./pages/home"
import karo from "./pages/ngetes"
import { Route} from "react-router-dom"
import tes from "./component/tes"
import carousel from "./carousel/main"

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={rumah} exact />
        <Route path="/tes" component={carousel} exact />
      </div>
      )
    }
  }
  
export default App