import React from 'react'
import Navbar from './Navbar'
import girlimage from '../woman.png'
import boyimage from '../man.png'
import git from "../github.png"
import linkedin from "../linkedin.png"
export default function About() {
  return (
    <div className="allabout">
    <Navbar/>
    <h2 className="aboutusheading">
    About Us
    </h2>
    <div className="mission">
    <h2 className="ourmission">
    Our Mission
    </h2>
    <p className="aboutourmission">
     <h2 className="headingofaboutourmission">Improving Lives Through Learning</h2>
     <p>By connecting students all over the world to the best instructors, Learn and Grow is helping individuals reach their goals and pursue their dreams.Talent is universal, but opportunities are not. With access to online learning resources and instruction, anyone, anywhere, can gain skills and transform their lives in meaningful ways</p>
    </p>
    </div>
    
    <div className="devlopers">
    <div className="radha devloper">
    <img src={girlimage} alt="radha" />
    <h2 className="nameofdevloper">Radha Mamidwar</h2>
    <p>Our Teachers are passionate about sharing their knowledge and helping students. They’re experts who stay active in their fields in order to deliver up-to-date content.</p>
    <div className="socialmedia"> <a href="#" alt="github" target="_blank"><img src={git} alt="git" /></a>
    <a href="https://www.linkedin.com/in/radha-mamidwar-26b668211/" target="_blank" alt="linkedin"><img src={linkedin} alt="linkedin" /></a></div>
    </div>
    <div className="himanshu devloper">
    <img src={boyimage} alt="himanshu" />
    <h2 className="nameofdevloper">Himanshu Agrawal</h2>
    <p>We believe the world’s best teachers aren’t always found in classrooms. Our teachers come from around the world and offer courses on different technologies</p> 
    <div className="socialmedia"> <a href="https://github.com/harry6003" alt="github" target="_blank"><img src={git} alt="git" /></a>
    <a href="https://www.linkedin.com/in/himanshu-agrawal01234/" alt="linkedin" target="_blank"><img src={linkedin} alt="linkedin" /></a></div>
   
    </div>
    <div className="aditi devloper">
    <img src={girlimage} alt="aditi" />
    <h2 className="nameofdevloper">Aditi Shinde</h2>
    <p>Learn and Grow is an education marketplace that offers online courses for adults and young students in subjects from computer programming</p> 
    <div className="socialmedia"> <a href="#" alt="github" target="_blank"><img src={git} alt="git" /></a>
    <a href="#" alt="linkedin" target="_blank"><img src={linkedin} alt="linkedin" /></a></div>
    </div>
    </div>
    </div>
  )
}
