import Footer from "./Footer";
import Header from "./Header";

export default function AlonePost({post}){

    return(<>
    <Header></Header>
        <div key = {post.id} className="alone-post">
        <div className="post-container">
            <h1>{post.title}</h1>
            <p className="subheading">Subheading for description, information about the author , etc.</p>
            <p>{post.body}</p>
        </div>
        
        <img src={post.photo2} className="post-image"/>
        </div>
    <Footer></Footer>
    </>
    )
}

