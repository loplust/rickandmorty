import React from 'react'

const Characters = ({personajes = []}) => {
  return (
    <div className='row'>
        {
            personajes.map((item, index) => (
         <div key={index} className='col mb-4'>
            <div className='card' style={{minWidth: "200px"}}>
                <img src={item.image} alt=''/>
                <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <hr/>
                    <p>species: {item.species}</p>
                    <p>gender: {item.gender}</p>
                    <p>location: {item.location.name}</p>
                    <p>status: {item.status}</p>
                </div>
            </div>
         </div> 
            ))
        }

    </div>
  )
}

export default Characters