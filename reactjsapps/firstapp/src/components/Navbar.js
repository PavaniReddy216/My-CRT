import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Contactus</a></li>
      <li><a href="#">Aboutus</a></li>
      <li><a href="#">Courses</a></li>
    </ul>
        </div>
    );
};

export default Navbar;