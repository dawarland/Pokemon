import React from 'react';

class PokeFormSearch extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <form className="nav">
                <input name="changedSearch" type="text" placeholder="Search..." value={this.props.word} onChange={this.props.handleChange}/>
            </form>
        );
    }
}

export default PokeFormSearch;