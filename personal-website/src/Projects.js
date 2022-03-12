import cosmosProj from "./Images/CosmosProjectimg.png"
import foodPantry from "./Images/bfplogo.jpeg"
import bakingProj from "./Images/bakingProj.png"
import './Projects.css'

function projectsFunc() {
    return(
        <div className='projects'>
            <div className='Title'>
                 <bold> Projects</bold>
            </div>
            <div className="projectList">

                <div className='project'>
                    <div className='projImage'>
                        <img src= {foodPantry} alt="my image" height = {200} width = {500}/>
                    </div>
                    <div className='projDescription'>
                        <div className="horizontalLine"></div>
                        <text> More info soon!</text>
                    </div>
                </div>

                <div className='project'>
                    <div className='projImage'>
                        <img src= {bakingProj} alt="my image" height = {200} width = {500}/>
                    </div>
                    <div className='projDescription'>
                        <div className="horizontalLine"></div>
                        <text> This was created using JavaScript and the p5 library!</text>
                    </div>
                </div>

                <div className='project'>
                    <div className='projImage'>
                        <img src= {cosmosProj} alt="my image" height = {200} width = {500}/>
                    </div>
                    <div className='projDescription'>
                        <div className="horizontalLine"></div>
                        <text> This project was created using Python and Jupyter Notebook!</text>
                    </div>
                </div>
            </div>

      </div>
    )
}
export default projectsFunc;