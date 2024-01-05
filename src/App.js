import {Route, Switch} from 'react-router-dom'
import {BrowserRouter} from "react-router-dom"
import Home from "./components/Home"
import Projects from "./components/Projects"
import PortfolioContext from './context/PortfoilioContext'
import { Component } from 'react'

class App extends Component {
  state={projectList:[{projectname:"NxtTrendz",projectLink:"https://res.cloudinary.com/dqjixulez/image/upload/v1704439776/pexels-elly-fairytale-3823207_1_h7g258.png",description:"This is an online shopping application which is similar to amazon."},
  {projectname:"WikiPedia",projectLink:"https://res.cloudinary.com/dqjixulez/image/upload/v1704439782/Rectangle_7_iyaoqr.png",description:"This is an online shopping application which is similar to amazon."},
  {projectname:"instaShare",projectLink:"https://res.cloudinary.com/dqjixulez/image/upload/v1704439794/Rectangle_7_1_zijztt.png",description:"This is an online shopping application which is similar to amazon."}
]}

   updateProjectList=(list)=>{
      this.setState((prevState)=>({projectList:[...prevState.projectList,list]}))
   }
 
  render(){
    const{projectList}=this.state
    console.log(projectList)
    return(
      <PortfolioContext.Provider value={{projectList,updateProjectList:this.updateProjectList}}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects}/>
          </Switch>
        </BrowserRouter>
      </PortfolioContext.Provider>
    )
  }
}

export default App;
