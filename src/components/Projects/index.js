import PortfoilioContext from '../../context/PortfoilioContext'
import "./index.css"

const Projects=()=>(
    <PortfoilioContext.Consumer>
        {
            value=>{
                const{projectList}=value
                return(
                    <div className='projects-container'>
                        <h1>Projects</h1>
                        <ul>
                            {
                                projectList.map((eachItem)=>(<li className='li-container'>
                                    <div className='description-container'>
                                        <h1>{eachItem.projectname}</h1>
                                        <p>{eachItem.description}</p>
                                        <button>View Project</button>
                                    </div>
                                    <img src={eachItem.projectLink} alt="" className='projects-img'/>
                                </li>))
                            }
                        </ul>
                    </div>
                )
            }
        }
    </PortfoilioContext.Consumer>
)

export default Projects