import React,{Component} from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
import WebsiteTitle from '../../components/website-title/website-title.component';
import AboutUs from '../../components/about-us/about-us.component';
import Header from '../../components/header/header.component';
import PrivDirectory from '../../components/feed-page-comp/private-directory/priv-directory.component';
import { userId } from '../../components/sign-in/sign-in.component';

class HomePage extends Component {
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
        <div className='homepage'>
        {header}
        <WebsiteTitle
            title = 'Pegasus慈善平台'
        />
        {directory}
        <AboutUs />
        </div>
      );
    }
};

export default HomePage;
