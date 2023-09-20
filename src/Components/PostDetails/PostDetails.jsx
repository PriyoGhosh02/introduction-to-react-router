import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const postDetails = useLoaderData();
    const { id, title, body } = postDetails;
    const navigate = useNavigate();
    const {postId}=useParams();
    console.log(postId);

    const handelGoBack = () => {
        navigate(-1)// or use it (`/posts`)
    }

    return (
        <div>
            <h3>Post Details About:{id} </h3>
            <p>Title:{title} </p>
            <p><small>{body}</small></p>
            <button onClick={handelGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;