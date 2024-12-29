import React from "react";
import { Link } from "react-router-dom";


function Logto() {

return(

    <div class="main">
    <div>
        <div class="coll">Indian Institute Of Technology Patna</div>
        <div class="caps">Capstone Project - II</div>
        <div class="lms">Library Management System</div>
    </div>
    <div class="container">
        <div class="box"><Link to="/Logto"><button class="home">Home</button></Link></div>
        <div class="box"><button>Dashboard</button></div>
        <div class="box"><Link to="/Stu"><button>Students</button></Link></div>
        <div class="box"><Link to="/Liblst"><button>List of Library</button></Link></div>
    </div>
    <div class="bookbox">
          <button class="book">Pthon Book</button>
          <Link to="/Pdf51"><button class="book">python</button></Link>
          <button class="book"></button>
          <button class="book"></button>
          <button class="book"></button>
          <button class="book"></button>
          <button class="book"></button>
          <button class="book"></button>
          <button class="book"></button>
          <button class="book"></button>
          
    </div>
   </div>
  

  );
}
export default Logto;