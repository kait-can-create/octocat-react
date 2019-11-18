import React from 'react'

const CatImages = props => {
  return (
    <>
      <div>
        <img src={props.image} />
        {/* pass down name and number */}
        <p>#{props.number} {props.name}</p>
      </div>

    </>

  )
}


export default CatImages