import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
import WebsiteTitle from '../../components/website-title/website-title.component';
import AboutUs from '../../components/about-us/about-us.component';
import Header from '../../components/header/header.component';

const HomePage = () => (
    <div className = 'homepage'>
    <Header/>
        <WebsiteTitle
            title = 'Unihack Charity Project'
        />
        <Directory />
        <AboutUs />
    </div>
);

export default HomePage;
