import React from 'react' ; 
import './website-title.styles.scss';

const WebsiteTitle = ({title}) => (
    <div className = 'website-title'>
        <div className = 'content'>
            <h2 className = 'title'>
                {title}
            </h2>
        </div>
    </div>
);

export default WebsiteTitle