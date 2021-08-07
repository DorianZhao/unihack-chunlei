import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'ABOUT US',
          id: 1,
          linkUrl: ''
        },
        {
          title: 'ALL FUNDRAISERS',
          id: 2,
          linkUrl: 'fundraisers'
        },
        {
          title: 'FACTS AND REPORTS',
          id: 3,
          linkUrl: 'reportpage'
        },

      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;