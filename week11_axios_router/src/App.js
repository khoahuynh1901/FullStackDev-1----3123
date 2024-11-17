import logo from './logo.svg';
import './App.css';
import UserList from "./components/UserList"
import { Routes, Route, BrowserRouter, NavLink, Link } from 'react-router-dom';
import House from './components/House';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './components/UserDetails';
import { Component } from 'react';
import PersonList from './components/PersonalList';
export default class App extends Component{
  render(){
    return(
    //   <div>
    //   <h1> Axios and Navigation </h1>
    //   {/* <UserList></UserList> */}
    //   <BrowserRouter> 
    //   <nav>
    //     <Link to="/house"> House</Link> |
    //     <Link to="/contact/KhoaHuynh"> Contact</Link> |
    //     <NavLink to ="/about?college=GBC"> About Us</NavLink> |
    //     <NavLink to = "/userList"> UserList </NavLink> 
    //   </nav>
    //     <Routes>
    //       <Route path="/house" element={<House/>} />
    //       <Route path="/about" element={<AboutUs/>}/>
    //       <Route path="/contact/ :name" element={<Contact/>}/>
    //       <Route path="/userList" element={<UserList/>}/> 
    //       <Route path="/user/:userid" element={<UserDetails/>}/> 
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <PersonList></PersonList>

    )
  } 
}

// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>