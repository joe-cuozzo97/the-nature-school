import React from "react";
import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
import "./NavBar.css"

export default function NavBar(props) {
  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      <div className="navBar">
        <ul>
        <li className="image"><img src="https://i.imgur.com/Tl4Y5C2.jpeg" alt="" /></li>
      <li><Link className="navLink" to={"/"}>Home</Link></li>
      <li><Link className="navLink" to="/classDays">All Classes</Link></li>
      <li><Link className="navLink" to={"/NewClass"}>Add New Class</Link></li>
      <li className="welcome"><span className="navLink">Welcome, {props.user.name}</span></li>
      <li><Link className="navLink" to="" onClick={handleLogOut}>
        Log Out
      </Link></li>
        </ul>
      
      </div>
    </nav>
  );
}

//if the user = the admin, the navbar should have an add class posting option
