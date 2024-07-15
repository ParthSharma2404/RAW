// import bicepscontent from "./bicepscontent.js"
// import bathome from './bathome.js'
// import batgym from "./batgym.js"

import './biceps.css'
function biceps(){
    console.log("clicked");
    // const conten1t = (
    //     <h1>hello</h1>
    // )
    // document.getElementById("content").innerHTML =
     return(
        <div>
            <ul id ="bicepsoption">
                <li onclick="bathome">At Home</li><li onclick="batgym">At GYM</li>
            </ul> 
        <div id = "selectedoption"></div>
        </div>
     )
     
     
}

    
export default biceps;