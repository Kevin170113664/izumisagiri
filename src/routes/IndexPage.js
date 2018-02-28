import React from 'react';
import {connect} from 'dva';
import './IndexPage.css';
import {Carousel} from 'antd';
import image1 from '../assets/moe/1.jpg';
import image2 from '../assets/moe/2.jpg';
import image3 from '../assets/moe/3.jpg';
import image4 from '../assets/moe/4.jpg';
import {emojiImage} from '../utils/emojiImageMapping';

export class IndexPage extends React.Component {

  constructor() {
    super();

    this.state = {
      emojiIndex: Date.now() % 30
    };

    this.emojiClickHandler = ::this.emojiClickHandler
  }

  emojiClickHandler() {
    let newEmojiIndex = Date.now() % 30;
    while (newEmojiIndex === this.state.emojiIndex) {
      newEmojiIndex = Date.now() % 30
    }

    this.setState({emojiIndex: newEmojiIndex});
  };

  render() {


    const emojiTodayStyle = {textAlign: 'center', margin: '2em auto'};
    let emojiIndex = Date.now() % 30;

    const imageStyle = {width: '400px'};
    const carouselContainerStyle = {width: '400px', textAlign: 'center', margin: '2em auto', display: 'none'};

    const getTodayEmoji = () => {
      return emojiImage[emojiIndex]
    };

    return ([
      <div className="emoji-today" style={emojiTodayStyle} key="emoji">
        <a onClick={this.emojiClickHandler}>
          <img alt="" src={getTodayEmoji()} className='emoji'/>
        </a>
      </div>,
      <div className='normal' style={carouselContainerStyle} key="carousel">
        <Carousel autoplay>
          <div className="block1"><img alt="" src={image1} style={imageStyle} className='image1'/></div>
          <div className="block2"><img alt="" src={image2} style={imageStyle} className='image2'/></div>
          <div className="block3"><img alt="" src={image3} style={imageStyle} className='image3'/></div>
          <div className="block4"><img alt="" src={image4} style={imageStyle} className='image4'/></div>
        </Carousel>
      </div>
    ]);
  }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
