import React from 'react'
import Header from './Header'
import Player from './Player'

const Leaderboard = (props) => {

    const getPlayers = () => {
        const playersDisplayed = props.players.map(
            (x,i) => {
                return <Player
                    rank = {i+1}
                    player = {x.player}
                    kills = {x.kills}
                    playersKilled = {x.playersKilled}
                />
            }
        )

        return playersDisplayed
    }

    return (

        <div>
            <Header/>
            {getPlayers()}
        </div>
    )

}

export default Leaderboard