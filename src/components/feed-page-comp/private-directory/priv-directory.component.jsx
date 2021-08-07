import React from 'react';

import MenuItem from '../../menu-item/menu-item.component';

import './priv-directory.styles.scss';

class PrivDirectory extends React.Component {
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
        {
          title: '资助对象近况',
          id: 4,
          linkUrl: 'fundedChildren'
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

export default PrivDirectory;
