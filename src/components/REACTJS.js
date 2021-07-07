import React, { Component } from 'react'
import Books from './Books'
import Links from './Links'
import References from './Refrences'
import Navbar from './Navbar'
export default class REACTJS extends Component {
  render() {
    return (
      <div>
            <Navbar/>
           
            <div className="s-container">
            <div>
                <h1 className="heading-sub">React</h1>
                <p className="des-para">
                React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
                React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.
                JSX − JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.Components − React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.Unidirectional data flow and Flux − React implements one-way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.License − React is licensed under the Facebook Inc. Documentation is licensed under CC BY 4.0.
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
              <li > <a href="https://www.amazon.in/Programming-Absolute-Beginners-Guide-3rd/dp/0789751984?tag=hackr0df-21&geniuslink=true">  Learning React: Functional Web Development</a> </li>
              <li> <a href="https://www.amazon.in/Programming-Language-2nd-Brian-Kernighan/dp/0131103628?tag=hackr0df-21&geniuslink=true"> The Road to React by Robin Wieruch</a></li>
              <li> <a href="https://www.amazon.in/dp/0321884922?tag=hackr0df-21&geniuslink=true">  React in Action by Mark Tielens Thomas</a></li>
              <li><a href="https://www.amazon.in/Head-First-C-Griffiths-David/dp/9350236923?tag=hackr0df-21&geniuslink=true">  Learn React Hooks by Daniel Bugl </a> </li>

              <li><a href="https://www.amazon.in/C-Programming-Modern-Approach-2nd/dp/0393979504?tag=hackr0df-21&geniuslink=true"> . Learning React, 2nd Edition</a> </li>

              <li><a href="https://www.amazon.in/Primer-5th-Stanley-B-Lippman/dp/0321714113?tag=hackr0df-21&geniuslink=true">React.js Essentials: A fast-paced journey</a> </li>
              <li><a href="https://www.amazon.in/Effective-Modern-Specific-Ways-Improve/dp/1491903996?tag=hackr0df-21&geniuslink=true">   React Quickly by Azat Marden</a> </li>
            </ol>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
