import React, { useEffect, useState } from "react";

function AlbumList(){
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
   
   
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums"
        )
        .then((response) =>{
        if(response.ok){
            
            return response.json();
        }
        throw new Error("Failed to fecth data");
    })
    .then((data)=>{
        console.log(data);
        setIsLoading(false);
        setAlbums(data);
    })
    .catch((error)=>{
        setError(true);
    })
    },[]
    )

    // if(isLoading)
    //     {
    //             return (<h1>Loading...</h1>);
    //     }
        
    //     if(error)
    //     {
    //             return (<h1>Error..</h1>);
    //     }

        return (
            <div>
                <h1>{isLoading?"Loading...":''}</h1>
                <h1>Albums List</h1>
                <ul>
                    {albums.map((album) => (
                        <li key={album.id}> {album.title}</li>
                    ))}
                </ul>
            </div>
        );
        

}

export default AlbumList;