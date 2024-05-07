import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//1. Como recibimos informacion de una API? CHECK
//2. En que momento hacemos la llamada a la API? CHECK
//3. como gestionamos promesas en JS? CHECK
//4. que hacemos con la data que recibimos de la API? CHECK
//5. Como renderizamos esa informacion?

function Sidebar() {

  // tenemos que llamar a la API de pokemon para que nos de la lista de los nombres de los pokemon: "https://pokeapi.co/api/v2/pokemon"

  const [ receivedPokemonNames, setReceivedPokemonNames ] = useState([]) // null indica que aun no tenemos la data

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151") // PROMESA
    .then((response) => {
      return response.json() // tenemos que convertir en json, esto solo ocurren con fetch
    })
    .then((response) => {
      // puede haber tardado 0.2s
      console.log(response)
      setReceivedPokemonNames(response.results)
    })
    .catch((error) => {
      console.log(error)
    })

  }, []) // componentDidMount

  return (
    <nav className="sidebar">
      
      {/* example of 3 links */}
        {/* <Link to={"/"}>bulbasaur</Link>
        <Link to={"/"}>charmander</Link>
        <Link to={"/"}>squirtle</Link> */}

      {receivedPokemonNames.map((eachPokemon) => {
        return (
          <Link to={`/pokemon-details/${eachPokemon.name}`}>{eachPokemon.name}</Link>
        )
      })}

    </nav>
  )
}

export default Sidebar