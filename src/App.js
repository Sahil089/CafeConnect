import React from 'react';
import './App.css';
import Home from './pages/Home';
import Main from './pages/Main';
import Map from './pages/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from './components/Preloader';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import "./styles/Middle.css"



function App() {
  return (

    <div>
          <Preloader/>
<BrowserRouter>
<Routes>
  <Route index element={<Home/>}/>
  <Route path="/Map" element={<Map/>}/>
  <Route path="/Main" element={<Main/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
