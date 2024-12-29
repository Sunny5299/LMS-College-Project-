import React from "react";
import { Link } from "react-router-dom";

function Home() {  
  
    return (
  
    <div>
    <form action="">
    <div class="control">
      <div id="box">
        <div class="para1">
            <p>LIBRARY MANAGEMENT SYSTEM</p>
        </div>
        <div class="box1">
           <div class="gmail">
             <input class="inp1" type="text" placeholder="Enter Mobile No or Email."/>
           </div>
           <div class="pass">
             <input class="inp2" type="text" placeholder="Enter Password"/>
           </div>
           <div class="butn">
             <Link to="/Logto"><input class="inp3" type="button" value="Login"/></Link>
           </div>
        </div>
        <div class="log">
           <div class="fog"><a href="">Forgot Password</a></div>
           <div class="reg"><a href="">Register</a></div>
        </div>
      </div>
    </div>
    </form>
    </div>
  

  );
}

export default Home;
