import { Outlet, Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <div className="title">
                <h1 className="heading">Netflix Movie</h1>
            </div>
                {/* <Link to="/moviedetails">Details</Link> */}
                {/* <Link to="/">Home</Link> */}
            <Outlet />
        </div>
    );
}

export default Header;