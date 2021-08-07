import React from 'react';
import './funded-page.styles.scss';
import PrivDirectory from '../../components/feed-page-comp/private-directory/priv-directory.component';
import WebsiteTitle from '../../components/website-title/website-title.component';
import FdPanel from '../../components/fundraisers-page-comp/fundraisers-panel/fd-panel.component';

const FundedPage = () => (
    <div className = 'FundedPage'>
        <WebsiteTitle 
            title = '我的资助对象'
        />
        <PrivDirectory />
        <FdPanel/>
    </div>
);

export default FundedPage;