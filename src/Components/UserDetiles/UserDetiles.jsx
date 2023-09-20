import { Navigate, useLoaderData, useNavigate } from "react-router-dom";

const UserDetiles = () => {
    const user = useLoaderData();
const navigate=useNavigate();
    const { name, website } = user;

    const handelBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>Details about user: {name} </h2>
            <p>Website:{website} </p>
            <button onClick={handelBack}>Go Back</button>
        </div>
    );
};

export default UserDetiles;