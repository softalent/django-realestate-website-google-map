import React from 'react';

class RelatedPropertiesItem extends React.Component {
  static defaultProps = {
    image: 'images/photodune-195203-houses-xs.jpg',
    rightRibbon: 'For Sale',
    title: 'Something to sale',
    description: 'super mega property',
    price: '$28,000,000',
    bedrooms: 5
  }

  render() {
    return (
      <div className="item" style={{ margin: 2 }}>
        <div className="panel panel-default relative">
          <div className="ribbon-heading text-h5 ribbon-primary
                          inline margin-none left absolute">
            {this.props.rightRibbon}
          </div>
          <div className="cover hover overlay margin-none">
            <img src={this.props.image}
                 alt="location" className="img-responsive" />
            <a href="#" className="overlay overlay-full
                                   overlay-bg-black overlay-hover">
              <span className="v-center">
                <span className="btn btn-circle btn-white">
                  <i className="fa fa-eye" />
                </span>
              </span>
            </a>
          </div>
          <div className="panel-body">
            <h4 className="margin-v-0-5">{this.props.title}</h4>
            <p>{this.props.description}</p>
            <span className="label label-grey-100">{this.props.price}</span>
            <i className="small fa fa-fw icon-bed" data-toggle="tooltip"
               data-title="{this.props.bedrooms}" />
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedPropertiesItem;
