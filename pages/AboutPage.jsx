import { Link } from 'react-router-dom';
import backfuture from "../src/assets/images/backtothefuture.jpg"
import shawshank from "../src/assets/images/shawshank.jpg"
import privateryan from "../src/assets/images/savingprivateryan.jpg"
import matrix from "../src/assets/images/matrix.jpg"

export default function AboutPage() {

    return (
        <div className="displayimage">
            <h1>About Page</h1>
            <h2>This site is dedicated to movies and movie lovers. It helps you keep track of the films you’ve already watched and the ones you want to watch in the future.
                From the main page, you can easily add new movies, edit existing movies, or remove movies from your list. The goal of this site is to provide a simple and convenient way to organize your personal movie collection and watchlist.
            </h2>
            <br></br>
            <div className="images">
              <img src={backfuture} alt="Back to the Future" />
              <img src={shawshank} alt="Shawshank Redemption"/>
              <img src={privateryan} alt="Saving Private Ryan"/>
              <img src={matrix} alt="The Matrix"/>
            </div>
           <div>
             <Link to="/">Back to Main</Link>
           </div>
        </div>
    );
    
}