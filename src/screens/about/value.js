import { React } from "react";
import './styles.css'

// Values.js
function Values() {
    const programData = [
        { image: "/icons/inclusion.png", title: "Inclusion", paragraph: "We believe in diversity and equal access for everyone with no discrimination in gender, race, or religion." },
        { image: "/icons/innovation.png", title: "Innovation", paragraph: "We cultivate an environment where new ideas are embraced, encouraged, and supported to fuel us towards our vision."},
        { image: "/icons/learning.png", title: "Learning", paragraph: "We remain open to new opportunities and ideas focused on our vision and mission, and we embrace the need to adapt when needed." },
        { image: "/icons/partnership.png", title: "Partnership", paragraph: "We believe in collaboration and working jointly with other actors in what we do." }
    ];

    return (
        <div className="container">
            <h2 className="display-4 m-4" style={{fontWeight: "bold"}}>Our Values</h2>
            <div className="row justify-content-center">
                <div className="col-12 col-md-12">
                    <div className="card rounded-5 p-4" style={{backgroundColor: '#633e98'}}>
                        {programData.map((program, index) => (
                            <div key={index} className="mb-4">
                                <div className="d-flex align-items-center mb-2">
                                    <img 
                                        src={program.image} 
                                        width="60" 
                                        height="60" 
                                        alt={program.title}
                                        className="me-3"
                                    />
                                    <h3 className="text-white mb-0">{program.title}</h3>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <p className="text-white text-align-start ms-5 ps-4">{program.paragraph}</p>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Values;