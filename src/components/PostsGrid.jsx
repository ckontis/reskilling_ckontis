import Header from "./Header"
import Footer from "./Footer"
import MainPost from "./MainPost"
import Post from "./Post"
import '../styles.scss'

export default function PostsGrid({posts}){
    return(
        <>
        <Header></Header>
      <div>
        <div className="header">
        <h1>Posts List</h1>
        <h3>There are some posts waiting for you!</h3>
        </div>
      {posts.slice(0,1).map(post =>(
                    <MainPost post={post} key={post.id}/>
                ))
          }
        <h2 className="header">Related Articles or Posts</h2>
        <div className="posts-container">
        {posts.slice(1, 10).map(post =>(
                    <Post post={post} key={post.id} />))
          }
        </div>
      </div>  
        <Footer className="footer"></Footer>
        </>
    )
}