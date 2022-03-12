import './About.css'
import abphoto from "./Images/abbybrooks.png"
import linkedIn from "./Images/229082.png"
import resume from "./Images/resume.png"
import git from "./Images/git_Icon.png"

function aboutFunc() {
    return(
<div className="about">
        <div className='imgAndText'>
            <div className='imgAndButtons'>
                <div className='mainimg'>
                    <img src = {abphoto} alt = "Profile Image" height = {350} width = {350} />
                </div>
                <div className='aboutButtons'>
                    <a href='https://www.linkedin.com/in/abigail-brooks-33454b188/'><img src= {linkedIn} alt="my image" height = {100} width = {100}/></a>

                    <a type="button" href='https://github.com/abigailrb03'> <img src= {git} alt="my image" height = {100} width = {100}/></a>
                    <img src= {resume} alt="my image" height = {100} width = {110}/>
                 </div>
            </div>

            <div className='aboutText'>
                <div className='aboutTitle'> 
                    <text> Hi! I'm Abigail Brooks Ramirez</text>
                </div>
                <div className='aboutDescription'>
                    <text> I’m a first year student at UC Berkeley intending to major in computer science. As a Latina in STEM, I’m familiar with the challenges underrepresented groups face, and I try to combat this through teaching and mentorship. I hope to pursue a career in computer science to satisfy my own curiosity while providing representation and support for fellow members of my community.</text>
                </div> 
            </div>
        </div>
      </div>
    )
}
export default aboutFunc;
