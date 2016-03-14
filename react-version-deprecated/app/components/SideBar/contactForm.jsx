import React from 'react';
import { reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.phoneNumber) {
    errors.age = 'Required';
  }
  return errors;
};

class ContactForm extends React.Component {
  render() {
    const {
      fields: { fullName, contactPhone, email },
      handleSubmit, submitting
    } = this.props;
    return (
      <formi onSubmit={handleSubmit}>
        <div className="form-group form-control-default required">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" placeholder="Your Full Name"
                 ref="fullName" {...fullName}
                 className="form-control" id="fullname" />
        </div>
        <div className="form-group form-control-default required">
          <label htmlFor="phone">Phone</label>
          <input type="text" placeholder="Contact Phone"
                 ref="contactPhone" {...contactPhone}
                 className="form-control" id="phone" />
        </div>
        <div className="form-group form-control-default required">
          <label htmlFor="email">Email Address</label>
          <input type="text" placeholder="Enter your Email"
                 ref="email" {...email}
                 className="form-control" id="email" />
        </div>
        <button type="submit" disabled={submitting}
                className="btn btn-primary">
          Submit
        </button>
        {' '}
        <a data-toggle="sidebar-menu" className="btn btn-default"
           href="#sidebar-agent">
          <i className="fa fa-times fa-fw" />Cancel
        </a>
      </form>
    );
  }
}

export default reduxForm({
  form: 'requestDetails',
  fields: ['fullName', 'phoneNumber', 'email'],
  validate
})(ContactForm);
