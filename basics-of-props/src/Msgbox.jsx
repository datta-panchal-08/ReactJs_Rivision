import React from 'react'

const Msgbox = ({username,textColor}) => {
    const styles = {color : textColor};
  return (
    <div>
        <h1 style={styles}>{username}</h1>
    </div>
  )
}

export default Msgbox