import React, {useState} from 'react'

const Header = (props) => {
    const [player, setPlayer] = useState("")
    const [team, setTeam] = useState("")

    const submit = (e) => {
        e.preventDefault()
        props.callback(player,team)
    }

    return (
        <div className ="row">
            <div className = "col s4"
                 placeholder = "name"
                 value = {player}
                 onChange = {e => {setPlayer(e.target.value)}}
            >
                <input className = "input-field">
                </input>
            </div>

            <div className = "col s4">
                <select className = "browser-default"
                    value = {team}
                    onChange = {e => {setTeam(e.target.value)}}
                >
                    <option value= "" disabled selected>team</option>
                    <option value="new">new</option>
                    <option value="old">old</option>
                </select>
            </div>

            <div className = "col s4">
                <button className = "btn"
                    onClick = {submit}
                >
                    Add Player
                </button>
            </div>
        </div>
    )

}

export default Header