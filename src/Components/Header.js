import React from 'react'

const Header = (props) => {
    
    return (
        <div className = "header">
            <div className = "row">
                <div className = "col s3">
                    Rank
                </div>
                <div className = "col s3">
                    Name
                </div>
                <div className = "col s3">
                    Kills
                </div>
                <div className = "col s3">
                    Players Killed
                </div>

            </div>
        </div>
    )

}

export default Header