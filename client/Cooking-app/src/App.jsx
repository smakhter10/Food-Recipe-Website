import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Recipes from './Pages/Recipes'
import CookingTips from './Pages/CookingTips'
import AboutUs from './Pages/AboutUs'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import axios from 'axios'
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from './UserContext'
import AddRecipe from './Pages/AddRecipe'
import RecipePost from './Pages/RecipePost'

axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true


function App() {

  return (
    <>
    <UserContextProvider>
      <Router>
        <Navbar />
        <Toaster position="top-center" toastOptions={{duration:2000}} />
        <Routes>
          <Route exact path='/' element= { <Home /> } />
          <Route exact path='/recipes' element= {<Recipes /> } />
          <Route exact path='/cookingtips' element= {<CookingTips />} />
          <Route exact path='/aboutus' element= { <AboutUs /> } />
          <Route exact path='/login' element= { <Login /> } />
          <Route exact path='/signup' element= { <Signup /> } />
          <Route exact path='/addrecipe' element= { <AddRecipe /> } />
          <Route exact path='/recipe/:id' element= { <RecipePost /> } />
        </Routes>
      </Router>
      </UserContextProvider>
    </>
  )
}

export default App
