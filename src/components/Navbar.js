import React, { Component } from 'react'
import newlogo from '../newlogo.png'
import avatar from '../avataaars.png'


export default class Navbar extends Component {

  handleSubmit(event) {
    let d = document.getElementById('maincollegelogo');
    console.log("i am logo clicker")
    d.href = "/Classroom";
    event.preventDefault();
  }
  handleHome(event){
    let d = document.getElementsByClassName("navbarlinks")[0];
    console.log("i am home clicker")
    d.href = "/Home";
    event.preventDefault();
  }
  handleClassroom(event){
    let d = document.getElementsByClassName("navbarlinks")[1];
    console.log("i am classroom clicker")
    d.href = "/Classroom";
    event.preventDefault();
  }
  handleAbout(event){
    let d = document.getElementsByClassName("navbarlinks")[2];
    console.log("i am About clicker")
    d.href = "/About";
    event.preventDefault();
  }




  render() {
    return (
     
<div >
<div className="outernavbar">
  <div className="leftnavbar">
    <a href="" onMouseOver={this.handleSubmit}  id="maincollegelogo"><img src={newlogo} alt="college-logo" /></a>
   <h1>Learn & GROW</h1>
  </div>
  <div className="middleofnavbar">
    <a href="#"  onMouseOver={this.handleHome}  className="navbarlinks">HOME</a>
    <a href="#" onMouseOver={this.handleClassroom} className="navbarlinks">CLASSROOM</a>
    <a href="#"  onMouseOver={this.handleAbout} className="navbarlinks">ABOUT</a>
  </div>
  <div className="rightnavbar">
   <img src={avatar} alt="avatar" width="50px" id="avatarpng" />
  </div>
</div>
</div>
    )
  }
}


