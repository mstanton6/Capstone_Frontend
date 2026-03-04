import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

export default function addPage() {

    const[formData, setformData] = useState({
        title: "",
        genre: "",
        year: "",
        rating: "",
        watched: false,
    });

    function handleChange(e) {
      if (e.target.type == 'checkbox'){
        setformData ({...formData, watched: e.target.checked})
      }
      else(
        setformData ({...formData, [e.target.name]: e.target.value})
      )
        
    }

    async function handleSubmit(e) {
       
        e.preventDefault();
        const url = "http://localhost:3001/api/movies"

        let addData = { ...formData }

        try {
            let response = await axios.post(url, addData);
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

    <div className="addform">
      <fieldset style={{ textAlign: "center" }}>
        <legend>Add a New Movie</legend>
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