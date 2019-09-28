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
        this.NBTYPES=19; //Nombre de type dans pokemon
    }

    /*componentDidMount() {
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
        this.state.pokemonTypesResult.map( (item) => console.log(item) );
    }*/

    componentDidMount() {
        var sumSpe=0, sumSpD=0, sumSpA=0, sumDef=0, sumAtt=0, sumHp=0 ;
        var cpt=0;
        for(var i=1; i< this.NBTYPES; i++) {
            fetch("https://pokeapi.co/api/v2/type/"+i)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState(state => ({add: result}),
                            () => {
                                result.pokemon.map( (pokemon) => {
                                        //console.log(pokemon.pokemon.url)
                                        fetch(pokemon.pokemon.url)
                                            .then(res => res.json())
                                            .then(
                                                (result) => {
                                                    /*result.stats.map(
                                                        (item) => {item["base_stat"]console.log(item)}
                                                    )*/
                                                    sumSpe += result.stats[0].base_stat;
                                                    sumSpD += result.stats[1].base_stat;
                                                    sumSpA += result.stats[2].base_stat;
                                                    sumDef += result.stats[3].base_stat;
                                                    sumAtt += result.stats[4].base_stat;
                                                    sumHp += result.stats[5].base_stat;
                                                    cpt++;
                                                },
                                                (error) => {
                                                    this.setState({
                                                        isLoaded: true,
                                                        error
                                                    });
                                                }
                                            )
                                    }
                                /*$(
                                fetch(result.pokemon)
                                    .then(res => res.json())
                                    .then(
                                    )
                            )*/)
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                );

            var newList = {sumSpe, sumSpD, sumSpA, sumDef, sumAtt, sumHp}
            console.log(newList);
        }
        this.state.pokemonTypesResult.map( (item) => console.log(item) );
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState(({ [name]: value }), () => {
            if(this.state.changedSearch.length >= 2){
                var newItems = PokeData.filter( suggestion => suggestion.name.includes(this.state.changedSearch));
                this.setState(state => ({ listPoke: newItems } ));
            }
        }  );

    };

    handleClick = (event) => {
        const {href} = event.target;
        this.state.pokemonTypesResult.map( (item) => console.log(item) );
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