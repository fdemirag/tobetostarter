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
import PostService from './services/postService';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Posts from './pages/Posts/Posts';
import NotFound from './pages/NotFound/NotFound';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect (() => {
   fetchItems();
  }, [])
 
  const fetchItems = async () => {
    try {
      
      let response = await PostService.getAll();
      
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
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/homepage" element={<HomePage/>}/>
    <Route path="/posts" element={<Posts/>}/>

    <Route path="*" element={<NotFound/>}/>

    </Routes>   
   </BrowserRouter>
  );
}

/*<div className="App">
   
{posts.map((post)=> <PostCard 
onDelete={removePost} post={post}/>)}
 );

</div> */
export default App;
