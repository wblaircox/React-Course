import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {};

  render() {
    return (
      <div>
        <h1>Movie Phone!</h1>
        <ul>
          {this.state.movies.map(tag => (
            <li>{tag.title}</li>
          ))}
        </ul>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col" />
            </tr>
          </thead>
          {this.state.movies.map(tag => (
            <tbody key={tag._id}>
              <tr>
                <th scope="row">{tag.title}</th>
                <td>{tag.genre.name}</td>
                <td>{tag.numberInStock}</td>
                <td>{tag.dailyRentalRate}</td>
                <td>
                  <button className="btn btn-warning">Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Movies;
