import React from 'react';
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Sidebar/>
          </div>
          <div className="col-sm-8 main">
            <MainContent/>
          </div>
        </div>
      </div>
    )
  }
}

export default App