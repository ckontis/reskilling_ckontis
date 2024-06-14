import '../styles.scss';


export default function MainPost({post}){

    return(
    <div key = {post.id} className="main-post">
        <h2>{post.title}</h2>
        <p className="subheading">Subheading for description, information about the author , etc.</p>
        <img src ={post.photo2}/>
        <p >{post.body}</p>
        <img className="image" src = "https://logodownload.org/wp-content/uploads/2019/10/deloitte-logo-0.png"/>
        <img className="image" src = "https://www2.deloitte.com/content/dam/Deloitte/mx/Images/promo_images/General/deloitte-logo-promo.jpg"/>
        <p>{post.body}</p>
    </div>
    )
}

