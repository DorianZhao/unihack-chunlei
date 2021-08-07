import React from 'react' ; 

const MenuItem = ({title}) => (
    <div className = 'menu-item'>
        <div className = 'content'>
            <h1 className = 'title'>
                {title}
            </h1>
        </div>
    </div>
);

export default MenuItem