import React, {useState} from 'react'
import Leaderboard from './Components/Leaderboard'
import AddPlayer from './Components/AddPlayer'

function App() {

  const startingPlayers = [
    {player: "Hugh", team: "new", kills: 3, playersKilled: ["Jason, Zach, Bharat"]},
    {player: "Kevin", team: "new", kills: 2, playersKilled: ["Angela"]},
    {player: "Frankie", team: "old", kills: 0, playersKilled: []}
  ]

  const [players, setPlayers] = useState(startingPlayers)
  const [error, setError] = useState("")

  const addPlayer = (player, team) => {

      setError("")
      if(player === "" || team === "" ){
          setError("incomplete Info")
          return
      }

      players.forEach(
        elem =>{
          if (elem.player === player && elem.team === team){
            setError("player on leaderboard")
            return
          }
        }
      )

      const newPlayer = {player: player, team: team, kills: 0, playersKilled: []}
      setPlayers([...players, newPlayer])
  }

  return (
    <div>
      <div className = "container">
      <h1>CATASSASSINS</h1>
      <AddPlayer  callback = {addPlayer} />
      <p className = "red-text">{error}</p>
      <Leaderboard players = {players}/>
      
      </div>
    </div>
  );
}

export default App;
