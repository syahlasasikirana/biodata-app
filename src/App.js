import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BiodataList from './pages/BiodataList';
import BiodataForm from './pages/BiodataForm';



class App extends React.Component{
  render(){
    return(
      <Router>
        <Routes>
          <Route path="/" element={<BiodataList />} />
          <Route path="/create-biodata" element={<BiodataForm />} />
          <Route path="/edit-biodata/:id" element={<BiodataForm />} />
        </Routes>
      </Router>
    )
  }
}

export default App;
