import React from 'react';
import './fdpage.styles.scss';
import Directory from '../../components/directory/directory.component'
import WebsiteTitle from '../../components/website-title/website-title.component';
import FdPanel from '../../components/fundraisers-page-comp/fundraisers-panel/fd-panel.component';
import Header from '../../components/header/header.component';

const FdPage = () => (
    <div className = 'FdPage'>
        <Header />
        <WebsiteTitle 
            title = '全部受助儿童'
        />
        <Directory />
        <FdPanel/>
    </div>
);

export default FdPage;