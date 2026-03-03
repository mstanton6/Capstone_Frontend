import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function addPage() {

    const[pageData, Setpagedata] = useState({})

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
            <input type="text"  name="title"  placeholder="Title..."    onChange={handleChange} value={pageData.title} required/>
            <br></br><br></br>
            Genre:
            <input type="text"  name="genre"  placeholder="Genre..."    onChange={handleChange} value={pageData.genre} />
            <br></br><br></br>
            Year:
            <input type="text"  name="year"    placeholder="Year..."    onChange={handleChange} value={pageData.year} />
            <br></br><br></br>
            Rating:
            <input type="text"  name="rating"  placeholder="Rating..."  onChange={handleChange} value={pageData.rating} />
            <br></br><br></br>
            Watched:
            <input type="checkbox"  name="watched" placeholder="Watched..." onChange={handleChange} value={pageData.watched} />            
          </label>

        </form>
      </fieldset>    

    </div>
  );
}