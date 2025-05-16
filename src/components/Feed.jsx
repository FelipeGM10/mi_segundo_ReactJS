import React, { useEffect, useState } from 'react'
import { getActores, posts } from '../services/post'
import Post from './Post'

const Feed = () => {

       const [datos, setDatos] = useState([]);
       const apiURL = 'http://localhost:3001/series';
    
       useEffect(() => {
          fetch(apiURL)
             .then((response) => response.json())
             .then((data) => {
                console.log('Datos del Feed', data);
                setDatos(data);
             })
             .catch((err) => {
                console.log(err.message);
             });
       }, []);

    const handlePressButton = (get) => {
        console.log(`${get} viene del hijo`)
    }
    
  return (
    <div>
        {datos.map((datos, index) => (
            <Post 
                id={datos.serie_id} 
                key_index={index} 
                title={datos.titulo}
                description={datos.descripcion}
                release={datos.año_lanzamiento}
                genre={datos.genero}
                rating={datos.rating}
                buttonPressed={handlePressButton}
            />
        ))}
    </div>
  )
}

export default Feed