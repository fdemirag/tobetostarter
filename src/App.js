import logo from './logo.svg';
import './App.css';
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
Button } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from './components/PostCard/PostCard';

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
    const removePost = (id) => {
      setPosts(posts.filter(i=>i.id !== id));
    }
    

      

  return ( 
    <div className="App">
   
   {posts.map((post)=> <PostCard 
   onDelete={removePost} post={post}/>)}
  
  </div>
  );
}

export default App;
