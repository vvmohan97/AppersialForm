
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Homedummy } from './homedummy';
import { HomeNew } from './HomeNew';
import { Login } from './Login';
import { Manager } from './Manager';
import { ManagerNew } from './ManagerNew';
import { Managersearch } from './Managersearch';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Link to={'/'}/>
      <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/homenew' element={<HomeNew/>}></Route>
        <Route path='/homevalid' element={<Homedummy/>}></Route>
        <Route path='/managernew' element={<ManagerNew/>}></Route>
        <Route path='/managersearch' element={<Managersearch/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
