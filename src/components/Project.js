import React, { useState } from "react";


export default function Project() {
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
    ])

  return (
      <div>
        {apps.map((app) => (
        <div className="card m-3 p-2">
        <section key={app.id} className='card-body'>
            <h5 className="card-title">{app.title}</h5>
            <p className="card-text">{app.body}</p>
            <a href={app.deployed} target='_blank' rel="noreferrer" className='btn btn-dark m-2'>Deployed Application</a>
            <a href={app.gitLink} target='_blank' rel="noreferrer" className='btn btn-dark m-2'>GitHub Repo</a>
        </section>
        </div>
        ))}
   </div>
  );
}
