import React, { Component, useState } from "react";

class PostList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            isLoading: true,
            error: null
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => this.setState({ albums: data, isLoading: false }))
        .catch(error => this.setState({ error: error.message, isLoading: false }));
    }

    render() {
        const { albums, isLoading, error } = this.state;
        if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        return (
            <div>
                <h1>Albums</h1>
                <ul>
                    {albums.map(album => (
                        <li key={album.id}>
                            {album.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default PostList;