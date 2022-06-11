import './App.css';
import React from 'react';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Extra from './Components/Extra';
import
{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
return(
  <>
  <Router>
  <Navbar title="Doja"/>
  <div className='container my-3'> 
     <Routes>
      <Route path='/about' element={<Extra title="About Us"/>}/>
      <Route path='/' element={ <Form er="Form"/> }/>
     </Routes>
  </div>
  </Router> 
  
  </>
);
}

export default App;
