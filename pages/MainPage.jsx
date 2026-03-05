import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Main() {

    const[movies, setMovies] = useState([])

    async function getMovies() {
        const url = "http://localhost:3001/api/movies"
        // fetch all the movies
        try {
            let response = await fetch(url);
            const movies = await response.json();
            setMovies(movies); // update state
        } catch (err) {
            console.error(err);
        }
    }

    async function deleteMovie (id, title) {

        await axios.delete(`http://localhost:3001/api/movies/${id}`);

        alert("The movie, " + title + " ,was Successfully Deleted")

        setMovies(m => {
             return m.filter((movie) => movie._id !== id)
               })

    }

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <h1>Movie Watchlist</h1>
            <Link to="/AddPage">Add Movie</Link>
            <br></br>
            <br></br>
            <table>
                <thead>
                    <tr>
                      <th>Title</th>
                      <th>Genre</th>
                      <th>Year</th>
                      <th>Rating</th>
                      <th>Watched</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {movies.map((movie) => (
                <tr  key={movie._id}>
                   <td>{movie.title}</td>
                   <td>{movie.genre}</td>
                   <td>{movie.year}</td>
                   <td>{movie.rating}</td>
                   <td>{movie.watched ? "Yes" : "No"}</td>
                   <td> <Link to="/EditPage" state={{ movie }}>Edit Movie</Link></td>
                   <td><button onClick={() => deleteMovie(movie._id, movie.title)}>Delete Movie</button></td>
                 </tr>
                )
                )}
                </tbody>
            </table>
        </div>
    );
}