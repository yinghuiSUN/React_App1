import React from "react";

class MoviesDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      database: {}
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b95a398c6c65c248eab3893cd6e36e2b&sort_by=popularity.desc"
    )
      .then((data) => data.json())
      .then((moviesDatabase) => {
        this.setState({
          database: moviesDatabase
        });
      });
  }

  render() {
    const { database } = this.state;

    return (
      <div className="App">
        <h1> liste des movies </h1>

        <table className="moviesDatabase">
          <tr>
            <th>A</th>
          </tr>

          {database.results &&
            database.results.map((items) => (
              <tr key={items.id}>
                <td>{items.title}</td>
              </tr>
            ))}
        </table>
      </div>
    );
  }
}

export default MoviesDatabase;
