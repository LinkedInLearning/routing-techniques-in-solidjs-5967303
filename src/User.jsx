import {useParams} from "@solidjs/router"

const User = () => {

    const routeParams = useParams()

    const userID = routeParams.userID || "Please Provide a User ID"

    return <>
        <h1>My Profile</h1>

        <h3>User ID: <span style="color:blue">{userID}</span></h3>
    </>
}

export default User;