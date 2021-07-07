import React, { Component } from 'react'
import '../maincss.css'
import collegeclass from '../collegeclass.png'
//import { Link} from "react-router-dom";

// import StudentLandingPage from './StudentLandingPage';
// import TeacherLandingPage from './TeacherLandingPage';
export default class Login extends Component {

  // let d  = document.querySelector('loginbutton');
  
  // let f = document.querySelector('username');
  // let g = document.querySelector('password');


  // d.addEventListener('click',consolelog);
  // function consolelog(){
  //   console.log(f.target.value);
  //   console.log(g.target.value);
  // }


  constructor(props) {
    super(props);
    this.state = {unsme: '',pswd:''};

    this.handleUnameChange = this.handleUnameChange.bind(this);
    this.handlePswdChange = this.handlePswdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUnameChange(event) {
    this.setState( { uname: event.target.value} );
  }
  handlePswdChange(event) {
    this.setState( { pswd: event.target.value} );
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    //console.log("uname is ",this.state.uname);
    //console.log("pswd is ",this.state.pswd);

      // console.log("I am, logedin")
    if(this.state.uname === 'studentdemo' && this.state.pswd === '1234' )
   {
      let d = document.getElementsByClassName('loginbutton')[0];
         console.log("I am, logedin in s",d  );
         d.href = "/Home";
       
      
   }
 
    event.preventDefault();
  }
  render(){
  return (
    
    <div className="backgroundoflogincontainer">
      <div className="outercontainerlogin">
        <div className="leftpartlogin">
        <img src={collegeclass} alt="college" width="500px"></img>
        </div>
        <div className="rightpartlogin">
          <div className="logindetails">
            <h2 className="headingoflogin">Member Login</h2>
            <div className="containerofloginpass">
             <div className="username">
             <input className="inputlogin username" type="text" placeholder="Enter Username" name="uname" required  uname={this.state.uname} onChange={this.handleUnameChange}/>
             </div>
             <div  className="password">
              <input className="inputlogin password" type="password" placeholder="Enter Password" name="psw" required  pswd={this.state.pswd} onChange={this.handlePswdChange}/>
             </div>
             <div className="submitbutton">
             
              <a href="" onMouseOver={this.handleSubmit}  className="inputlogin loginbutton"  >Login</a>
             </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );

}
}
