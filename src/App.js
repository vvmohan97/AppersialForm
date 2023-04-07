
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Login } from './Login';
import { Manager } from './Manager';
import { Managersearch } from './Managersearch';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Link to={'/'}/>
      <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/manager' element={<Manager/>}></Route>
        <Route path='/managersearch' element={<Managersearch/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
