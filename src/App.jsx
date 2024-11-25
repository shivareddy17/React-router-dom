import Home from './Home'
import Login from './Login'
import Contact from './Contact'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import About,{Order,Profile} from './about'
 
function Headder(){
  return (<>
        <ul>
      <li> <Link to={"/"}> Home</Link> </li>
      <li> <Link to={"/about"}> About</Link> </li>
      <li> <Link to={"/contact"}> Contact</Link> </li>
      <li> <Link to={"/login"}> Login</Link> </li>
        </ul>
  </>)
}

function App() {

  return (
    <>
    <BrowserRouter>
    <Headder></Headder>
    <h2>This is Routes</h2>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}>
       <Route path='order' element={<Order></Order>}></Route>
       <Route path='profile' element={<Profile/>}></Route>
       </Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
