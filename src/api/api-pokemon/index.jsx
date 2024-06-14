import React, { useState } from "react";
import axios from "axios";

export default function GetPokemon() {
    
    const [pokedex, setPokedex] = useState(null)
    const [pokemon, setPokemon] = useState(null)


    async function handlePokemon(){
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            setPokedex(response.data)
            console.log(response.data)
        } catch (error){
            console.log(error)
        }
    }
    
    return(
        <div className="flex flex-col gap-10">
            <h1 className="mt-2 text-center">Lista de Pokemons</h1>
            <input placeholder="Digite o nome do pokemon" className="w-96 p-2 border-1 border-solid border-black-800" onChange={(e) => setPokemon(e.target.value)} type="text" />
            <button onClick={handlePokemon} className="p-1 border-2 border-solid border-black-800 items-center justify-center">Buscar Pokemon</button>
            {
                pokedex &&
                        <div className="flex flex-col border-solid w-50 h-50">
                            <p className="text-center">{pokedex.name}:</p>
                            <img src={pokedex.sprites.front_default} alt="" />
                            <p className="text-center">shiny:</p>
                            <img src={pokedex.sprites.front_shiny} alt="" />
                        </div>            
            }
        </div>
    )
}