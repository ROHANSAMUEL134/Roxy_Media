import { Link } from "react-router-dom"
import { FaHeart,FaRegComment,FaRegShareSquare } from "react-icons/fa";

const Post = ({ post }) => {
    return (
        <article className="post">
            <Link to={`post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="postDate">{post.dateTime}</p>
            </Link>
            <div style={{height:'2px'}}></div>
            <img src={post.image} alt={post.image} className="post-image"/>
            <div className="icons">
                <FaHeart className="icon" style={{color:'hsl(0, 100%, 70%)'}}/>
                <FaRegComment className="icon"/>
                <FaRegShareSquare className="icon"/>
            </div>
            <p className="postBody">{
                (post.body).length <=50 ? post.body : 
                `${(post.body).slice(0,50)}...`
            }</p>
        </article>
    )
}

export default Post
