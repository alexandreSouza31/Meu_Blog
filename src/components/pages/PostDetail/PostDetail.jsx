import { FaUser } from "react-icons/fa";
import "./PostDetail.css";

export const PostDetail = ({ post }) => {
    return (
        <div>
            <div className="card_post">
                <p className="container_user">
                    <span >< FaUser /></span>
                    <span className="user">{post.createdBy}</span>
                </p>
                <div className="post_details">
                    <h3>{post.title}</h3>
                    {/* <h4>{post.body}</h4> */}
                    <p>{post.tagsArray}</p>
                    <img src={post.image} alt="" />
                    <button>Ver mais</button>
                </div>

            </div>
        </div>
    )
}