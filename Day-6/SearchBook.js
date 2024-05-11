import axios from "axios";
import React, { useEffect, useState } from "react";

function SearchBook(){

    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');

    const findBook= async()=>{

        console.log('Find a book');

        const query = `
        query GetBooks {
            getBooks(title: "jafar") {
                id
                title
                author
            }
        }
        `;
        
        const query1 = `
         AddBook($book: BookInput!) {
            addBook(input: $book) {
                id
                title
                author
            }
        }
        `;

      const query2=  `query GetBooks($title: BookInput!) {
            getBooks(title: $title) {
                id
                title
                author
            }
        }`
           
     
            const variables = {
                book: {
                    title
                }
            };
     
            try {
                const response = await axios.post('http://localhost:4000/graphql', {
                    query2,
                    title
                   
                });
                console.log('Book added:', response.data);
                alert('Book found successfully!');
            } catch (error) {
                console.error('Error finding book:', error);
                alert('Failed to find a book.');
            }
        
    }

    return (
        <div>
            <input type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            < button
             onClick={findBook}
            > Find a Book 
            </button>
        </div>
    );
}

export default SearchBook;