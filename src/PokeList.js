import React from 'react';

class PokeList extends React.Component {
    render() {
        return (
            <ul className="nav">
                {this.props.list.map(
                    (item) =>
                        <li value={item.url} onClick={this.props.handleClick}>
                            {item.name}
                        </li>
                )}
            </ul>
        );
    }
}

export default PokeList;