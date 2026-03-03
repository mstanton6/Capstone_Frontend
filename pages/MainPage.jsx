import { useState, useEffect } from 'react'

export default function Main() {

    async function getMovies() {
        // fetch all the movies
        const url = "http://localhost:3001/api/movies"

        try {
            let response = await fetch(url);
            const data = response.json();
            console.log(data);
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
            {/* <Table> </Table> */}
        </div>
    );
}