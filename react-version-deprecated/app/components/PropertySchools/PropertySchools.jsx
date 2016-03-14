import React from 'react';

class PropertySchools extends React.Component {
  render() {
    console.log('PropertySchools->props', this.props);
    const tableNodes = this.props.data.data.schools.map(
      (item, index) => {
        return (
          <tr key={index}>
            <td style={{ textTransform: 'capitalize' }}>
              {item.name}
            </td>
            <td style={{ textTransform: 'capitalize'}}>{item.grades}</td>
            <td>
              {item.distance}
            </td>
          </tr>
        );
      }, this
    );
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Schools</h4>
        </div>
        <div className="panel-body">
          <table className="table">
            <tbody>
              <tr><th>School Name</th><th>Grades</th><th>Score</th></tr>
              {tableNodes}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PropertySchools;
