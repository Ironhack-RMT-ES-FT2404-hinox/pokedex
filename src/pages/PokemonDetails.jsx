import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'

import BeatLoader from "react-spinners/BeatLoader";

function PokemonDetails() {

  const navigate = useNavigate() // nos da una funcion navigate que nos permite redireccionar

  const params = useParams() // este es el objeto que tiene todos los parametros dinamicos
  console.log(params.pokemonName)

  //1. crear el estado para almacenar la data externa
  const [ details, setDetails ] = useState(null) 

  //2. usar el useEffect componentDidMount para hacer una llamada externa solo cuando el componente existe por primera vez
  useEffect(() => {
    setDetails(null) // para forzar la nueva animación al cambiar de pokemon

    //3. hacer la llamada a la API
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
    .then((respuesta) => {
      return respuesta.json()
    })
    .then((respuesta) => {
      console.log(respuesta)
      //4. almacenamos la data en el estado
      // setTimeout(() => {
        setDetails(respuesta)
      // }, 2000)
    })
    .catch((err) => {
      console.log(err)
      // redireccionar el usuario a la pagina "/error"
      navigate("/error")
    })

  }, [params.pokemonName]) // cada vez que ese parametro dinamico cambie, vuelve a llamar a la API para los detalles de ese pokemon


  //5. gestor de espera
  if (details === null) {
    // return <h3>... buscando pokemon</h3>
    return <BeatLoader size={20} margin={5} color="blue"/>
  }

  //6. renderizar la data del estado
  return (
    <div>
      
      <h3>Detalles de Pokemon</h3>

      <h4>{details.name}</h4>

      <div>

        <p>Número: {details.id}</p>
        <p>Altura: {details.height/10} m</p>

        {/* LISTADO CON TIPOS */}

        <img src={details.sprites.front_default} alt="pokemon-image" />

      </div>

    </div>
  )
}

export default PokemonDetails