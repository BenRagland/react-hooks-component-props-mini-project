import React from 'react'

function About({about,image}) {
  return (
    <aside>
        <img alt="blog logo" 
        src ={ image ? image : "https://via.placeholder.com/215" } />
        <p>{about}</p>
    </aside>
  )
}

export default About