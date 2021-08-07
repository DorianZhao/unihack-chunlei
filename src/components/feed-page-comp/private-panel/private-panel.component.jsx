import React from 'react';
import './private-panel.styles.scss';
import FeedList from '../private-feed-list/feed-list.component';

const PrivatePanel = () => (
    <div className = 'PrivatePanel'>
        <FeedList />
    </div>
);

export default PrivatePanel;