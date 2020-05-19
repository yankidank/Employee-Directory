import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div class="container">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <Link className="navbar-brand" to="/">
          Employee Directory
        </Link>
        <div id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort 
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">First Name</a>
                <a class="dropdown-item" href="#">Last Name</a>
                <a class="dropdown-item" href="#">Email</a>
                <a class="dropdown-item" href="#">Age</a>
                <a class="dropdown-item" href="#">Location</a>
              </div>
            </li>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Employee Name" aria-label="Search" />
              <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
