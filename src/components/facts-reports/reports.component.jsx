import React from 'react' ;
import './reports.styles.scss';
import Cover from './charity.jpg';

const Reports = () => (
    <div className= 'Reports'>
        <div className = 'background-image' style={{backgroundImage: `url(${Cover})`}}>
            <h1 className='content-text'>
                本项目目前共筹款xxxx元。
                共资助xx名儿童重返校园。
            </h1>
        </div>
  </div>
);

export default Reports
