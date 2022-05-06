import React from "react";

class DeppartmentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearcheValue: "",
      data: []
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
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

  //fonction handleChangeInput
  handleChangeInput(e) {
    const { value } = e.target;
    this.setState({
      inputSearcheValue: value
    });
  }

  render() {
    const { data, inputSearcheValue } = this.state;
    const departementList = data.filter(
      (dep) => dep.nom.toLowerCase().indexOf(inputSearcheValue) !== -1
    );

    return (
      <div className="App">
        <h1> liste des départements </h1>

        <div className="recherche_departement">
          <form className="filter_departement">
            <label for="departement"> filtrer par nom </label>

            <input
              id="departement"
              type="text"
              name="departement"
              value={inputSearcheValue}
              onChange={this.handleChangeInput}
            />
          </form>
        </div>

        <table className="liste_departement">
          <tr>
            <th>Code</th>
            <th>Code Region </th>
            <th>Nom </th>
          </tr>

          {departementList.map((X) => (
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
