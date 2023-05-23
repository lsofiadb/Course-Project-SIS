import React from "react";
import "../CSS/PrincipalImage.css"

function PrincipalImage ({Text}){
    return(
        <div className="PrincipalImageContainer">
            <div className="PrincipalTextContainer">
                <h1>{Text}</h1>
            </div>
        </div>
    );
}

export default PrincipalImage;