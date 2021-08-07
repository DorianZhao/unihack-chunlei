import React from 'react' ; 

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