import React from 'react';
import './feedpage.styles.scss';
import Directory from '../../components/directory/directory.component'
import WebsiteTitle from '../../components/website-title/website-title.component';
import PrivatePanel from '../../components/feed-page-comp/private-panel/private-panel.component';

const FeedPage = () => (
    <div className = 'feedpage'>
        <WebsiteTitle 
            title = 'Private Feed Page'
        />
        <Directory />
        <PrivatePanel />
    </div>
);

export default FeedPage;