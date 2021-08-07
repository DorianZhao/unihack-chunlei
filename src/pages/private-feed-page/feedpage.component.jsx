import React from 'react';
import './feedpage.styles.scss';
import WebsiteTitle from '../../components/website-title/website-title.component';
import PrivatePanel from '../../components/feed-page-comp/private-panel/private-panel.component';
import PrivDirectory from '../../components/feed-page-comp/private-directory/priv-directory.component';

const FeedPage = () => (
    <div className = 'feedpage'>
        <WebsiteTitle 
            title = '我的资助对象'
        />
        <PrivDirectory />
        <PrivatePanel />
    </div>
);

export default FeedPage;