import React from 'react';
import './fd-panel.styles.scss';
import SearchBox from '../search-box/search-box.components';
import FdList from '../fundraisers-list/fd-list.component';

const FdPanel = () => (
    <div className = 'FdPanel'>
        <FdList />
    </div>
);

export default FdPanel;
