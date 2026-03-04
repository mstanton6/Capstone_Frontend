import { useLocation } from 'react-router-dom';

export default function editPage() {

  const location = useLocation();
  const {movie} = location.state || {} 

  console.log('Movie title to edit is: ' + movie.title)

  return (
    <div>
      <h1>This is the Edit Page</h1>
    </div>
  );
}