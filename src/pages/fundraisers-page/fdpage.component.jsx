import React from 'react';
import './fdpage.styles.scss';
import Directory from '../../components/directory/directory.component'
import WebsiteTitle from '../../components/website-title/website-title.component';

const FdPage = () => (
    <div className = 'FdPage'>
        <WebsiteTitle 
            title = 'All Fundraisers'
        />
        <Directory />
    </div>
);

export default FdPage;