import React from 'react';
import Slider from 'react-slick';
import RelatedPropertiesItem from './RelatedPropertiesItem.jsx';

class RelatedProperties extends React.Component {
  static defaultProps = {
    sliderSettings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2
    },
    relatedProperties: [
      // bunch of dictionaries with data
    ]
  }

  render() {
    return (
      <div style={{ marginLeft:'15px', marginRight:'15px' }}>
        <h4>Related properties</h4>
        <Slider {...this.props.sliderSettings}>
          <div><RelatedPropertiesItem /></div>
          <div><RelatedPropertiesItem /></div>
          <div><RelatedPropertiesItem /></div>
          <div><RelatedPropertiesItem /></div>
          <div><RelatedPropertiesItem /></div>
          <div><RelatedPropertiesItem /></div>
          <div><RelatedPropertiesItem /></div>
          <div><RelatedPropertiesItem /></div>
        </Slider>
      </div>
    );
  }
}

export default RelatedProperties;
