import { Route, Routes } from "react-router-dom";
import './App.css'
import './index.css';

import MainPage from "../pages/MainPage.jsx"
import AddPage from "../pages/AddPage.jsx";
import EditPage from "../pages/EditPage.jsx";

function App() {

  return (
    <div>
      <Routes> 
        <Route path="/" element={<MainPage />} />
        <Route path="/AddPage" element={<AddPage />} />
        <Route path="/EditPage" element={<EditPage />} />
      </Routes>
    </div>

  )
}

export default App
