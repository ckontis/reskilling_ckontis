import { useNavigate } from "react-router-dom";
import '../styles.scss';

export default function Post({post}){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/post:${post.id}`);
        window.scrollTo(0,0);
    }

    return(
    
    <div key = {post.id} onClick={handleClick} className="post">
        <img src={post.photo}/>
        <h3>{post.title}</h3>
        <p>Author</p>        
    </div>
    )
}

