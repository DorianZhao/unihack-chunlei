import React from 'react';
import './fd-panel.styles.scss';
import SearchBox from '../../components/search-box/search-box.components';

const FdPanel = () => (
    <div className = 'FdPanel'>
        <SearchBox
            placeholder = 'search fundraisers'
            handleChange = {null}
        />
    </div>
);

export default FdPanel;