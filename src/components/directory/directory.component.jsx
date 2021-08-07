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
          id: 1
        },
        {
          title: 'ALL FUNDRAISERS',
          id: 2
        },
        {
          title: 'FACTS AND REPORTS',
          id: 3
        },

      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, id}) => (
          <MenuItem key={id} title={title} />
        ))}
      </div>
    );
  }
}

export default Directory;