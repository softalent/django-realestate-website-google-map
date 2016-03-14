/* jslint: disable */
import React from 'react';
import {
  TopNav, Footer, SideBarEffect0, SideBarEffect1
} from '../components';

class App extends React.Component {
  render() {
    const sideBar0 = (this.props.params.id !== undefined) ?
                     <SideBarEffect0 /> : '';
    const sideBar1 = (this.props.params.id !== undefined) ?
                     <SideBarEffect1 /> : '';

    return (
      <div className="st-content-inner padding-top-none">
        {sideBar0}
        {sideBar1}
        <TopNav />
        <div className="st-pusher">
          <div className="st-content">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
