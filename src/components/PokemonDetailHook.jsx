import { useState } from "react"

export default function PokemonDetailHook({ pokemonName, heart, damage, level }) {

    console.log(pokemonName);
    console.log(heart);
    console.log(damage);
    console.log(level);
    return (
        <>
            <h1>{pokemonName} ini children</h1>
        </>
    )
}