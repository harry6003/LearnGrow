import React, { Component } from 'react'
import Books from './Books'
import Links from './Links'
import References from './Refrences'
import Navbar from './Navbar'
export default class Python extends Component {
  render() {
    return (
      <div>
            <Navbar/>
            <div className="s-container">
            <div>
                <h1 className="heading-sub">Python</h1>
                <p className="des-para">
                Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.  
                Often, programmers fall in love with Python because of the increased productivity it provides. Since there is no compilation step, the edit-test-debug cycle is incredibly fast. Debugging Python programs is easy: a bug or bad input will never cause a segmentation fault. Instead, when the interpreter discovers an error, it raises an exception. When the program doesn't catch the exception, the interpreter prints a stack trace. A source level debugger allows inspection of local and global variables, evaluation of arbitrary expressions, setting breakpoints, stepping through the code a line at a time, and so on. The debugger is written in Python itself, testifying to Python's introspective power. 
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
              <li > <a href="https://www.amazon.in/Python-Crash-Course-Eric-Matthes/dp/1593279280/ref=sr_1_2?tag=hackr0df-21&dchild=1&keywords=Python%20Crash%20Course&qid=1611743309&s=books&sr=1-2&geniuslink=true"> Python Crash Course</a> </li>
              <li> <a href="https://www.amazon.in/dp/1593279922?tag=hackr0df-21&geniuslink=true">Automate the Boring Stuff with Python, 2nd Edition</a></li>
              <li> <a href="https://www.amazon.in/dp/1449355730?tag=hackr0df-21&geniuslink=true"> Learning Python, 5th Edition</a></li>
              <li><a href="https://www.amazon.in/dp/1491919531?tag=hackr0df-21&geniuslink=true">Head-First Python (2nd edition)</a> </li>

              <li><a href="https://www.amazon.in/dp/1537713949?tag=hackr0df-21&geniuslink=true"> Elements of Programming Interviews in Python</a> </li>

              <li><a href="https://greenteapress.com/wp/learning-with-python/">Learning with Python: How to Think Like a Computer Scientist</a> </li>
              <li><a href="https://python.swaroopch.com/">  A Byte of Python</a> </li>
            </ol>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
