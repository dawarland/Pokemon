import React from 'react';

class PokeList extends React.Component {
    render() {
        return (
            <ul className="nav">
                {this.props.list.map(
                    (item, index) =>
                        <li><a href={item.url}  onClick={this.props.handleClick} >{item.name}</a></li>
                )}
            </ul>
        );
    }
}

export default PokeList;