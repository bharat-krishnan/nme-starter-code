import React from 'react'

const Player = ({rank, player, kills, playersKilled}) => {
    
    return (
        <div>
            <div className = "row">
                <div className = "col s3">
                    {rank}
                </div>
                <div className = "col s3">
                    {player}
                </div>
                <div className = "col s3">
                    {kills}
                </div>
                <div className = "col s3">
                    {playersKilled}
                </div>

            </div>
        </div>
    )

}

export default Player