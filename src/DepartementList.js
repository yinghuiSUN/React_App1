import React from "react";

class DeppartmentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://geo.api.gouv.fr/departements")
      .then((data) => data.json())
      .then((dataDepartement) => {
        this.setState({
          data: dataDepartement
        });
      });
  }
  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <h1> liste des départements </h1>
        <table className="liste_dpt">
          <tr>
            <th>Code</th>
            <th>Code Region </th>
            <th>Nom </th>
          </tr>

          {data.map((X) => (
            <tr key={X.id}>
              <td>{X.code}</td>
              <td>{X.codeRegion}</td>
              <td>{X.nom}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default DeppartmentsList;
