import * as React from 'react';
import { useEffect, useState } from 'react';
import { Add } from "@mui/icons-material";
import { Avatar, Grid, CardMedia, CardContent, Card, Box, useMediaQuery, Modal, Typography } from "@mui/material";

const programData = [
    { image: "panda.jpg", title: "Panda on the Ground", subTitle: "Panda Digital", buttonText: '', description: "This is a project that aims at enabling young women to achieve financial freedom...", fullDescription: 'This is a project that aims at enabling young women to achieve financial freedom through income generation and job creation. This program targets women aged 18-35, both with and without existing businesses, providing theoretical and practical training and mentorship in entrepreneurial skills and mentorship on business development, mentorship and creating linkages to financial resources. Through an eight-week training program, young women without businesses learn the production of goods and services in sectors like agriculture, health, fashion, and beauty. Those with existing businesses benefit from one-on-one coaching to facilitate growth with a focus on facilitating business growth through one-on-one guidance on business development, financing and markets. Until today we have impacted 210 young women who by chance have managed to establish their businesses.' },
    { image: "planB.jpg", title: "Plan B Project", subTitle: "Plan B", buttonText: '', description: "Plan B Project provides education to out-of-school adolescent girls to fight gender...", fullDescription: 'Plan B Project provides education to out-of-school adolescent girls to fight gender-based violence whilst building their financial resilience through entrepreneurship training. The combination of these two interventions has proven to be effective in reducing gender-based violence, as it equips young women and girls with the information, skills, finances, and other tools to mitigate the risk of experiencing it, whilst helping survivors to recover.' },
    { image: "mshiko.jpg", title: "Mshiko Clubs", subTitle: "Mshiko Clubs", buttonText: '', description: "A project that aims at keeping girls in school by using a hybrid model of economic...", fullDescription: "A project that aims at keeping girls in school by using a hybrid model of economic empowerment and girls' agency empowerment to increase their interest to stay and enjoy school. Through this program, girls learn how to save money and are rewarded for successfully adopting saving habits. Specific activities in this project include financial literacy training on key concepts such as savings, the establishment of clubs, skills building on extracurricular income-generating activities and girls' agency empowerment to promote girls' self-esteem and self-efficacy to help girls stay and enjoy school as they embrace their journey to financial freedom." },
    { image: "digimali.jpg", title: "Digimali Clubs", description: "Digimali is a project is a project that focuses on enhancing the adaptation of digital business...", fullDescription: `Digimali is a project is a project that focuses on enhancing the adaptation of digital business operations among youth entrepreneurs to drive self-employment opportunities and maximize the target group’s eligibility for scaling up by improving their overall access to finance and expanding market reach. The program focuses on online business, digital business ecosystems, business finance literacy, and business management to drive self-employment opportunities and maximize the target group's eligibility to scale up their businesses. We've reached a total of 2265 youth across more than 26 regions in Tanzania, unlocking the potential for scaling up their businesses.` },
    { image: "panda1.jpg", title: "Panda Digital", description: "Panda Digital is the first Swahili hybrid e-learning platform that uses a website and...", fullDescription: `Panda Digital is the first Swahili hybrid e-learning platform that uses a website and AI SMS technology to enable access to skills, opportunities, personalized business support, and social justice for young women so that they can start and run smart businesses. Panda Digital exists to address the challenge of young women’s unemployment by providing an alternative learning curriculum that encourages self-employment using digital technologies to generate jobs and achieve financial freedom. To date, we have reached more than 5000 young women.` },
    { image: "fika.jpg", title: "Fikia + Project", description: "FIKIA+ is a program that aims at supporting comprehensive implementation of HIV...", fullDescription: `FIKIA+ is a program that aims at supporting comprehensive implementation of HIV prevention, testing, care and treatment, lab, and VMMC interventions at the community and facility level in Mwanza region in Tanzania. Her Initiative implemented this project in partnership with ICAP Columbia University in Tanzania together with local government authorities. In this project, Her Initiative supported People Living with HIV, Adolescent Girls and Young women (PLHIV AGYW) (15 – 24 years) with economic empowerment sessions tailored at creating demand for HIV testing and ART services in the Mwanza region. Her Initiative provided AGYW with training and mentorship on the use of business model canvas, digital marketing, economic empowerment concepts and entrepreneurial skills to promote livelihood and financial resilience. Fikia+ project intends to create awareness to PLHIV AGYW on digital skills on the use of digital technologies in doing business, so as they can utilize the economic opportunities found within their living areas.` },
    { image: "stawi.jpg", title: "Stawi LAB in Partnership with TWAA", description: "The 'Stawi Lab' (Flourish Lab in English) project is at the forefront of an ambitious ecosystem...", fullDescription: `The 'Stawi Lab' (Flourish Lab in English) project is at the forefront of an ambitious ecosystem-building initiative, with a singular goal: supporting youth-led organizations dedicated to championing the rights and interests of girls and women. Our approach is multifaceted, weaving together capacity-building, mentorship, and the provision of unrestricted seed grants. In our collective movement, these youth-led organizations ardently advocate for the decolonization of funding, rallying for research, data, and empirical evidence to underpin funding approaches that are not only inclusive but also imbued with deep meaning. To date, Stawi Lab has proudly supported 18 organizations across six regions in Tanzania, marking significant strides toward our commitment to empowering the next generation of change-makers. Stawi Lab’s mission is to empower youth-led organisations and create a supportive ecosystem where they can thrive.` },
    { image: "panda-movement.jpg", title: "Panda Digital Movement", description: "Panda Digital Movement is a project dedicated to tackling the challenges of unemployment...", fullDescription: `The Panda Digital Movement is committed to addressing the myriad injustices that impede women's bodily autonomy and economic empowerment, thereby hindering young women from realizing their full potential. These challenges include sextortion and sexual harassment.
    By leveraging technology, the Panda Movement expedites the reporting of sextortion cases and employs a Training of Trainers (TOT) model centered around young women, empowering them to lead the charge against all forms of gender-based violence. Over the past three years since 2021, the Panda Movement has fostered 30 anti-sextortion champions who have directly assisted over 800 young women and indirectly reached 25 million individuals through impactful online campaigns, raising awareness and offering effective strategies to combat sextortion.
    Within the Panda Digital ecosystem, the ONGEA Hub, a Swahili digital tool, serves as a crucial component of the Panda Movement, providing young female entrepreneurs with a platform to report incidents of sexual corruption and connect with authorities who offer legal, psychological, social, and emotional support. The ONGEA Hub serves as a vital link between young women and institutions like PCCS, facilitating the reporting of cases through its website or AI-powered SMS system. It stands as a beacon of hope for girls affected by sexual corruption, striving to offer a secure and dependable channel for them to provide evidence and access the assistance they require. Notably, this platform is distinguished by its inclusivity, catering to girls from all backgrounds, whether urban or rural, ensuring accessibility for all.` },
    { image: "youth.jpg", title: "Youth Employability Boot Camp", description: `This program focuses on honing the skills of young graduates, bridging the gap between...`, fullDescription: `This program focuses on honing the skills of young graduates, bridging the gap between theoretical knowledge and practical application. Through training, mentorship, and placements, we equip youth with essential technical and soft skills, increasing their employability in the job market. Central to the program is our commitment to promoting and increasing women's leadership in the corporate space. To date, we have impacted 145 youth graduates, providing them with essential skills and valuable placement opportunities.` },
]
function ProgramsData() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [openModal, setOpenModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const navigation = (programs) => {
        setSelectedProgram(programs);
        setOpenModal(true);
    }
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const renderLogos = () => {
        return <Grid container spacing={4} item xs={12}>
            {programData.map((programs, index) => (
                <Grid key={index} item xs={isMobile ? 12 : 4}>
                    <Card elevation={0} style={{ borderRadius: '20px', cursor: 'pointer', width: isMobile && '100vw' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={`/photos/${programs.image}`}
                            onClick={() => { navigation(programs) }}
                            className='cardImage'
                        />
                        <CardContent>
                            <div style={{ display: 'flex' }}>
                                <Avatar sx={{ bgcolor: '#f3ec1a', marginRight: '0px', marginLeft: '0px', marginTop: '20px' }}>
                                    <Add sx={{ color: '#000000' }} />
                                </Avatar>
                                <p onClick={() => { navigation(programs) }} className="programParagraph1">
                                    {programs.title}
                                </p>
                            </div>
                            <p onClick={() => { navigation(programs) }} className="programParagraph2">
                                {programs.description} <p style={{ color: '#633e98', fontWeight: 'bold' }} variant="contained" onClick={() => { navigation(programs) }}>View More</p>
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
            ))};
        </Grid>
    };

    return (
        <div className="approach">
            <div className="approachHeader" >
                <p></p>
                <p style={{paddingTop: '60px'}}>Our Programs</p>
            </div>
            <Box sx={{ marginLeft: !isMobile && "150px", marginRight: !isMobile && "150px", marginTop: "50px", marginBottom: '10px' }}>
                {renderLogos()}
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={{
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
                        }}
                    >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {selectedProgram && selectedProgram.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {selectedProgram && selectedProgram.fullDescription}
                        </Typography>
                    </Box>
                </Modal>
            </Box>
        </div>
    );
}

export default ProgramsData;
