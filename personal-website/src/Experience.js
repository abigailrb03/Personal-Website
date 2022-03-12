import cb from "./Images/CodeBaseLogo.png"
import explo from "./Images/exploLogo.png"
import csm from "./Images/csmlogo.png"
import cosmos from "./Images/cosmosLogo.png"
import './Experience.css'

function experienceFunc() {
    return(
        <div className='experience'>
            <div className='Title'>
                 <text> Experience</text>
            </div>
            <div className="experiencesCol">
                <div className='expCol1'> 

                <div className="exp1">
                <div className="horizontalLine"></div>
                    <div className='eDescription'>
                        <img src= {cb} alt="my image" height = {100} width = {110}/>
                        <div className='etext'>
                            <div className='eTitle'>
                            <bold> Software Developer </bold>
                            </div>
                            <text> February 2022 - Present </text>
                        </div>
                    </div>
                </div>

            

                    <div className='blankBox'> </div>

                    <div className="exp1">
                        <div className="horizontalLine"></div>
                        {/* <div className="hoverText">
                        <text> please for the love of god work</text>
                    </div> */}
                        <div className='eDescription'>
                            <img src= {explo} alt="my image" height = {120} width = {120}/>
                            <div className='etext'>
                                <div className='eTitle'>
                                    <bold> Fisher Bay Observatory Intern </bold>
                                </div>
                                <text> August 2019 - June 2020 </text>
                            </div>
                        </div>
                    </div>

                    <div className='blankBox'> </div>

                    <div className="exp1">
                        <div className="horizontalLine"></div>
                        <div className='eDescription'>
                            <img src= {explo} alt="my image" height = {120} width = {120}/>
                            <div className='etext'>
                                <div className='eTitle'>
                                    <bold> High School Explainer </bold>
                                </div>
                                <text> October 2018 - August 2019 </text>
                            </div>
                        </div>
                    </div>


                </div>

                <div className= 'verticalLine'> </div>

                <div className='expCol1'>
                    <div className='blankBox'> </div>
                    <div className="exp1">
                        <div className="horizontalLine"></div>
                        <div className='eDescription'>
                            <img src= {csm} alt="my image" height = {100} width = {110}/>
                            <div className='etext'>
                                <div className='eTitle'>
                                    <bold> Computer Science Mentor </bold>
                                </div>
                                <text> January 2022 - Present </text>
                            </div>
                        </div>
                    </div>

                    <div className='blankBox'> </div>

                    <div className="exp1">
                        <div className="horizontalLine"></div>
                        <div className='eDescription'>
                            <img src= {cosmos} alt="my image" height = {100} width = {110}/>
                            <div className='etext'>
                                <div className='eTitle'>
                                    <bold> COSMOS Student </bold>
                                </div>
                                <text> July  2019 </text>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default experienceFunc;