import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div className="">
            <h1>You have Logged In</h1>
            <Link to='/'>Back to Login Page</Link>
        </div>
    )
}

export default Home