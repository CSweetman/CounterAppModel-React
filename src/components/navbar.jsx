import React, { Component } from 'react';

//Only render method, no state, only get data via props
//Can convert this component to stateless functional component. Use function rather than class
//Stateless functional components. Personal preference but this is the norm
const NavBar = ({ totalCounters }) => {
    return (<nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
            Navbar {" "}
            <span className="badge badge-pill badge-secondary">
                {totalCounters}
            </span>
        </a>
    </nav>);
};

export default NavBar;