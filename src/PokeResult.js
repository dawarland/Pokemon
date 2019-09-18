import React from 'react';
import './App.css';

class PokeResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            typeList: []
        }
    }

    render() {
        return (this.props.pokemon)
            ? (<section>
                <div>
                    <img src={this.props.pokemon.sprites["front_default"]} alt="img"/>
                    <h1>{this.props.pokemon.name}</h1>
                </div>
                <div>
                    <h2>Types :</h2>
                    <ul>
                        {this.props.pokemon.types.map(
                            (item) =>
                                <li>{item.type["name"]}</li>
                        )}
                    </ul>
                </div>
                <div>
                    <h2>Base Stats</h2>
                        {this.props.pokemon.stats.map(
                            (item) =>
                                <div>
                                    <span>{item["base_stat"]}</span>
                                    <span>{item.stat["name"]}</span>
                                     <div style={{width: item["base_stat"] + 'px',
                                              border: '1px solid black'}} ></div>
                                </div>
                            )}
                </div>
                {this.props.pokemon.types.map(
                    (item) =>
                        <div>
                            <h2>Average {item.type["name"]} Stats</h2>
                            <p>url des type :{item.type["url"]
                            }</p>
                            <p>pokemon du meme type:</p>
                        </div>
                )}
            </section>
            )
            : ( <section>Vide</section>);
    }
}

export default PokeResult;