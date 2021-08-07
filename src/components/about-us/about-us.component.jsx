import React from 'react' ; 
import './about-us.styles.scss';
import Cover from './cover.jpg';

const AboutUs = () => (
    <div className= 'about-us'>
        <div className = 'background-image' style={{backgroundImage: `url(${Cover})`}}>
            <h1 className='content-text'>
                这是一个让公益捐款更加公开透明化的一个平台。在这里，您可以浏览所有需要帮助的对象，并查看他们的需求，决定是否要进行捐款。平台的每一个用户都可以在登录后查看自己曾经捐款帮助过的对象，以及捐款用途。我们将会和各大公益慈善组织合作，整合资源，使您可以在平台上查看您过去和现在所有的捐款记录和资助对象近况。
            </h1>
        </div>
  </div>
);

export default AboutUs