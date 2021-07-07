import React , {Component}from 'react'

// export default function BottomofNavbar() {
  export default class BottomofNavbar extends Component{
  handlecplusplus(event){
    let d = document.getElementsByClassName("subjectcard")[0];
    console.log("i am c++ clicker")
    d.href = "/C++";
    event.preventDefault();
  }
  handlejava(event)
  {
    let d = document.getElementsByClassName("subjectcard")[1];
    console.log("i am java clicker")
    d.href = "/Java";
    event.preventDefault();
  }
  handlepython(event)
  {
    let d = document.getElementsByClassName("subjectcard")[2];
    console.log("i am python clicker")
    d.href = "/Python";
    event.preventDefault();
  }
  handlehtmlandcss(event)
  {
    let d = document.getElementsByClassName("subjectcard")[3];
    console.log("i am htmlanscss clicker")
    d.href = "/HtmlandCSS";
    event.preventDefault();
  }
  handlejavascript(event)
  {
    let d = document.getElementsByClassName("subjectcard")[4];
    console.log("i am javascript clicker")
    d.href = "/JavaScript";
    event.preventDefault();
  }
  hancdleREACT(event)
  {
    let d = document.getElementsByClassName("subjectcard")[5];
    console.log("i am REACT clicker")
    d.href = "/REACTJS";
    event.preventDefault();
  }
render()
{
  return (
    <div className="outerbottomofnavbar">
    <h1 className="headingofclasses">Selet Technology   &#9660;</h1>
  
    <div className="classescontainer">
    
                            
      <div className="classes">
      <a href="#"  onMouseOver={this.handlecplusplus}  className="subjectcard">C++</a>
     
      </div>
      <div className="classes">
      <a href="#"  onMouseOver={this.handlejava}  className="subjectcard">Java</a>
      </div>
      <div className="classes">
      
      <a href="#"  onMouseOver={this.handlepython}  className="subjectcard">Python</a>
      </div>
      <div className="classes">
      <a href="#"  onMouseOver={this.handlehtmlandcss}  className="subjectcard">HTML & CSS</a>
      </div>
      <div className="classes">
      <a href="#"  onMouseOver={this.handlejavascript}  className="subjectcard">JavaScript</a>
      </div>
      <div className="classes"> 
      <a href="#"  onMouseOver={this.hancdleREACT}  className="subjectcard">ReactJS</a>
      </div>
    </div>
    </div>
  )
}
  }