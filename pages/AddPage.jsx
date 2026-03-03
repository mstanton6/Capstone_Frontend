import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function addPage() {

    const[pageData, Setpagedata] = useState({})

    function handleChange(e) {
    }

    async function handleSubmit(e) {
    }

  return (

    <div className="createForm">
      <fieldset style={{ textAlign: "center" }}>
        <legend>Add a New Movie</legend>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text"  name="title" placeholder="Title..." onChange={handleChange} value={pageData.title} required/>
          </label>

        </form>
      </fieldset>

    </div>
  );
}