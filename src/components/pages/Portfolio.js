import React, { useState } from 'react';
import ProjectList from '../ProjectList';

export default function Portfolio(){
    const [ apps, setApps ] = useState([
        { 
            title: 'Tasteful Choice', 
            body: 'Uses two server side API\'s to display meals and drinks that contain a user chosen ingredient', 
            deployed: 'https://alandis01.github.io/food-and-bev-project-1/', 
            gitLink: 'https://github.com/alandis01/food-and-bev-project-1', 
            id: 1 
        },
        { 
            title: 'Sofa King Cool', 
            body: 'An application that serves to provide an area for organizing furniture wants for a room in a user friendly way', 
            deployed: 'https://quiet-river-37193.herokuapp.com/', 
            gitLink: 'https://github.com/kassrojas/sofa-king-cool', 
            id: 2 
        },
        { 
            title: 'Tasteful Choice',
            body: 'Uses two server side API\'s to display meals and drinks that contain a user chosen ingredient', 
            deployed: 'https://alandis01.github.io/food-and-bev-project-1/', 
            gitLink: 'https://github.com/alandis01/food-and-bev-project-1', 
            id: 3 
        },
        { 
            title: 'Tasteful Choice', 
            body: 'Uses two server side API\'s to display meals and drinks that contain a user chosen ingredient', 
            deployed: 'https://alandis01.github.io/food-and-bev-project-1/', 
            gitLink: 'https://github.com/alandis01/food-and-bev-project-1', 
            id: 4 
        },
        { 
            title: 'Tasteful Choice', 
            body: 'Uses two server side API\'s to display meals and drinks that contain a user chosen ingredient', 
            deployed: 'https://alandis01.github.io/food-and-bev-project-1/', 
            gitLink: 'https://github.com/alandis01/food-and-bev-project-1', 
            id: 5 
        },
        { 
            title: 'Tasteful Choice', 
            body: 'Uses two server side API\'s to display meals and drinks that contain a user chosen ingredient', 
            deployed: 'https://alandis01.github.io/food-and-bev-project-1/', 
            gitLink: 'https://github.com/alandis01/food-and-bev-project-1', 
            id: 6 
        },
    ], [])
    return (
        <>
        <main>
            <h1> Portfolio </h1>
        < ProjectList apps={apps} heading='All Projects'/>
        </main>
        </>
    )
}