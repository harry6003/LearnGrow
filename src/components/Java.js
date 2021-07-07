import React, { Component } from 'react'
import Books from './Books'
import Links from './Links'
import References from './Refrences'
import Navbar from './Navbar'

export default class Java extends Component {
  render() {
    return (
      <div>
            <Navbar/>
            <div className="s-container">
            <div>
                <h1 className="heading-sub">JAVA</h1>
                <p className="des-para">
                Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies. It is a computing platform for application development. Java is fast, secure, and reliable, therefore. It is widely used for developing Java applications in laptops, data centers, game consoles, scientific supercomputers, cell phones, etc.
                Java Platform is a collection of programs that help programmers to develop and run Java programming applications efficiently. It includes an execution engine, a compiler, and a set of libraries in it. It is a set of computer software and specifications. James Gosling developed the Java platform at Sun Microsystems, and the Oracle Corporation later acquired it.
                Java is a multi-platform, object-oriented, and network-centric language. It is among the most used programming language. Java is also used as a computing platform.
                It is considered as one of the fast, secure, and reliable programming languages preferred by most organizations to build their projects. Java programming language was originally developed by Sun Microsystems which was initiated by James Gosling and released in 1995 as core component of Sun Microsystems' Java platform (Java 1.0 [J2SE]).   
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
              <li > <a href="https://www.amazon.in/Core-Java-I-Fundamentals-11th-Horstmann/dp/0135166306?tag=hackr0df-21&geniuslink=true">Core Java Volume I – Fundamentals is a Java </a> </li>
              <li> <a href="https://www.amazon.in/Effective-Java-Joshua-Bloch/dp/0134685997?tag=hackr0df-21&geniuslink=true">Effective Java</a></li>
              <li> <a href="https://www.amazon.in/Java-Beginners-Eighth-Herbert-Schildt/dp/1260440214?tag=hackr0df-21&geniuslink=true">Java: A Beginner’s Guide</a></li>
              <li><a href="https://www.amazon.in/Java-Complete-Reference-Eleventh/dp/1260440230?tag=hackr0df-21&geniuslink=true">Java - The Complete Reference</a> </li>

              <li><a href="https://www.amazon.in/Head-First-Java-Brain-Friendly-Guide/dp/8173666024"> Head First Java</a> </li>

              <li><a href="https://www.amazon.in/Java-Concurrency-Practice-Brian-Goetz/dp/0321349601?tag=hackr0df-21&geniuslink=true">Java Concurrency in Practice</a> </li>
              <li><a href="https://www.amazon.in/Java-Performance-Definitive-Guide-Getting/dp/1449358454?tag=hackr0df-21&geniuslink=true"> Java Performance: The Definite Guide</a> </li>
            </ol>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
