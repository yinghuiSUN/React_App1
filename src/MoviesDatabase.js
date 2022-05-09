import React from "react";



class MoviesDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      database: {},
      click: false,
      filmChoisi: ""
    };
    this.affichageInfo = this.affichageInfo.bind(this);
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
  affichageInfo(film) {
    this.setState({
      click: true,
      filmChoisi: film
    });
  }

  render() {
    const { database, click, filmChoisi } = this.state;
  
    return (
      <div className="App">
        {!click && (
          <>
            <h1> liste des film </h1>
            <table className="moviesDatabase">
              <tr>
                <th>la date de sortir</th>
                <th>title de film</th>
              </tr>

              {database.results &&
                database.results.map((items) => (
                  <tr key={items.id}>
                    <td>{items.release_date}</td>
                    <td
                      value={filmChoisi}
                      onClick={() => this.affichageInfo(items)}
                    >
                      {items.title}
                    </td>
                  </tr>
                ))}
            </table>
          </>
        )}
        {click && (
          <>
            <p>title: {this.state.filmChoisi.title}</p> 
            <p>id: {this.state.filmChoisi.id}</p>
            <p>original language: {this.state.filmChoisi.original_language}</p>
            <p>overview: {this.state.filmChoisi.overview}</p>
            <p>vote average: {this.state.filmChoisi.vote_average}</p>
            <p>popularity: {this.state.filmChoisi.popularity}</p>
            
            <img src={"https://image.tmdb.org/t/p/w500"+this.state.filmChoisi.poster_path}></img>
                                 
          </>
        )}
      </div>
    );
  }
}

export default MoviesDatabase;
