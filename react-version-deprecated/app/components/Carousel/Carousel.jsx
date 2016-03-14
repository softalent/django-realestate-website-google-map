import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/capitalize';

class Carousel extends React.Component {
  static defaultProps = {
    meta: {
      '__repr': {
        price: {
          '__prefix': '$'
        }
      }
    },
    data: {
      price: { total: 0 },
      photos: [],
      location: {
        zip_code: '', // eslint-disable-line camelcase
        state: '',
        city: '',
        address: ''
      }
    },
    activeImage: 0
  }

  render() {
    console.log('Carousel:', this.props);
    // generate images list
    const imagesList = this.props.data.photos.map(function(url, index) {
      const itemClass = (index === this.props.activeImage) ?
                        'item active' : 'item';
      return (
        <div className={itemClass} key={index}>
          <img src={url} className="item"
               style={{ height: 500, margin: '0 auto' }} />
        </div>
      );
    }, this);

    return (
      <div id="carousel-example-generic"
           className="carousel slide cover overlay
                      overflow-hidden margin-bottom-none
                      max-height-500" data-ride="carousel"
           style={{ padding: '0 15px' }}>
        <div className="ribbon-heading ribbon-primary h4
                        inline absolute left margin-none">
          {this.props.meta['__repr'].price['__prefix'] || '$'}
          {this.props.data.price.total.toLocaleString()}
        </div>
        <div className="carousel-inner" role="listbox">

          {imagesList}

          <div className="overlay overlay-bg-black">
            <div className="v-bottom">
              <div className="page-section">
                <h3 className="text-h3 text-overlay">
                  Call <a href="tel:18557892800" style={{ fontWeight: 660 }}>
                  (855) 789-2800</a> to see:
                </h3>
                <h1 className="text-h1 text-overlay"
                    style={{ textTransform: 'capitalize' }}>
                  {this.props.data.location.address}
                </h1>
                <p className="text-subhead text-overlay"
                   style={{ textTransform: 'capitalize' }}>
                  {this.props.data.location.city}
                  {', '}
                  {this.props.data.location.state}
                  {' '}
                  {this.props.data.location.zip_code}
                </p>
              </div>
            </div>
          </div>

          <a className="left carousel-control"
             href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"
                  aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control"
             href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"
                  aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
