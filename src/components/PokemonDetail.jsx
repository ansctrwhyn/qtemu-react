import React from "react";
import PropTypes from "prop-types"

export default class PokemonDetail extends React.Component {
    handleLifting = () => {
        let { sendData } = this.props
        console.log(sendData('BFLP'))
    }
    render() {
        return (
            <>
                {/* <h1>This is component children</h1> */}
                <h1 id="pokemon-detail">{this.props.namePokemon}</h1>
                <button onClick={this.handleLifting}>Cek data</button>
            </>
        )
    }
}

PokemonDetail.propTypes = {
    namePokemon: PropTypes.string
    // namePokemon: PropTypes.oneOf(['Pikachu', 'Bulbasaur'])
}