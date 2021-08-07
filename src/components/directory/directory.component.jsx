import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: '关于我们',
          id: 1,
          linkUrl: ''
        },
        {
          title: '可资助的儿童',
          id: 2,
          linkUrl: 'fundraisers'
        },
        {
          title: '项目统计',
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
