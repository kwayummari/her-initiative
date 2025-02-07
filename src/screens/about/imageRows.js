import { React } from "react";

function ImageRows() {
    const programData = [
        { image: "fika.jpg" },
        { image: "_YTE2638.jpg"},
        { image: "_YTE8636.jpg" }
    ];

    return (
        <div className="container mt-5">
            <div className="d-none d-md-block">
                <p className="fs-5">
                The formation of Her Initiative was a natural progression,
                    catalyzed by a series of impactful events in colleges.
                    Standing for self-empowerment, the organization aligns
                    itself with the resilience of young women and girls who
                    navigate life's challenges with determination.
                </p>
            </div>
            <div className="row g-4">
                {programData.map((program, index) => (
                    <div key={index} className="col-12 col-md-4">
                        <div className="card border-0 rounded-4">
                            <img 
                                src={`/photos/${program.image}`} 
                                className="card-img-top" 
                                alt="program"
                                style={{height: '300px', objectFit: 'cover'}}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ImageRows;