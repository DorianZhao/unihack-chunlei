import React,{Component} from 'react';
import './reportpage.styles.scss';
import Directory from '../../components/directory/directory.component'
import WebsiteTitle from '../../components/website-title/website-title.component';
import Header from '../../components/header/header.component';
import { userId } from '../../components/sign-in/sign-in.component';
import PrivDirectory from '../../components/feed-page-comp/private-directory/priv-directory.component';

class ReportPage extends Component {
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
        <div className='ReportPage'>
        {header}
        <WebsiteTitle
              title = '项目统计'
        />
        {directory}
        </div>
      );
    }
};

export default ReportPage;
