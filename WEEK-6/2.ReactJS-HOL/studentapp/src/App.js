import './App.css';
import Home from 'D:/JAVA-FSE/WEEK-6/2.ReactJS-HOL/studentapp/src/Components/Home.js';
import About from 'D:/JAVA-FSE/WEEK-6/2.ReactJS-HOL/studentapp/src/Components/About.js';
import Contact from 'D:/JAVA-FSE/WEEK-6/2.ReactJS-HOL/studentapp/src/Components/Contact.js';
import { Component } from 'react';


class App extends Component{
  render(){
    return (
      <div>
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
