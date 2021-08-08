import React from 'react' ;
import './about-us.styles.scss';
import Cover from './cover2.jpg';

const AboutUs = () => (
    <div className= 'about-us'>
        <div className = 'background-image' style={{backgroundImage: `url(${Cover})`}}>
            <h1 className='content-text'>
             欢迎来到Pegasus公益平台!<br/><br/>这是一个旨在将公益资助透明化，社交化的慈善平台。<br/><br/> 在这里，您不仅可以浏览所有需要帮助的儿童，查看他们的需求，决定是否要进行捐款，<br/>您还可以像浏览社交网站一样，以时间为轴查看自己帮助过的对象所反馈的生活近况，在未来还可以进行互动。<br/><br/>我们兼具互联网慈善平台的统计功能，使您可以在平台上查看您过去和现在所有的捐款记录和资助对象近况。<br/><br/>我们相信，促进资助人与被资助人之间的互动以及反馈，比如当资助人能知道自己捐的款项的去向以及资助的儿童的生活近况，并且他们得知因为他们的捐款孩子的生活变得更好后，他们更愿意去捐款，帮助更多有需要的孩子。<br/>
            </h1>
        </div>
  </div>
);

export default AboutUs
