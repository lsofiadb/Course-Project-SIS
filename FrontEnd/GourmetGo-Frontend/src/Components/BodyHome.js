import React from "react";
import "../CSS/BodyHome.css"
import Dunkin from "../IMGs/DUNKIN.png"
import Corral from "../IMGs/CORRAL.png"
import Subway from "../IMGs/SUBWAY.jpg"
import Dominos from "../IMGs/DOMINOS.png"

function BodyHome(){
    return(
        <div className="BodyHome-Container">
            <h1> ¡encuentra tu opción ideal!</h1>
            <div className="HomeImages">
                <img src={Dunkin}></img>
                <img src={Corral}></img>
                <img src={Subway} id="Subway"></img>
                <img src={Dominos}></img>
                <img src={Corral}></img>
                <img src={Dominos}></img>
            </div>
        </div>
    );
}

export default BodyHome;