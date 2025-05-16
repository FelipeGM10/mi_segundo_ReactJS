import React from 'react'
import Boton from './Boton'
import Stars from './Stars'

const Post = ({id,
                key_index,
                title,
                description,
                release,
                genre,
                rating,
                buttonPressed}) => {

    const handleLocalPressButton = () => {
        console.log('Button pressed in child component')
    }

    const handlePressButtonToFather = () => {
        console.log('Button pressed in child component to father')
        buttonPressed(`${title} from father`)
    }

  return (
    <div key={key_index} className="card mb-3">
        <div className="card-body">
            <div className="d-flex align-items-center">
                {/* <img src={} alt={`${nombre}'s avatar`} className="rounded-circle me-2" width="40" /> */}
                <h5 className="card-title">{id + ' - ' + title}</h5>
            </div>
            <p className="card-text">{'Genero: '+genre}</p>
            <p className="card-text"><small className="text-muted">{release}</small></p>
            <p className="card-text">{description}</p>
            <Stars 
                totalStars={5}
                rating={rating}
            />
            <Boton
                nombre="Press me for father"
                funcion={handlePressButtonToFather}
            />
           <Boton
                nombre="Press me local"
                funcion={handleLocalPressButton}
            />
            
        </div>
    </div>
  )
}

export default Post