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
            pokemonResult: '',
            pokemonTypesResult: [],
            allPokemon: PokeData,
            isLoad: false
        };
        this.NBTYPES=12; //Nombre de type dans pokemon
    }

    componentDidMount() {
        for(var i=1; i< this.NBTYPES; i++) {
            fetch("https://pokeapi.co/api/v2/type/"+i)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState(state => ({add: result}),
                            () => { (this.state.pokemonTypesResult[i]=result ) });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                );
        }
        this.state.pokemonTypesResult.map( (item) => console.log(item) )
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
        const {href} = event.target;
        console.log("clique sur " + href);
        fetch(href)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(state => ({pokemonResult:result}) );
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        event.preventDefault();
    };

    render() {
        return (
            <div className="margin">
                <PokeFormSearch word={this.state.changedSearch} handleChange={this.handleChange}/>
                <PokeList list={this.state.listPoke} handleClick={this.handleClick}/>
                <PokeResult pokemon={this.state.pokemonResult} pokemonType={this.state.pokemonTypesResult} />
            </div>
        );
    }
}

export default Pokemon_App;