import { React } from "react";

// Donations.js
function Donations() {
    return (
        <div className="container mt-5 mb-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <div className="rounded-5 p-4" style={{backgroundColor: '#633e98'}}>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <p className="text-white fw-bold mb-md-0">
                                    Join us in making a difference with your generosity
                                    every donation counts in fueling our mission forward!
                                </p>
                            </div>
                            <div className="col-12 col-md-6 text-md-end">
                                <button className="btn fw-bold px-4" style={{backgroundColor: "#f3ec1a"}}>
                                    DONATE NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Donations;