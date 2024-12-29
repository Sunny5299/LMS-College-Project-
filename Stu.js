import React from "react";
import { Link } from "react-router-dom";
import defaultimage from './image/IMG-20241215-WA0010.jpg'
import Model from 'react-modal'
import { useState } from "react";


function Stu() {  

 
  

  //state to handle image
  const[image, setImage] = useState({
    placeholder: defaultimage,
    file:null
  })
  const[name, Setname] = useState("")
  const[allentry, SetallEntry] = useState('')

  const[popup, SetPopup] = useState(false)

  //function for image change
  const handleProfileImageChange=(event)=>{
  
    console.log(event.target.files[0])
    //preview show
    const reader=new FileReader()
    reader.onload=(r)=>{
        setImage({
            placeholder:r.target.result,
            file:event.target.files[0]
  })
}
    reader.readAsDataURL(event.target.files[0])
  }
  
  
  const submitForm = (e) => {
    e.preventDefault();
    SetallEntry(name)
    console.log(name);
  }
  
  
    return (
    <>
    <div class="bigcon">
    {
  popup &&
    <>
    
    <Model isOpen={true}>
    <div class="pop">
      <div class="pop1">
         <img height={100} width={100} src={image.placeholder} alt="" />
          <input type="file" id="myfile" name="filename" onChange={handleProfileImageChange}></input>
      </div>  
      <div class="inpbox">
      <form action="" onSubmit={submitForm}>
        <div class="box52">
      <label>Enter your name:
        
        <input type="text" name="email" value={name} onChange={(e) => Setname(e.target.value)}/>
        
      </label>
      </div>
      <br/>
      <div class="box52">
      <label>Profile Image:
     
      </label>
      </div>
      <br/>
      <div class="box52">
      <label>Gender:
        <input type="text" />
      </label>
      </div>
      <br/>
      <div class="box52">
      <label>DOB:
        <input type="text" />
      </label>
      </div>
      <br/>
      <div class="box52">
      <label>Mobile No:
        <input type="text" />
      </label>
      </div>
      <br/>
      <div class="box52">
      <label>Email:
        <input type="text" />
      </label>
      </div>
      <br/>
      <div class="box52">
      <label>Address:
        <input type="text" />
      </label>
      <label>
      <tbody>
          <tr>
          <td>
           <button type="submit" onClick={(e)=>{Setname(e.target.value)}} >Submit</button>
          </td>
          <td>
           <button onClick={()=>SetPopup(false)}>Close</button>
          </td>
        </tr>
        </tbody>
      </label>
      </div>
      </form>
      <br/>
      
        
      
      </div>
      </div>
      </Model>
    </>
  }
      <div>
        <div class="coll">Indian Institute Of Technology Patna

        </div>
        <div class="caps">Capstone Project - II</div>
        <div class="lms">Library Management System</div>
      </div>
      <div class="container">
        <div class="box"><Link to="/Logto"><button class="home">Home</button></Link></div>
        <div class="box"><button>Dashboard</button></div>
        <div class="box"><Link to="/Stu"><button>Students</button></Link></div>
        <div class="box"><Link to="/Liblst"><button>List of Library</button></Link></div>
      </div>

      <div class="Liblsts">
        <div Class="Profo">
            <h3 class="boxfile">Profile</h3>
        </div>
        <div class="Details">

            <div class="head">
              <tbody>
                <tr>
                  <td>
                  <h3 class="heading">Name :</h3>
                  </td>
                  <td>
                  <div>
                          {allentry}
                  </div>
                  </td>
                </tr>
                <tr>
                    <td>
                    <h3 class="heading">Profile Image :</h3>
                    </td>
                  
                    
                </tr>
                <tr>
                    <td>
                    <h3 class="heading">Gender :</h3>
                    </td>
                    <td>
                    <h3 class="heading">Male</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                    <h3 class="heading">Joining Date :</h3>
                    </td>
                    <td>
                    <h3 class="heading">15/12/2023</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                    <h3 class="heading">Date Of Birth :</h3>
                    </td>
                    <td>
                    <h3 class="heading">01/01/1999</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                    <h3 class="heading">Mobile No :</h3>
                    </td>
                    <td>
                    <h3 class="heading">7254061220</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                    <h3 class="heading">Email :</h3>
                    </td>
                    <td>
                    <h3 class="heading">Email@gmail.com</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                    <h3 class="heading">Address :</h3>
                    </td>
                    <td>
                    <h3 class="heading">Bihta,Patna</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                    <h3 class="heading">No Of Book Issued :</h3>
                    </td>
                    <td>
                    <h3 class="heading">50</h3>
                    </td>
                </tr>
                <tr>
                  <td>
                      <button onClick={()=>SetPopup(true)}>Update</button>
                  </td>
                  <td>
                      <button>Save Changes</button>
                  </td>
                </tr>

              </tbody>
                

            </div>


            

        </div>
       </div>
       </div>
    </>


);

}



export default Stu;

