import React, { Component } from 'react'
import Books from './Books'
import Links from './Links'
import References from './Refrences'
import Navbar from './Navbar'
export default class JavaScript extends Component {
  render() {
    return (
      <div>
            <Navbar/>
            <div className="s-container">
            <div>
                <h1 className="heading-sub">JavaScript</h1>
                <p className="des-para">
                JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.
                JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behavior.
                Contrary to popular misconception, JavaScript is not "Interpreted Java". In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so).
                JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects.
                </p>
            </div>
            <div>
            <div className="STUDYREF ">
               <div className="bbooks">
                <a className="BLR" href="#">Books</a>
               </div>
               <div className="llinks">
               <a className="BLR" href="#">Links</a>

               </div>
               <div className="rrefrences">
               <a className="BLR" href="#">Refrences</a>
               </div>

            </div>
            <div className="listofitems">
            <ol>
              <li > <a href="https://www.amazon.in/dp/1497408180?tag=hackr0df-21&geniuslink=true">A Smarter Way to Learn Javascript</a> </li>
              <li> <a href="https://www.amazon.in/dp/1593275846?tag=hackr0df-21&geniuslink=true">Eloquent JavaScript 2e</a></li>
              <li> <a href="https://www.amazon.in/dp/1118531647?tag=hackr0df-21&geniuslink=true">JavaScript and JQuery: Interactive Front-End Web Development</a></li>
              <li><a href="https://www.amazon.in/dp/0596517742?tag=hackr0df-21&geniuslink=true"> Javascript: The Good Parts</a> </li>
              <li><a href="https://www.amazon.in/dp/B00LDZ7824?tag=hackr0df-21&geniuslink=true">Learn JavaScript VISUALLY with Interactive Exercises</a> </li>
              <li><a href="https://www.amazon.in/dp/0596805527?tag=hackr0df-21&geniuslink=true">JavaScript: The Definitive Guide</a> </li>
            </ol>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
