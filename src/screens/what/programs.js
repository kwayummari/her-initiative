import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography } from '@mui/material';

const ProgramsData = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const programData = [
        { image: "panda.jpg", title: "Panda on the Ground", subTitle: "Panda Digital", buttonText: '', description: "This is a project that aims at enabling young women to achieve financial freedom...", 
            fullDescription: `Panda Digital is a Swahili hybrid e-learning platform using a website and AI SMS to empower young women with skills, business support, and social justice. It tackles unemployment by promoting self-employment and has impacted over 7,000 women, bridging the digital gender gap and addressing sextortion. Panda Digital is a Swahili hybrid e-learning platform using a website and AI SMS to empower young women with skills, opportunities, personalized business support, and social justice. It tackles unemployment by promoting self-employment using digital technologies to generate jobs and achieve financial freedom. It also addresses sextortion challenges by offering legal and psychological aid via its ONGEA HUB. 
Panda Digital has made significant achievements, including recognition from the Ministry of Health, the Roddenberry Foundation, and Global Citizen. Its impact includes empowering 7,289 women with the skills to start and run smart businesses, 2,806 businesses digitised, and 3,274 sign-ups via AI SMS. Additionally, the platform has reached 31 regions, with 4,015 online sign-ups. Over the next five years, Panda Digital aims to support 50,000 women, expand its reach by 70% in Tanzania and 30% in East Africa, and establish university clubs to foster digital literacy and innovation to 6000 students.
` },
        { image: "planB.jpg", title: "Plan B Project", subTitle: "Plan B", buttonText: '', description: "Plan B Project provides education to out-of-school adolescent girls to fight gender...", 
            fullDescription: 'Plan B project aims to support out of school adolescent girls,unemployed and young mothers aged (15-24) in Tanzania overcoming barriers of gender based violence whilst building their financial resilience through entrepreneurship skills and seed support resources. Since its inception, Plan B has empowered 108 girls in Kisarawe District, helping 40 of them start businesses and join saving groups. The project has increased advocacy and leadership skills, improved confidence, and raised awareness about gender-based violence within the community. Plan B aims to support 1,000 girls over the next five years, providing resources, education, and mentorship to build sustainable livelihoods. It combines gender-based violence prevention with financial literacy, offering holistic support through non-traditional education, business pitching, and seed funding. The project also engages local communities and government officials to foster inclusivity and resilience.The program reduces violence risk by equipping girls with skills, finances, and support, aiding both prevention and recovery.' },
        { image: "mshiko.jpg", title: "Mshiko Clubs", subTitle: "Mshiko Clubs", buttonText: '', description: "A project that aims at keeping girls in school by using a hybrid model of economic...", 
            fullDescription: "Mshiko clubs is a project that aims at setting a road map to financial freedom for girls (14-19) in schools by using a hybrid model of economic empowerment that includes the adoption of good financial behaviours, extracurricular income-generating activities, and girls agency empowerment to promote girl’s self-esteem and self-efficacy that help girls stay and enjoy school. Since its launch, the project has established five clubs with around 500 girls in Dar es Salaam, providing training in financial management, rights-based education, and income-generating activities. Over the next five years, Mshiko Clubs plan to reach 2,500 adolescent girls, enhancing their financial and academic skills. The initiative also aims to increase academic excellence using digital resources and foster community support by sensitising teachers, parents, and local leaders to promote positive perceptions of girls' education. Mshiko Clubs keep girls in school by blending economic empowerment with agency-building. Girls learn saving habits, receive financial literacy training, and engage in income-generating activities, boosting self-esteem and financial freedom, all while fostering a positive school experience." },
        { image: "digimali.jpg", title: "Digimali Clubs", description: "Digimali is a project is a project that focuses on enhancing the adaptation of digital business...", 
            fullDescription: `DigiMali comes from the two Swahili words “Digitali na Mjasiliamali” translating to “Digital and Entrepreneur” in English, the project aims to transform and uplift communities through the power of digital literacy and technology. The program intends to boost self-employment by training young entrepreneurs to run sustainable businesses, helping them transform traditional businesses into digital enterprises. Since its inception, DigiMali has directly empowered 201 individuals and reached an additional 2,806 through its Training of Trainers (TOT) model. The project's future goals train 500  youth and women business owners to reach 12,000 youth business owners beneficiaries over the next five years transforming their traditional business to digital business.` },
        { image: "panda1.jpg", title: "Panda Digital", description: "Panda Digital is the first Swahili hybrid e-learning platform that uses a website and...", 
            fullDescription: `Panda Digital is the first Swahili hybrid e-learning platform that uses a website and AI SMS technology to enable access to skills, opportunities, personalized business support, and social justice for young women so that they can start and run smart businesses. Panda Digital exists to address the challenge of young women’s unemployment by providing an alternative learning curriculum that encourages self-employment using digital technologies to generate jobs and achieve financial freedom. To date, we have reached more than 5000 young women.` },
        { image: "fika.jpg", title: "Fikia + Project", description: "FIKIA+ is a program that aims at supporting comprehensive implementation of HIV...", 
            fullDescription: `The FIKIA+ Project targets HIV prevention and economic empowerment for Adolescent Girls and Young Women (AGYW) aged 15-24 living with HIV (PLHIV). So far, the project has supported 103 AGYW in Nyamagana district, Mwanza region by providing economic empowerment, agency empowerment and comprehensive SRH education to create demand for HIV testing services and retention to treatment services among AGYW PLHIV (15-24) in Tanzania. The project formed 6 business groups and established 35 businesses, providing training in digital marketing and business skills to foster economic opportunities and encourage HIV testing and ART uptake. The project utilizes peer-led education, data-driven SRH sessions, and mobile clinics to improve community-centered service delivery and economic resilience. FIKIA+ integrated HIV prevention, care, and economic empowerment for AGYW aged 15-24 in Mwanza. The program trains participants in business and digital skills, supporting health and economic opportunities for young women, enhancing HIV treatment access and retention. ` },
        { image: "stawi.jpg", title: "Stawi LAB in Partnership with TWAA", description: "The 'Stawi Lab' (Flourish Lab in English) project is at the forefront of an ambitious ecosystem...", 
            fullDescription: `The 'Stawi Lab' (Flourish Lab in English) project is at the forefront of an ambitious ecosystem-building initiative, with a singular goal: supporting youth-led organizations dedicated to championing the rights and interests of girls and women. Our approach is multifaceted, weaving together capacity-building, mentorship, and the provision of unrestricted seed grants. In our collective movement, these youth-led organizations passionately advocate for the decolonization of funding, rallying for research, data, and empirical evidence to underpin funding approaches that are not only inclusive but also imbued with deep meaning. To date, Stawi Lab has proudly supported 38 organizations across six regions in Tanzania, marking significant strides toward our commitment to empowering the next generation of change-makers. Stawi Lab’s mission is to 100 empower youth-led organizations and create a supportive ecosystem where they can thrive.` },
        { image: "panda-movement.jpg", title: "Panda on the Ground", description: "Panda Digital Movement is a project dedicated to tackling the challenges of unemployment...", 
            fullDescription: `Panda on the Ground is a project that aims at planting a seed of financial freedom for women aged 18-35 who have the desire to start businesses through income generation and job creation. The program offers hands-on entrepreneurial training, mentorship, and financial linkages, impacting 210 women who have launched their businesses. Panda on The Ground enables financial freedom for women aged 18-35 through income generation and job creation. The program offers hands-on entrepreneurial training, mentorship, and financial linkages, impacting over 210 women to launch businesses, and fostering financial independence and job creation. Over the next five years, the program aims to support 500 women in starting and formalizing businesses, enhancing digital skills, and promoting job creation, aiming for a 70% success rate in sustaining businesses. This initiative is expected to generate around 1,500 new jobs, significantly impacting the livelihoods of women and fostering economic growth in their communities.` },
        { image: "youth.jpg", title: "Youth Employability Boot Camp", description: `This program focuses on honing the skills of young graduates, bridging the gap between...`, 
            fullDescription: `The Youth Employability Boot Camp (YEB) focuses on honing the skills of young graduates, bridging the gap between theoretical knowledge and practical application. Through training, mentorship, and placements, we equip youth with essential technical and soft skills, increasing their employability in the job market. This initiative focuses on providing youth with vocational skills to enhance professional skills and competence through comprehensive training in CV writing, cover letters, digital skills, and business acumen, supported by mentorship and job placements. Having already assisted 145 graduates, YEB plans to support 1000 graduates annually over the next five years, including 50 with disabilities. The program will also engage 250 employers, 30 mentors, 50 trainers, and 2 government agencies to ensure a holistic approach to career development. Employers provide job opportunities and insights into market needs, mentors offer guidance and support, trainers deliver essential skills, and government agencies help align the program with broader employment and inclusion policies. This comprehensive approach aims to enhance employability, promote inclusivity, and foster sustainable career growth.This boot camp bridges the gap between theoretical knowledge and practical skills for young graduates. Through training, mentorship, and placements, it enhances employability and promotes women’s leadership, impacting 145 graduates with essential skills and opportunities.` },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleOpenModal = (program) => {
        setSelectedProgram(program);
        setOpenModal(true);
    };

    return (
        <div className="container-fluid px-0">
            <div className="text-center py-5 bg-light">
                <h2 className="display-4 text-purple mt-5">Our Programs</h2>
                <div className="mx-auto bg-warning" style={{ height: "3px", width: "100px" }}></div>
            </div>

            <div className="container py-5">
                <div className="row g-4">
                    {programData.map((program, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-sm program-card">
                                <img 
                                    src={`/photos/${program.image}`} 
                                    className="card-img-top program-image"
                                    alt={program.title}
                                    onClick={() => handleOpenModal(program)}
                                />
                                <div className="card-body">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="rounded-circle bg-warning p-2 me-3 mt-2">
                                            <i className="bi bi-plus text-dark"></i>
                                        </div>
                                        <h5 className="card-title mb-0 fw-bold">{program.title}</h5>
                                    </div>
                                    <p className="card-text">
                                        {program.description}
                                        <button 
                                            className="btn btn-link text-purple p-0 ms-1 text-decoration-none fw-bold"
                                            onClick={() => handleOpenModal(program)}
                                        >
                                            View More
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MUI Modal */}
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '10px',
                    maxWidth: '80vw',
                    maxHeight: '80vh',
                    overflowY: 'auto',
                }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        {selectedProgram?.title}
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {selectedProgram?.fullDescription}
                    </Typography>
                </Box>
            </Modal>

            <style>
                {`
                .text-purple {
    color: #633e98;
}

.program-card {
    transition: transform 0.3s ease;
    border-radius: 1rem;
    overflow: hidden;
}

.program-card:hover {
    transform: translateY(-5px);
}

.program-image {
    height: 300px;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.program-card:hover .program-image {
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .display-4 {
        font-size: 2rem;
    }
}`}
            </style>
        </div>
    );
};

export default ProgramsData;