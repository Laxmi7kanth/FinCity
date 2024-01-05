import {Component} from "react"
import PortfoilioContext from '../../context/PortfoilioContext'
import {v4 as uuidv4} from "uuid"
import "./index.css"

class AddProject extends Component{
    state={projectname:"",projectLink:"",description:"",projectList:[]}

    onNameChange=(event)=>{
        this.setState({projectname:event.target.value})
    }

    onLinkChange=(event)=>{
        this.setState({projectLink:event.target.value})
    }

    onDesChange=(event)=>{
        this.setState({description:event.target.value})
    }


    render(){
        
        return(
            <PortfoilioContext.Consumer>
                {
                    value=>{
                        const{updateProjectList}=value
                        this.onFormSubmit=(event)=>{
                            event.preventDefault()
                            const {projectLink,projectname,description}=this.state
                            const addObject={
                                id:uuidv4(),
                                projectLink,
                                projectname,
                                description
                            }
                            updateProjectList(addObject)
                        }

                    return(
                        <div className="form-main-container">
                            <form className="form-container" onSubmit={this.onFormSubmit}>
                                <h1>Add Project</h1>
                                <p>Project Name</p>
                                <input onChange={this.onNameChange}/>
                                <p>Project Link</p>
                                <input onChange={this.onLinkChange}/>
                                <p>Description</p>
                                <input onChange={this.onDesChange}/>
                                <br/>
                                <button className="form-btn" type="submit">Add</button>
                            </form>
                            <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1704426210/Vector_uuljzn.png" alt="" className="form-img"/>
                        </div>
                    )
                }}
            </PortfoilioContext.Consumer>
        )
    }
}

export default AddProject