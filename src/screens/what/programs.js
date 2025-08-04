import React, { useState, useEffect } from 'react';

const ProgramsData = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);
    }, []);

    const programData = [
        {
            image: "pandaDigital2.jpg",
            title: "Panda Digital",
            description: "Panda Digital is the first Swahili hybrid e-learning platform that uses a website and...",
            fullDescription: `Panda Digital is a Swahili hybrid e-learning platform using
                     a website and AI SMS to empower young women with skills, business support, and
                     social justice. It tackles unemployment by promoting self-employment and has impacted
                     over 8735 women, bridging the digital gender gap and addressing sextortion. Panda Digital
                     is a Swahili hybrid e-learning platform using a website and AI SMS to empower young women with
                      skills, opportunities, personalized business support, and social justice. It tackles unemployment
                       by promoting self-employment using digital technologies to generate jobs and achieve financial freedom.
                        It also addresses sextortion challenges by offering legal and psychological aid via its ONGEA HUB.
Panda Digital has made significant achievements, including recognition from the Ministry of Health, the Roddenberry Foundation, and Global Citizen. Its impact includes empowering 8,256 women with the skills to start and run smart businesses and  2,806 businesses digitised. Additionally, the platform has reached 31 regions, Over the next five years, Panda Digital aims to support 50,000 women, expand its reach by 70% in Tanzania and 30% in East Africa, and establish university clubs to foster digital literacy and innovation to 6000 students.
` },

        {
            image: "pandaOnGround.jpg",
            title: "Panda on the Ground",
            description: "Panda on the Ground is a project that aims at planting a seed of financial freedom...",
            fullDescription: `Panda on the Ground is a project that aims at planting a seed of financial freedom 
            for women aged 18-35 who have the desire to start businesses through income generation and job creation.
             The program offers hands-on entrepreneurial training, mentorship, and financial linkages, impacting 210
             women who have launched their businesses. Panda on The Ground enables financial freedom for women aged
             18-35 through income generation and job creation. The program offers hands-on entrepreneurial training,
             mentorship, and financial linkages, impacting over 210 women to launch businesses, and fostering financial
              independence and job creation. Over the next five years, the program aims to support 500 women in starting
               and formalizing businesses, enhancing digital skills, and promoting job creation, aiming for a 70% succes
               s rate in sustaining businesses. This initiative is expected to generate around 1,500 new jobs, significantly
                impacting the livelihoods of women and fostering economic growth in their communities.` },

        {
            image: "digimali.jpg",
            title: "Digimali",
            description: "Digimali is a project is a project that focuses on enhancing the adaptation of digital business...",
            fullDescription: `DigiMali comes from the two Swahili words "Digitali na Mjasiliamali" translating to "Digital and Entrepreneur" in English, the project aims to transform and uplift communities through the power of digital literacy and technology. The program intends to boost self-employment by training young entrepreneurs to run sustainable businesses, helping them transform traditional businesses into digital enterprises. Since its inception, DigiMali has directly empowered 201 individuals and reached an additional 4,173 through its Training of Trainers (TOT) model. The project's future goals train 500  youth and women business owners to reach 12,000 youth business owners beneficiaries over the next five years transforming their traditional business to digital business.`
        },

        {
            image: "yeb.jpg",
            title: "Youth Employability Boot Camp",
            description: `This program focuses on honing the skills of young graduates, bridging the gap between...`,
            fullDescription: `The Youth Employability Boot Camp (YEB) focuses on honing the skills of young graduates, bridging the gap between theoretical knowledge and practical application. Through training, mentorship, and placements, we equip youth with essential technical and soft skills, increasing their employability in the job market. This initiative focuses on providing youth with vocational skills to enhance professional skills and competence through comprehensive training in CV writing, cover letters, digital skills, and business acumen, supported by mentorship and job placements. Having already assisted 145 graduates, YEB plans to support 1000 graduates annually over the next five years, including 50 with disabilities. The program will also engage 250 employers, 30 mentors, 50 trainers, and 2 government agencies to ensure a holistic approach to career development. Employers provide job opportunities and insights into market needs, mentors offer guidance and support, trainers deliver essential skills, and government agencies help align the program with broader employment and inclusion policies. This comprehensive approach aims to enhance employability, promote inclusivity, and foster sustainable career growth.This boot camp bridges the gap between theoretical knowledge and practical skills for young graduates. Through training, mentorship, and placements, it enhances employability and promotes women's leadership, impacting 145 graduates with essential skills and opportunities.`
        },

        {
            image: "mshiko2.jpg",
            title: "Mshiko Clubs",
            description: "A project that aims at keeping girls in school by using a hybrid model of economic...",
            fullDescription: `Mshiko clubs is a project that aims at setting a road map to financial freedom for girls (14-19)
             in schools by using a hybrid model of economic empowerment that includes the adoption of good financial
              behaviours, extracurricular income-generating activities, and girls agency empowerment to promote girl's
              self-esteem and self-efficacy that help girls stay and enjoy school. Since its launch, the project has
              established five clubs with around 500 girls in Dar es Salaam, providing training in financial management,
               rights-based education, and income-generating activities. Over the next five years, Mshiko Clubs plan to
               reach 2,500 adolescent girls, enhancing their financial and academic skills. The initiative also aims to
               increase academic excellence using digital resources and foster community support by sensitising teachers,
                parents, and local leaders to promote positive perceptions of girls' education. Mshiko Clubs keep girls in
                school by blending economic empowerment with agency-building. Girls learn saving habits, receive financial
                 literacy training, and engage in income-generating activities, boosting self-esteem and financial freedom,
                  all while fostering a positive school experience.` },

        {
            image: "planB.jpg",
            title: "Plan B Project",
            description: "Plan B Project provides education to out-of-school adolescent girls to fight gender...",
            fullDescription: `Plan B project aims to support out of school adolescent girls,unemployed and young mothers aged (15-24) in Tanzania overcoming barriers of gender based violence whilst building their financial resilience through entrepreneurship skills and seed support resources. Since its inception, Plan B has empowered 108 girls in Kisarawe District, helping 40 of them start businesses and join saving groups. The project has increased advocacy and leadership skills, improved confidence, and raised awareness about gender-based violence within the community. Plan B aims to support 1,000 girls over the next five years, providing resources, education, and mentorship to build sustainable livelihoods. It combines gender-based violence prevention with financial literacy, offering holistic support through non-traditional education, business pitching, and seed funding. The project also engages local communities and government officials to foster inclusivity and resilience.The program reduces violence risk by equipping girls with skills, finances, and support, aiding both prevention and recovery.`
        },

        {
            image: "pandaMovement.jpg",
            title: "PANDA DIGITAL MOVEMENT",
            description: "The Panda Digital Movement is dedicated to dismantling the structural...",
            fullDescription: `The Panda Digital Movement is dedicated to dismantling the structural barriers that prevent young women from achieving their full potential, focusing particularly on issues of bodily autonomy and economic empowerment. The movement tackles pervasive challenges such as sextortion and sexual harassment, both of which significantly hinder progress for women in Tanzania. By utilizing technology, Panda Digital creates a safer and more supportive environment for women, empowering them to stand up against gender-based violence and economic injustice.
Since its inception in 2021, the Panda Digital Movement has made significant strides in combating sextortion and advocating for justice. Through the Training of Trainers (TOT) model, the movement has trained 40 Anti-Sextortion Champions, who are actively working to ensure accountability and support survivors. These champions have directly assisted over 997 young women, providing them with legal, psychological, and emotional support to navigate their experiences. Additionally, through powerful online campaigns, the movement has reached an estimated 25 million people, sparking a nationwide dialogue on sextortion and women's rights while raising awareness on the urgent need for systemic change.`
        },

        {
            image: "stawi2.jpg",
            title: "Stawi LAB",
            description: "The 'Stawi Lab' (Flourish Lab in English) project is at the forefront of an ambitious ecosystem...",
            fullDescription: `The 'Stawi Lab' (Flourish Lab in English) project is at the forefront of an ambitious ecosystem-building initiative, with a singular goal: supporting youth-led organizations dedicated to championing the rights and interests of girls and women. Our approach is multifaceted, weaving together capacity-building, mentorship, and the provision of unrestricted seed grants. In our collective movement, these youth-led organizations passionately advocate for the decolonization of funding, rallying for research, data, and empirical evidence to underpin funding approaches that are not only inclusive but also imbued with deep meaning. To date, Stawi Lab has proudly supported 38 organizations across six regions in Tanzania, marking significant strides toward our commitment to empowering the next generation of change-makers. Stawi Lab's mission is to 100 empower youth-led organizations and create a supportive ecosystem where they can thrive.`
        },
    ];

    const handleOpenModal = (program) => {
        setSelectedProgram(program);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setTimeout(() => setSelectedProgram(null), 300);
    };

    return (
        <div className="programs-page">
            {/* Hero Section */}
            <section className="programs-hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-badge">Our Programs</span>
                        <h1 className="hero-title">What We Do</h1>
                        <p className="hero-description">
                            We leverage an approach that elevates from breaking barriers to changing behavior,
                            advancing skills, and amplifying voices. Our programs are centered around supporting
                            AGYWs with Economic empowerment and technology packages to influence their livelihood
                            outcomes, improve their well-being and increase their income. In addition, we use
                            economic empowerment and technology to complement efforts around social outcomes/SRHR
                            outcomes such as GBV and Education.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="programs-grid-section">
                <div className="container">
                    <div className="programs-grid">
                        {programData.map((program, index) => (
                            <div
                                key={index}
                                className={`program-card ${isVisible ? 'fade-in' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="card-image-container" onClick={() => handleOpenModal(program)}>
                                    <img
                                        src={`/photos/${program.image}`}
                                        alt={program.title}
                                        className="card-image"
                                    />
                                    <div className="image-overlay">
                                        <div className="overlay-content">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            <span>Learn More</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3 className="program-title">{program.title}</h3>
                                    <p className="program-description">
                                        {program.description}
                                        <button
                                            className="learn-more-btn"
                                            onClick={() => handleOpenModal(program)}
                                        >
                                            View More
                                        </button>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern Modal */}
            {openModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleCloseModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        {selectedProgram && (
                            <div className="modal-body">
                                <div className="modal-header">
                                    <div className="modal-image">
                                        <img
                                            src={`/photos/${selectedProgram.image}`}
                                            alt={selectedProgram.title}
                                        />
                                    </div>
                                    <div className="modal-info">
                                        <h2 className="modal-title">{selectedProgram.title}</h2>
                                    </div>
                                </div>
                                <div className="modal-description">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: selectedProgram.fullDescription }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style jsx>{`
                .programs-page {
                    overflow-x: hidden;
                }

                /* Hero Section */
                .programs-hero {
                    padding: 6rem 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    text-align: center;
                }

                .hero-badge {
                    display: inline-block;
                    background: #633e98;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 25px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    margin-bottom: 1.5rem;
                }

                .hero-title {
                    font-size: 3rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1.5rem;
                }

                .hero-description {
                    font-size: 1.1rem;
                    color: #6c757d;
                    max-width: 900px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                /* Programs Grid Section */
                .programs-grid-section {
                    padding: 6rem 0;
                    background: white;
                }

                .programs-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2rem;
                }

                .program-card {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    opacity: 0;
                    transform: translateY(30px);
                }

                .program-card.fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .program-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .card-image-container {
                    position: relative;
                    height: 250px;
                    cursor: pointer;
                    overflow: hidden;
                }

                .card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .card-image-container:hover .card-image {
                    transform: scale(1.05);
                }

                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(99, 62, 152, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .card-image-container:hover .image-overlay {
                    opacity: 1;
                }

                .overlay-content {
                    text-align: center;
                    color: white;
                }

                .overlay-content svg {
                    margin-bottom: 0.5rem;
                }

                .overlay-content span {
                    display: block;
                    font-weight: 600;
                    font-size: 1rem;
                }

                .card-content {
                    padding: 1.5rem;
                }

                .program-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                }

                .program-description {
                    color: #6c757d;
                    line-height: 1.6;
                    font-size: 0.95rem;
                }

                .learn-more-btn {
                    background: none;
                    border: none;
                    color: #633e98;
                    font-weight: 600;
                    cursor: pointer;
                    padding: 0;
                    margin-left: 0.5rem;
                    transition: color 0.3s ease;
                }

                .learn-more-btn:hover {
                    color: #f3ec1a;
                }

                /* Modal Styles */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    padding: 2rem;
                    backdrop-filter: blur(5px);
                }

                .modal-content {
                    background: white;
                    border-radius: 20px;
                    max-width: 900px;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    animation: modalSlideIn 0.3s ease;
                }

                @keyframes modalSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .modal-close {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: #633e98;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10;
                }

                .modal-close:hover {
                    background: #f3ec1a;
                    color: #633e98;
                    transform: scale(1.1);
                }

                .modal-body {
                    padding: 2rem;
                }

                .modal-header {
                    display: flex;
                    gap: 2rem;
                    margin-bottom: 2rem;
                    align-items: center;
                }

                .modal-image {
                    flex-shrink: 0;
                    width: 150px;
                    height: 150px;
                    border-radius: 20px;
                    overflow: hidden;
                    border: 4px solid #633e98;
                }

                .modal-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .modal-info {
                    flex: 1;
                }

                .modal-title {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                }

                .modal-description {
                    color: #6c757d;
                    line-height: 1.7;
                    font-size: 1rem;
                }

                .modal-description p {
                    margin-bottom: 1rem;
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .programs-grid {
                        grid-template-columns: 1fr;
                    }

                    .card-image-container {
                        height: 200px;
                    }

                    .modal-header {
                        flex-direction: column;
                        text-align: center;
                        gap: 1rem;
                    }

                    .modal-image {
                        width: 120px;
                        height: 120px;
                    }

                    .modal-title {
                        font-size: 1.5rem;
                    }

                    .modal-content {
                        margin: 1rem;
                        max-height: 95vh;
                    }

                    .modal-body {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProgramsData;