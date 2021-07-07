import React, { Component } from 'react'
import Books from './Books'
import Links from './Links'
import References from './Refrences'
import Navbar from './Navbar'
export default class HtmlandCSS extends Component {
  render() {
    return (
      <div>
            <Navbar/>
            <div className="s-container">
            <div>
                <h1 className="heading-sub">HTML & CSS</h1>
                <p className="des-para">
                HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices. Along with graphics and scripting, HTML and CSS are the basis of building Web pages and Web Applications. 
                HTML is the language for describing the structure of Web pages. HTML gives authors the means to:
                Publish online documents with headings, text, tables, lists, photos, etc.
                Retrieve online information via hypertext links, at the click of a button.
                Design forms for conducting transactions with remote services, for use in searching for information, making reservations, ordering products, etc.
                Include spread-sheets, video clips, sound clips, and other applications directly in their documents.
                CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language. The separation of HTML from CSS makes it easier to maintain sites, share style sheets across pages, and tailor pages to different environments. This is referred to as the separation of structure (or: content) from presentation.
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
              <li > <a href="https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/?tag=codeinwp0d3-20">  HTML and CSS: Design and Build Websites</a> </li>
              <li> <a href="https://www.amazon.com/Smarter-Way-Learn-HTML-CSS-ebook/dp/B00ULX5FT2/?tag=codeinwp0d3-20">. A Smarter Way to Learn HTML & CSS</a></li>
              <li> <a href="https://www.amazon.com/Coding-Learn-JavaScript-Build-Website-ebook/dp/B07MWDVNXM/?tag=codeinwp0d3-20"> Get Coding!: Learn HTML, CSS & JavaScript & Build a Website</a></li>
              <li><a href="https://www.amazon.com/Learning-Web-Design-Beginners-JavaScript/dp/1449319270/?tag=codeinwp0d3-20"> Learning Web Design: A Beginner’s Guide to HTML, CSS, JavaScript, and Web Graphics </a> </li>

              <li><a href="https://www.amazon.com/HTML-CSS-JavaScript-All-One-ebook/dp/B07L8KF3BK/?tag=codeinwp0d3-20"> HTML and CSS: Visual QuickStart Guide – by Elizabeth Castro </a> </li>

              <li><a href="https://www.amazon.com/Responsive-Web-Design-HTML5-CSS-ebook/dp/B087D5FXXG/?tag=codeinwp0d3-20">Responsive Web Design with HTML5 and CSS</a> </li>
              <li><a href="https://www.amazon.com/CSS-Pocket-Reference-Visual-Presentation-ebook/dp/B07BYHMM8R/?tag=codeinwp0d3-20">   CSS Pocket Reference: Visual Presentation for the Web </a> </li>
            </ol>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
