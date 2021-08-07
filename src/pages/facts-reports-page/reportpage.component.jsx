import React from 'react';
import './reportpage.styles.scss';
import Directory from '../../components/directory/directory.component'
import WebsiteTitle from '../../components/website-title/website-title.component';
import Header from '../../components/header/header.component';
import Reports from '../../components/facts-reports/reports.component';

const ReportPage = () => (
    <div className = 'ReportPage'>
        <Header />
        <WebsiteTitle 
            title = '项目统计'
        />
        <Directory />
        <Reports />
    </div>
);

export default ReportPage;