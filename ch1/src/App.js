import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './component/Home';
import Aboute from './component/Aboute';
import Content from './component/Content';
import Navbar from './component/Navbar';
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Post from './component/Post';
import Logout from './component/Logout';

function App() {
  let isLoggedIn = true;
  let data={
    'st':'user not logged in'
  }
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<Aboute/>}/>
    <Route path='/contact' element={<Content/>}/>
    <Route path='/post/:category' element={<Post/>}/>
    <Route path='/post/:category/:id' element={<Post/>}/>

<Route path='/logout' element={<Logout/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={isLoggedIn?<Dashboard/>:<Navigate to="/login" replace state={data}/> }/>

    <Route path="*" element={<h1>Error 404 Page not Found</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
