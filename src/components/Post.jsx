import React from 'react'
import Boton from './Boton'

const Post = ({index, avatar, username, content, timestamp, buttonPressed}) => {

    const handleLocalPressButton = () => {
        console.log('Button pressed in child component')
    }

    const handlePressButtonToFather = () => {
        console.log('Button pressed in child component to father')
        buttonPressed(`${username} from father`)
    }

  return (
    <div key={index} className="card mb-3">
        <div className="card-body">
            <div className="d-flex align-items-center">
                <img src={avatar} alt={`${username}'s avatar`} className="rounded-circle me-2" width="40" />
                <h5 className="card-title">{username}</h5>
            </div>
            <p className="card-text">{content}</p>
            <Boton
                nombre="Press me for father"
                funcion={handlePressButtonToFather}
            />
           <Boton
                nombre="Press me local"
                funcion={handleLocalPressButton}
            />
            <p className="card-text"><small className="text-muted">{timestamp}</small></p>
        </div>
    </div>
  )
}

export default Post