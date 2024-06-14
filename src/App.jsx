import {useState, useEffect} from "react";
import { getPosts } from "./getPosts";
import './App.css'
import './styles.scss';
import AlonePost from './components/AlonePost'
import PostsGrid from "./components/PostsGrid";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'


function App() {

  const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts()
        .then((result)=> {
            setPosts(result.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<PostsGrid posts={posts}/>}> </Route>
          {posts.slice(1,10).map((post)=>(
            <Route element = {<AlonePost post={post} 
            key={post.id}/>}
            path={`/post:${post.id}`}
            key={post.id}
          />  
          ))}
        </Routes>
      </Router>
    </>
  )
}

export default App;



