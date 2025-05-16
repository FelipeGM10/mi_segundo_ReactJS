import React from 'react'
import { posts } from '../services/post'
import Post from './Post'

const Feed = () => {
    console.log('Datos de la API', posts)

    const handlePressButton = (get) => {
        console.log(`${get} viene del hijo`)
    }
    
  return (
    <div>
        {posts.map((post, index) => (
            <Post 
                id={post.id} 
                key={index} 
                username={post.username} 
                content={post.content} 
                avatar={post.avatar} 
                timestamp={post.timestamp}
                buttonPressed={handlePressButton}
            />
        ))}
    </div>
  )
}

export default Feed