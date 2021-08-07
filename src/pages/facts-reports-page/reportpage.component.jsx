import React from 'react';
import './reportpage.styles.scss';
import Directory from '../../components/directory/directory.component'
import WebsiteTitle from '../../components/website-title/website-title.component';

const ReportPage = () => (
    <div className = 'ReportPage'>
        <WebsiteTitle 
            title = 'Our statistics'
        />
        <Directory />
    </div>
);

export default ReportPage;