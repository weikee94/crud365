import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameList from './gameList';

class GamesPage extends Component {
    render () {
        return (
            <div>
                <GameList games={ this.props.games } />
            </div>
        )
    }
};

GamesPage.propTypes = {
    games: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}


export default connect(mapStateToProps)(GamesPage);
