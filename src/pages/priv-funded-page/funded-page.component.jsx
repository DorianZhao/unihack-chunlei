import React from 'react';
import './funded-page.styles.scss';
import PrivDirectory from '../../components/feed-page-comp/private-directory/priv-directory.component';
import WebsiteTitle from '../../components/website-title/website-title.component';
import FcPanel from '../../components/fundedchildren-page-comp/fundChildren-panel/fc-panel.component';

const FundedPage = () => (
    <div className = 'FundedPage'>
        <WebsiteTitle
            title = '资助对象近况'
        />
        <PrivDirectory />
        <FcPanel />
    </div>
);

export default FundedPage;
