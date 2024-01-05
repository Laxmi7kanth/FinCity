import {Link, withRouter} from 'react-router-dom'
import "./index.css"

const Header=()=>{
    return(
        <div className="header-container">
            <h1 className="heading">Laxmikanth</h1>
            <div className="routes-container">
                <p>About</p>
                <Link to="/projects">Projects</Link>
                <Link to="/add-project">Contacts</Link>
                <Link to="/add-project">Add Project</Link>
            </div>
        </div>
    )
}

export default withRouter(Header)