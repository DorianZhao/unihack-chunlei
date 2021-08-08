import React,{Component} from 'react';
import './fdpage.styles.scss';
import Directory from '../../components/directory/directory.component'
import WebsiteTitle from '../../components/website-title/website-title.component';
import FdPanel from '../../components/fundraisers-page-comp/fundraisers-panel/fd-panel.component';
import Header from '../../components/header/header.component';

import { userId } from '../../components/sign-in/sign-in.component';
import PrivDirectory from '../../components/feed-page-comp/private-directory/priv-directory.component';

class FdPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
      let header;
      let directory;
      console.log(userId)
        if (userId == null) {
          header = <Header />
          directory = <Directory />;
        } else {
          directory = <PrivDirectory />;
        }
      return (
        <div className='FdPage'>
        {header}
        <WebsiteTitle
              title = '可资助对象'
        />
        {directory}
        <FdPanel />
        </div>
      );
    }
};

export default FdPage;
