import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
import WebsiteTitle from '../../components/website-title/website-title.component';

const HomePage = () => (
    <div className = 'homepage'>
        <WebsiteTitle />
        <Directory />
    </div>
);

export default HomePage;