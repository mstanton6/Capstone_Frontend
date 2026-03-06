import { Link , useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from "axios";

export default function editPage() {

        const[formData, setformData] = useState({
            title: "",
            genre: "",
            year: "",
            rating: "",
            watched: false,
        });

  const location = useLocation();
  const {movie} = location.state || {} 

  useEffect(() => {
    if (movie) setformData(movie);
  }, []);


    // take care of the changes in the form
    function handleChange(e) {
      if (e.target.type == 'checkbox'){
        console.log("Checkbox changed:", e.target.checked);
        setformData ({...formData, watched: e.target.checked})
      }
      else(
        setformData ({...formData, [e.target.name]: e.target.value})
      )
        
    }

    // take care of submits in the form
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitting formData:", formData);
        const url = `http://localhost:3001/api/movies/${movie._id}`;

        let editData = { ...formData }

        try {
            let response = await axios.patch(url, editData);
            const movies = response.data;
            setformData ({ title: "",
                           genre: "",
                           year: "",
                          rating: "",
                          watched: false,})
        } catch (err) {
          console.error(err);
        } 
    }

  return (
// a form for editing movies
<div className="addform">
      <fieldset style={{ textAlign: "center" }}>
        <legend>Edit a New Movie</legend>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text"    name="title"  placeholder="Title..."    onChange={handleChange} value={formData.title} required/>
            <br></br><br></br>
            Genre:
            <input type="text"     name="genre"  placeholder="Genre..."    onChange={handleChange} value={formData.genre} />
            <br></br><br></br>
            Year:
            <input type="number"     name="year"    placeholder="Year..."    onChange={handleChange} value={formData.year} />
            <br></br><br></br>
            Rating:
            <input type="text"     name="rating"  placeholder="Rating..."  onChange={handleChange} value={formData.rating} />
            <br></br><br></br>
            Watched:
            <input type="checkbox"  name="watched" placeholder="Watched..." onChange={handleChange} checked={formData.watched} />            
          </label>
            <br></br>
            <button type = "submit">Submit</button>
        </form>
        <Link to="/">Back to Main</Link>
      </fieldset> 
    </div>
  );
}