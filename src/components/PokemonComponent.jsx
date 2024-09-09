import React from "react";
import PokemonDetail from "./PokemonDetail";

export default class PokemonComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            pokemonName: ""
        }
    }
    handleClick = (e) => {
        console.log(this.state.pokemonName)

    }
    handleInputPokemon = (e) => {
        this.setState({
            pokemonName: e.target.value
        })
    }
    handleDataFromChildren = (data) => {
        console.log(data, "=> data dari children")
    }
    render() {
        return (
            <>
                <input type="text" onChange={e => this.handleInputPokemon(e)} />
                <button onClick={this.handleClick}>Change Pokemon</button>
                <PokemonDetail
                    namePokemon={this.state.pokemonName}
                    sendData={this.handleDataFromChildren}
                />
            </>
        )
    }
}