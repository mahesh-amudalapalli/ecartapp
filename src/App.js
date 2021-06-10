// import logo from './logo.svg';
import './App.css';
import Header from './header/header.js'
import Home from './home/home.js'
import { Route, Switch } from 'react-router-dom'
import Aboutus from './AboutUs/aboutus.js'
import Electrical from './Department/Electrical.js'
import Electronics from './Department/Electronics.js'
import IT from './Department/IT.js'
import Career from './Department/Careers.js'
import Table_tb from './Table_tb.js'
import Products from './Products/Products.js'
import Create from './Products/Create.js'
import React, { useState } from 'react';
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  const SetReadOnlyCall=(val)=>{
    setReadOnly(val);
  };

  // let productTag= <Products readOnly='true'/>;
  const [readOnly, setReadOnly] = useState(true);
  return (
    // <div className="App">
    //   <Header></Header>
    //   <Home/>
    // </div>
    
    <>
      <Header SetReadOnlyHandler={SetReadOnlyCall}></Header>
      <div className='Container'>
        <Products readOnly={readOnly}/> 
        <Switch>
          <Route key='1' path="/home"><Home /></Route>
          <Route key='2' path="/aboutus"><Aboutus /></Route>
          <Route key='3' path="/Department/Electrical"><Electrical /></Route>
          <Route key='4' path="/Department/Electronics"><Electronics /></Route>
          <Route key='5' path="/Department/IT"><IT /></Route>
          <Route key='6' path="/Department/Careers"><Career /></Route>
          <Route key='7' path="/Products"></Route>
          <Route key='8' path="/Create"><Create /></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
