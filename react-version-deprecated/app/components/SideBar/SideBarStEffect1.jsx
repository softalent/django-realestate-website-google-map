import React from 'react';
import { connect } from 'react-redux';
import { sendPropertyDetailsRequest } from '../../redux/modules/property';
/* import ContactForm from './contactForm.jsx'; */

class SideBarEffect1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        fullName: '',
        contactPhone: '',
        email: ''
      }
    };
  }

  handleRequestSubmit(event) {
    event.preventDefault();

    const fullName = this.refs.fullName.value.trim();
    const contactPhone = this.refs.contactPhone.value.trim();
    const email = this.refs.email.value.trim();

    const requestBody = {
      name: fullName,
      phone: contactPhone,
      email: email
    };

    const errors = {};
    if (!fullName) {
      errors.fullName = 'Required';
    }
    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!contactPhone) {
      errors.contactPhone = 'Required';
    }

    this.setState({ errors: errors });
    this.props.dispatch(
      sendPropertyDetailsRequest(JSON.stringify(requestBody))
    );
    console.log('Submit form:', requestBody);
  }

  resetForm() {
    console.log('Reset Form');
    this.setState(
      {
        errors: { fullName: '', contactPhone: '', email: '' }
      }
    );
  }

  render() {
    console.log('SideBarEffect1->props:', this.props);

    const errorFullName = (
      this.state.errors.fullName ?
      <label>{this.state.errors.fullName}</label> : '');
    const errorContactPhone = (
      this.state.errors.contactPhone ?
      <label>{this.state.errors.contactPhone}</label> : ''
    );
    const errorEmail = (
      this.state.errors.email ?
      <label>{this.state.errors.email}</label> : ''
    );

    return (
      <aside className="sidebar right sidebar-size-xs-1
                        sidebar-size-lg-48pc sidebar-size-40pc
                        sidebar-offset-0 sidebar-skin-white"
             id="sidebar-agent" data-overlay="true">
        <div data-scrollable style={{ paddingTop: 20 }}>
          <h3 className="category">Request Showing</h3>
          <div className="sidebar-block">
            <div className="row">
              <div className="col-lg-8">
                <form>
                  <div className="form-group form-control-default required">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" placeholder="Your Full Name"
                           ref="fullName"
                           defaultValue={this.state.errors.fullName}
                           className="form-control" id="fullname" />
                    {errorFullName}
                  </div>
                  <div className="form-group form-control-default required">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" placeholder="Contact Phone"
                           ref="contactPhone"
                           className="form-control" id="phone" />
                    {errorContactPhone}
                  </div>
                  <div className="form-group form-control-default required">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter your Email"
                           ref="email"
                           className="form-control" id="email" />
                    {errorEmail}
                  </div>
                  <button type="submit"
                          onClick={this.handleRequestSubmit.bind(this)}
                          className="btn btn-primary">
                    Submit
                  </button>
                  {' '}
                  <a data-toggle="sidebar-menu" className="btn btn-default"
                     href="#sidebar-agent" onClick={this.resetForm.bind(this)}>
                    <i className="fa fa-times fa-fw" />Cancel
                  </a>
                </form>
              </div>
              <div className="col-md-4 visible-lg text-center">
                <div className="profile">
                  <h4 className="sidebar-heading">See This Property</h4>
                </div>
                <ul>
                  <li><a href="tel:18557892800">(855) 789-2800</a></li>
                  <li>
                    <a href="#" className="sidebar-link">
                      contact@seethisproperty.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

function stateToProps(state) {
  return {
    loaded: state.propertyDetails.get('loaded'),
    meta: state.propertyDetails.toJS().data.meta,
    data: state.propertyDetails.toJS().data.data
  };
}

export default connect(stateToProps)(SideBarEffect1);
