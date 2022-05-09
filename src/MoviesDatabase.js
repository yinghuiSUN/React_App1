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
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b95a398c6c65c248eab3893cd6e36e2b&sort_by=popularity.desc"
    )
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
    const { data } = this.state;

    return (
      <div className="App">
        <h1> liste des départements </h1>

        <table className="liste_departement">
          <tr>
            <th>Code</th>
            <th>Code Region </th>
            <th>Nom </th>
          </tr>

          {data.map((X) => (
            <tr key={X.id}>
              <td>{X.page}</td>
              <td>{X.result}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default DeppartmentsList;
