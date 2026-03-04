import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function addPage() {

    const[formData, setpFormData] = useState({})

    function handleChange(e) {
    }

    async function handleSubmit(e) {
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
          
        </form>
        <Link to="/">Back to Main</Link>
      </fieldset> 
    </div>
  );
}