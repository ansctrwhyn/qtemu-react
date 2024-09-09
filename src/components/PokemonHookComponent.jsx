import { useEffect, useState } from "react"
import PokemonDetailHook from "./PokemonDetailHook"

export default function PokemonHookComponent() {
    const [pokemonName, setPokemonName] = useState("")

    const handlerClick = () => {
        console.log(pokemonName)
    }

    useEffect(() => {
        console.log("Test use effect")
    }, [pokemonName])

    return (
        <>
            <input type="text" onChange={e => setPokemonName(e.target.value)} />
            <button onClick={handlerClick}>Change Pokemon</button>
            <PokemonDetailHook pokemonName={pokemonName} heart={70} damage={50} level={"master"} />
        </>
    )
}