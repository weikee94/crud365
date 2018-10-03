import React, { Component } from 'react';
import PropTypes from 'prop-types';

class gameList extends Component {

    render() {
        const emptyMessage = (
            <p>There are no games</p>
        )

        const gameList = (
            <p>Game Lists</p>
        )
    
        return (
            <div>
                { this.props.games.length === 0 ? emptyMessage : gameList }
            </div>
        );
    }
}

gameList.propTypes = {
    games: PropTypes.array.isRequired
}


export default gameList;