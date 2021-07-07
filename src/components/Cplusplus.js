import React, { Component } from 'react'
import Books from './Books'
import Links from './Links'
import References from './Refrences'

import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Subjectnav from './Subjectnav';
export default class Cplusplus extends Component {
  render() {
    return (
      <div>
            <Navbar/>
            <div className="s-container">
            <div>
                <h1 className="heading-sub">C++</h1>
                <p className="des-para">
                C++ is an object-oriented computer language created by notable computer scientist Bjorne Stroustrop as part of the evolution of the C family of languages. C++ is pronounced "see-plus-plus." It was developed as a cross-platform improvement of C to provide developers with a higher degree of control over memory and system resources.
                Today C++ is still very appreciated for its notable portability which allows developers to create programs that can run on different operating systems or platforms very easily. Despite being a high-level language, since C++ is still close to C it can be used for low-level manipulation due to its close relation with machine language.
                In object-oriented programming, an object is a data type that has both data and functions inherent in its design. Prior to the advent of object-oriented programming, programmers typically saw a codebase as composed of individual command line instructions. The identification of objects with data and functions built in led to a new way of packaging and automating code work.In 1983, the name of the language was changed from C with Classes to C++. The ++ operator in the C language is an operator for incrementing a variable, which gives some insight into how Stroustrup regarded the language.
                </p>
            </div>
            <div>
            <div className="STUDYREF">
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
              <li > <a href="https://www.amazon.in/Programming-Absolute-Beginners-Guide-3rd/dp/0789751984?tag=hackr0df-21&geniuslink=true">C Programming Absolute Beginner's Guide</a> </li>
              <li> <a href="https://www.amazon.in/Programming-Language-2nd-Brian-Kernighan/dp/0131103628?tag=hackr0df-21&geniuslink=true">C Programming Language (Prentice Hall Software)</a></li>
              <li> <a href="https://www.amazon.in/dp/0321884922?tag=hackr0df-21&geniuslink=true">Learn C the Hard Way: Practical Exercises on the Computational Subjects</a></li>
              <li><a href="https://www.amazon.in/Head-First-C-Griffiths-David/dp/9350236923?tag=hackr0df-21&geniuslink=true"> Head First C: A Brain-Friendly Guide</a> </li>

              <li><a href="https://www.amazon.in/C-Programming-Modern-Approach-2nd/dp/0393979504?tag=hackr0df-21&geniuslink=true">C Programming 2e: A Modern Approach</a> </li>

              <li><a href="https://www.amazon.in/Primer-5th-Stanley-B-Lippman/dp/0321714113?tag=hackr0df-21&geniuslink=true">C++ Primer Paperback</a> </li>
              <li><a href="https://www.amazon.in/Effective-Modern-Specific-Ways-Improve/dp/1491903996?tag=hackr0df-21&geniuslink=true">Effective Modern C++</a> </li>
            </ol>
            </div>
            </div>
         
          
        </div>
      </div>
    )
  }
}
