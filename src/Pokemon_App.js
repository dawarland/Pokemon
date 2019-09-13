import React from 'react';
import './App.css';
import PokeData from './data.json';
import PokeFormSearch from "./PokeFormSearch";
import PokeList from "./PokeList";
import PokeResult from "./PokeResult";
//SPOT
class Pokemon_App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            changedSearch: '',
            listPoke: [],
            pokemonResult: [],
            allPokemon: PokeData,
            isLoad: false
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState(({ [name]: value })  );

        if(this.state.changedSearch.length >= 2){
            var newItems = PokeData.filter( suggestion => suggestion.name.includes(this.state.changedSearch));
            this.setState(state => ({ listPoke: newItems } ));
        }
    };

    handleClick = (event) => {
        var value = event.target.value;
        console.log("clique sur " + event.target.value);
        //this.setState(state => ({ pokemon: value })  );
        //fetch(value)
        fetch("https://pokeapi.co/api/v2/pokemon/10084/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(state => ({pokemon:result}) );
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        //createPokemon(value);
        event.preventDefault();
    };

    render() {
        return (
            <div className="margin">
                <PokeFormSearch word={this.state.changedSearch} handleChange={this.handleChange}/>
                <PokeList list={this.state.listPoke} handleClick={this.handleClick}/>
                <PokeResult pokemon={this.state.pokemon} />
            </div>
        );
    }
}

export default Pokemon_App;