import { React } from "react";
import './styles.css'
import { Grid, useMediaQuery } from "@mui/material";

// Where.js
function Where() {
    return (
        <div className="container">
            <h2 className="display-4 m-4" style={{fontWeight: "bold"}}>Where we work</h2>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <img 
                        src="/photos/tanzania.png" 
                        alt="Tanzania map" 
                        className="img-fluid rounded-5"
                    />
                </div>
            </div>
        </div>
    );
}
export default Where;