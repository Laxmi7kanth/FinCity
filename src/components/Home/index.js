import Header from "../Header"
import AddProject from "../AddProject"
import "./index.css"

const Home=()=>{

    return(
        <>
            <Header/>
            <div className="home-container">
                <div className="details-container">
                    <p>UI/UX DESIGNER</p>
                    <h1>Hello my name is Laxmikanth</h1>
                    <p>I'm an aspiring full stack developer.</p>
                    <div className="button-container">
                        <button>Projects</button>
                        <button>LinkedIn</button>
                    </div>
                </div>
                <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1704379834/girlPort_ppyebg.png" alt="" className="img"/>
            </div>
            <AddProject/>
        </>
    )
}

export default Home