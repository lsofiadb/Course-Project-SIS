import React from "react";
import "../CSS/FooterBar.css"
import { BrandFacebook } from 'tabler-icons-react';
import { BrandInstagram } from 'tabler-icons-react';
import { BrandGithub } from 'tabler-icons-react';

function FooterBar (){
    return(
        <>
        <div className="FooterContainer">
            <h1> Food Ship</h1>
            <div className="Socialmedia">
                <BrandGithub size={40} color="Black"/>
                <BrandFacebook  size={40} color="Black"/>
                <BrandInstagram  size={40} color="Black"/>
            </div>
        </div>
        <div className="FooterEnd">
            <h1>2023</h1>
        </div>
        </>
    );
}

export default FooterBar;