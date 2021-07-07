
import './App.css';
import Login from './components/Login'
import StudentLandingPage from './components/StudentLandingPage'
import Home from "./components/Home"
import Classroom from "./components/Classroom"
import About from './components/About';
import Cplusplus from "./components/Cplusplus"
import Java from "./components/Java"
import Python from "./components/Python"
import HtmlandCSS from "./components/HtmlandCSS"
import JavaScript from "./components/JavaScript"
import REACTJS from "./components/REACTJS"
import {

  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  return (
    <Router>
         <Switch>
         {/* <Route exact path="/" render={() => {
           return(
              <Login/>   
           );
         }}>  */}
          {/* </Route> */}
           <Route exact path="/" render={() => {
           return(
              <Home/>   
           );
         }}> 
          </Route>
          <Route exact path="/Home" render={() => {
           return(
              <Home/>   
           );
         }}> 
         </Route>
          <Route exact path="/About" render={() => {
           return(
              <About/>   
           );
         }}> 
         
         
          </Route>
          <Route exact path="/Classroom" render={() => {
           return(
              <Classroom/>   
           );
         }}> 
          </Route>
          <Route exact path="/C++" render={() => {
           return(
              <Cplusplus/>   
           );
         }}> 
          </Route>
          <Route exact path="/Java" render={() => {
           return(
              <Java/>   
           );
         }}> 
          </Route>
          <Route exact path="/Python" render={() => {
           return(
              <Python/>   
           );
         }}> 
          </Route>
          <Route exact path="/HtmlandCSS" render={() => {
           return(
              <HtmlandCSS/>   
           );
         }}> 
          </Route>
          <Route exact path="/JavaScript" render={() => {
           return(
              <JavaScript/>   
           );
         }}> 
          </Route>
          <Route exact path="/REACTJS" render={() => {
           return(
              <REACTJS/>   
           );
         }}> 
          </Route>
        </Switch>

        
    </Router>
   
     
    
  );
}

export default App;
