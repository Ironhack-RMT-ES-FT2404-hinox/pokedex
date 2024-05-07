import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PokemonDetails from './pages/PokemonDetails'
import Error from './pages/Error'

function App() {

  return (
    <>

      <Navbar /> 

      <div className='app-container'>

        <Sidebar />

        <div className='page'>
          <Routes>

            <Route path={"/"} element={ <Home />}/>
            <Route path={"/pokemon-details/:pokemonName"} element={ <PokemonDetails /> }/>


            {/* error handling routes */}
            <Route path={"*"} element={ <NotFound />}/>
            <Route path="/error" element={ <Error /> }/>

          </Routes>
        </div>
      
      </div>  

    </>
  )
}

export default App
