import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from "./Home";
import Logto from "./Logto";
import Stu from './Stu';
import Liblst from './Liblst';
import Pdf51 from './Pdf51'



function App() {  
  
  return (
    <Router>
     <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route exact path ='/home' element={<Home/>}/>
      <Route exact path ='/Logto' element={<Logto/>}/>
      <Route exact path='/Stu' element={<Stu/>}/>
      <Route exact path='/Liblst' element={<Liblst/>}/>
      <Route exact path='/Pdf51' element={<Pdf51/>}/>

     </Routes>
     
    </Router>

  );
}

export default App;
