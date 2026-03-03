import { useState, useEffect } from 'react'

export default function Main() {

    const[movies, setMovies] = useState([])

    async function getMovies() {
        // fetch all the movies
        const url = "http://localhost:3001/api/movies"

        try {
            let response = await fetch(url);
            const movies = await response.json();
            console.log(movies);
            setMovies(movies);
        } catch (err) {
            console.error(err);
        }
    }

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <h1>Movie Watchlist</h1>
            <table>
                <thead>
                    <tr>
                      <th>title</th>
                      <th>genre</th>
                      <th>year</th>
                      <th>rating</th>
                      <th>watched</th>
                    </tr>
                </thead>
                <tbody>
                {movies.map((movie) => (
                <tr  key={movie._id}>
                   <td>{movie.title}</td>
                   <td>{movie.genre}</td>
                   <td>{movie.year}</td>
                   <td>{movie.rating}</td>
                   <td>{movie.watched}</td>
                 </tr>
                )
                )}
                </tbody>
            </table>
        </div>
    );
}