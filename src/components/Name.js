import React from 'react'

function Name(props) {
  return (
    <div className="d-inline">
      <p style={{fontSize:props.size1,fontFamily:"'M PLUS Code Latin', sans-serif"}}>
        <p style={{fontSize:props.size2,fontFamily:"'M PLUS Code Latin', sans-serif",color:"#ffffff"}}>
            Hello,
        </p>
         Tanmay here!
      </p>
    </div>
  )
}

export default Name
