import React from 'react'; 
import './about-us.styles.scss';
import image1 from './charity.jpg';

const AboutUs = () => (
    <div className = 'content'>
        <h3 className='text'>
            
            This website enables people to donate money to children in need, and track the donation info at any time. 
            Here, you can both be a donor and a donee.
             
        </h3>
        <img src={image1}
            alt=" Can not display image"
            class = "center" />
    </div>
);

export default AboutUs