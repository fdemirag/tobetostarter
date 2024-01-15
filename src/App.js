import logo from './logo.svg';
import './App.css';

import { Button } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect (() => {
   fetchItems();
  }, [])
 
  const fetchItems = async () => {
    try {
      let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
     setPosts(response.data);
    }catch (e)
    {
      console.log(e);
    }
    
    }

  return (
    <div className="App">
   
   {posts.map((post)=> <p>{post.title}</p>)}
  
  </div>
  );
}

export default App;
