import { Link } from 'react-router-dom';
import backfuture from "../src/assets/images/backtothefuture.jpg"
import shawshank from "../src/assets/images/shawshank.jpg"
import privateryan from "../src/assets/images/savingprivateryan.jpg"
import matrix from "../src/assets/images/matrix.jpg"

export default function AboutPage() {

    return (
        <div className="displayimage">
            <h2>This is the About Page. A young man (Michael J. Fox) is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his friend, Dr. Emmett Brown (Christopher Lloyd),
                 and must make sure his high-school-age parents unite in order to save his own existence. Doc Brown's iconic "Roads? Where we're going, we don't need roads!" and Marty's "Great Scott!" or "This is heavy!", along with George McFly's "Nobody calls me chicken!" and the hilarious "Make like a tree and get outta here!". Key lines also involve 1.21 gigawatts, the DeLorean time machine, 
                 and Marty's reactions to his parents' romance, showcasing memorable moments from the trilogy </h2>
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