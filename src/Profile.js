import React from 'react'

const Profile = ({fullname,bio,profession ,x,show}) => {
  return (
    <div>
      <img src={x}alt='img'></img>
      <h1>{fullname}</h1>
<p>{bio}</p>
<h3>{profession}</h3>
<button onClick={()=>show(fullname)}>mesage</button>
    </div>
  )
}

export default Profile
