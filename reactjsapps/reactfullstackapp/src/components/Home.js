import React from 'react';
import "../Styles/home.css";
import Image1 from '../Images/diet.png';


const Home = () => {
    return (
        <div className='home'>
            <center><h2>Welcome to Home page!!!</h2></center>
            <div class="grid-container">
  <div class="grid-item"><img src={Image1} width="150px" height="150px"/>
</div>
  <div class="grid-item"><h6>Dhanekula Institute of Engineering and Technology 
    is a private college located in Ganguru, near Vijayawada city in Andhra Pradesh. 
    The Dhanekula Institute of Engineering and Technology opened in 2009. It was founded by Dhanekula Ravindranadh Tagor.
    who is famous for his versatility and excellence in promoting various agricultural and industrial organizations and known for
     his love and affection towards the man kind improving their standard of living with his meticulous, measured efforts
    It is affiliated to JNTUK KakinadaDhanekula Institute of Engineering & Technology Vijayawada, established in 2009 offers degrees 
    and diplomas in engineering courses. Affiliated to JNTU Kakinada, DIET Vijayawada has a sprawling 10.28-acre campus which caters 
    to more than 2000 students.</h6></div> 
</div>
            
        </div>
    );
};

export default Home;