import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    const linkId = '1';
    return (
      <div className="st-content-inner padding-top-none">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">Page contetnt</h4>
          </div>
          <div className="panel-body">
            <ul>
              <li>
                <Link to={`/${linkId}/ca/palo-alto/address-here`}>
                  Test property 1
                </Link>
              </li>
              <li>
                <Link to={`/${linkId}/ca/buffalo/address-here`}>
                  Test property 2
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
