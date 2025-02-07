import React from "react";

function Story2({ smallTitle, bigTitle, Paragraph, moreParagraph, imageUrl, isAbout, imageUrl2 }) {
    return (
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="border-bottom border-start border-dark ms-md-5">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p className="text-secondary fw-bold">{smallTitle}</p>
                            <h2 className="text-purple display-4">{bigTitle}</h2>
                            <p className="fs-5">{Paragraph}</p>
                            <img src={imageUrl} alt="story" className="img-fluid rounded d-md-none mb-3" />
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                            <img src={imageUrl} alt="story" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>

                {isAbout && (
                    <div className="border-bottom border-start border-dark ms-md-5 mt-5">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p className="fs-5">{moreParagraph}</p>
                                <img src={imageUrl2} alt="story" className="img-fluid rounded d-md-none mb-3" />
                            </div>
                            <div className="col-md-4 d-none d-md-block">
                                <img src={imageUrl2} alt="story" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Story2;