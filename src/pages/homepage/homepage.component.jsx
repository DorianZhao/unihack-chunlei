import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
import WebsiteTitle from '../../components/website-title/website-title.component';
import AboutUs from '../../components/about-us/about-us.component';

const HomePage = () => (
    <div className = 'homepage'>
        <WebsiteTitle />
        <Directory />
        <AboutUs />
    </div>
);

export default HomePage;