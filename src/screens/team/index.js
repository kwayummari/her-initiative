import React from "react";
import AboutCarousel from "../about/aboutCarousel";
import Part1 from "../about/part1";
import { useMediaQuery } from "@mui/material";
import Members from "../home/member";
import Donations from "../about/donation";

function Team() {
    // const isMobile = useMediaQuery('(max-width:600px)');
    const programData = [
        { image: "vanessa.jpeg", title: "Vanessa Anyoti", subTitle: "Board Chair", buttonText: '', description: "Vanessa Anyoti who currently serves as the CEO of the Jakaya Mrisho Kikwete Foundation, is a seasoned ...", fullDescription: `Vanessa Anyoti who currently serves as the CEO of the Jakaya Mrisho Kikwete Foundation, is a seasoned professional holding a Master's degree in Epidemiology and Biostatistics. With a remarkable 8-year career spanning development, program management, and youth leadership, Vanessa showcases versatility and unwavering commitment in her field. Her global perspective is evident through significant roles in both national and international civil society organizations, reflecting her ability to navigate diverse cultural contexts.

        From Tanzania to Switzerland, Vanessa's impact resonates through her dedication to community-led change. Renowned for her emphasis on collaboration, she firmly believes in the transformative power of collective action to drive sustainable and inclusive development. Vanessa's leadership style is characterized by her dedication to fostering partnerships and empowering communities. Grounded in her belief in the potential of every individual, Vanessa envisions a future where societal progress is driven by the collective contributions of all.
        ` },

        { image: "lydia.jpeg", title: "Lydia Charles", subTitle: "Founder and Executive director", buttonText: '', description: "Lydia Charles Moyo, a 30-year-old Tanzanian feminist, is a dedicated leader and innovator....", fullDescription: `Lydia Charles Moyo, a 30-year-old Tanzanian feminist, is a dedicated leader and innovator committed to fostering social change. As the founder and executive director of Her Initiative, a non-governmental organization in Tanzania (www.herinitiative.or.tz), Lydia passionately empowers girls and young women, aiming to break the cycle of poverty and cultivate financial resilience. Additionally, she is the driving force behind Panda Digital (www.pandadigital.co.tz), the first Swahili hybrid e-learning platform for women in Tanzania, utilizing the website and AI SMS technology to provide essential skills, resources, and social justice to girls and young women business owners.

        With a diverse background in communication, leadership, and management, Lydia has accrued over 8 years of experience in local, and international development and media. Her impactful career includes roles such as the leader of the Girl Power team at Femina HIP, a producer for TV and radio programs at EFM, DTV, and Clouds Media Group, and a prominent advocate for adolescent and young women’s sexual and reproductive health. Lydia's innovative approach to economic empowerment and technology showcased through Panda Digital, addresses gender-based violence and strives to enhance the potential of young women. Recognized by various local and international organizations, she is a recipient of the +1 Global Fund by the RoddenBerry Foundation, UNDP Funguo 2022 Innovation Week, and has been nominated for the 2024 Global Citizen gender equality award. As a part of networks like the Goalkeepers community, Gender Equality Community, and the East Africa Young Women Leaders Mentorship Initiative, Lydia continues to make a significant impact on the lives of thousands of girls and young women in Tanzania and beyond, serving as a role model and catalyst for social change.
        ` },
        

        { image: "samuel.jpg", title: "Samwel Ndandala", subTitle: "Board member", buttonText: '', description: "Mr Ndandala, is an expert in economics, finance, and taxation, specializing in international tax and transfer ...", fullDescription: `Mr Ndandala, is an expert in economics, finance, and taxation, specializing in international tax and transfer pricing. As an associate director at Deloitte Consulting Tanzania, he brings a wealth of experience in advising corporate clients on transfer pricing, value chain strategy, and taxation. Samwel's expertise extends to compliance, consulting, planning, and dispute resolution, having worked with some of the world's largest multinationals and collaborated with tax authorities to resolve disputes and establish private rulings/APAs. With a Master's Degree from SOAS, University of London, and a Bachelor's degree in Accounting and Finance from Mzumbe University, Samuel is a certified chartered accountant, Certified Public Accountant (CPA-T), and a member of the Association of Chartered Certified Accountants (ACCA-UK). He actively contributes to thought leadership in economics and taxation, publishing articles in leading Tanzanian newspapers and engaging with professional and business associations such as ACCA, CPA (T), CEO’s Roundtable, and the British and European Union Business Groups.

        Beyond his professional endeavours, Mr Ndandala has a longstanding commitment to youth activism in Tanzania, serving leadership roles in organizations like Youth of the United Nations of Tanzania, where he held the position of national Treasurer. As the founder and inaugural president of the Tanzanian Association of Accounting, Auditing, and Finance Students, he demonstrates a passion for financial literacy, conducting personal finance training and workshops to empower young people with the skills needed to manage their finances effectively.
        ` },

        {image: 'anna.jpg', title: "Anna Meela Kulaya", subTitle: "Board Member", description: 'Anna Meela Kulaya has nearly two decades of service in the legal sector and has been an influential  ...', fullDescription: `Anna Meela Kulaya has nearly two decades of service in the legal sector and has been an influential figure in the community, specializing in networking, coalition building, advocacy, governance, law, gender, and development. Graduating with a Bachelor of Laws from the University of Dar es Salaam in 2000, Ms Kulaya has furthered her education with diplomas in Human Rights and Humanitarian Law from the Raoul Wallenberg Institute in Lund – Sweden, Leadership Development from St. Francis Xavier – Coady Institute Canada, and a Master's in Migration and Refugee Laws from the University of Dar es Salaam. Her journey with Women in Law and Development in Africa (WiLDAF) began in 2001 as a legal officer, evolving through various roles like Program Officer in Legal Education and Training, Program Officer in Advocacy, and Program Officer for Monitoring and Evaluation. Currently, as the National Coordinator of WiLDAF Tanzania, she oversees a team of 14 employees, showcasing her leadership and supervisory skills. 

        Ms Kulaya's extensive involvement includes chairing the Legal Aid Committee of the Tanganyika Law Society from 2014 to 2016, serving on the board of TANLAP (a network for legal aid providers), and holding the position of Board Chairperson for TANGO, an association comprising over 100 Civil Society Organizations. Notably, she played a pivotal role in coordinating the 16 Days of Activism against Gender-Based Violence (GBV) in Tanzania, transforming it into a national movement. Her commitment is further exemplified by her membership in the Committee of GBV Multi-Sectorial coordinated by the Ministry of Health, Community Development, Gender, Elderly, and Children.
        ` },

        { image: "andrew.jpg", title: "Andrew Mahiga", subTitle: "Board Member", buttonText: '', description: "Andrew Mahiga is a development professional, who currently serves as the Commercial Specialist at the...", fullDescription: `Andrew Mahiga is a development professional, who currently serves as the Commercial Specialist at the Embassy of the United States of America in Tanzania. With a background as the former Director of Policy, Research, Advocacy & Lobbying at the Tanzania Private Sector Foundation (TPSF), Andrew's expertise lies in policy engagement and formulation. His focus areas include enhancing the business environment, improving access to quality education, and fostering business and entrepreneurship skills development in Tanzania. 

        An influential thought leader, he actively engages in social commentary, particularly on youth empowerment, civic engagement, business development, and the broader innovation ecosystem in Tanzania. Andrew holds an MSc. in Public Policy & Management from SOAS, University of London, and a B.S. in International Studies from The City College of New York (CUNY).
        ` },

        { image: "emmanuel.jpg", title: "Emmanuel Kyarwenda", subTitle: "Board member", buttonText: '', description: "Emmanuel is a seasoned and accomplished business leader, boasting a remarkable 12-year track record across...", fullDescription: `Emmanuel is a seasoned and accomplished business leader, boasting a remarkable 12-year track record across diverse industries, including consulting, real estate, and manufacturing, within both public and private sectors. His expertise is underlined by a robust finance background, and he holds a proven record of successfully developing and leading high-performing teams. Emmanuel's noteworthy career includes pivotal roles at leading sugar and cigarette manufacturers in Tanzania, showcasing his strategic acumen and leadership prowess.

        Presently serving as the Finance Director at Coca-Cola Kwanza Limited, Emmanuel plays a pivotal role in crafting and executing the strategic plan while overseeing a dynamic finance team of 38 employees. His commitment to excellence is reflected in his active membership with the ACCA and his designation as a registered tax consultant with TRA, underscoring his dedication to professional growth and expertise in the finance domain. Emmanuel's multifaceted experience positions him as a valuable asset in steering organizations towards success.
        ` },

        {
            image: "catherine.jpg", title: 'Catherine Mwakasitu', subTitle: "Board member", buttonText: '', description: 'Catherine, a seasoned Finance and Risk professional with over 11 years of diverse experience, holds leadership...', fullDescription: `Catherine, a seasoned Finance and Risk professional with over 11 years of diverse experience, holds leadership roles in both the private and public sectors across Eastern and Southern Africa. Her demonstrated success as a leader spans the entire balanced scorecard within a business, showcasing proficiency in financial management, compliance, risk management, stakeholder engagement, corporate governance, strategy development, operations management, and business process improvement. As a certified fraud examiner, Catherine boasts a strong academic background in finance, graduating from Mzumbe University with a Bachelor of Accounting in Business Accounting and Finance in 2011. In 2022, she pursued a Master's in Business Administration at the Eastern and Southern African Management Institute.

            Currently overseeing finance and operations at Financial Sector Deepening Trust (FSDT), Catherine's responsibilities include managing administrative, operational, and contractual aspects of the trust. She provides oversight in finance, compliance, grants management, procurement, project delivery, program operations, talent management, and human resources. Previously a Senior Manager, Risk Advisory at Deloitte Consulting Limited, Catherine's expertise contributes to the smooth functioning of FSDT's governance, ensuring effective communication between the board and management. Her extensive background positions her as a valuable leader in the finance and risk management landscape.
            `}
    ];
    const teamData = [
        { image: "Her-Initiative-Organization-Profile-Design-41.jpg", title: "Lydia Charles Moyo", subTitle: "Founder and Executive Director", buttonText: '', },
        { image: "rajabu.jpg", title: "Rajabu Mohamed", subTitle: "Head Of Programs", buttonText: '', },
        { image: "Her-Initiative-Organization-Profile-Design-42.jpg", title: "Amanda Moses", subTitle: "Finance Officer", buttonText: '', },
        { image: "Her-Initiative-Organization-Profile-Design-43.jpg", title: "Tariq Ghusuob", subTitle: "Senior Communication Officer", buttonText: '', },
        { image: "Her-Initiative-Organization-Profile-Design-44.jpg", title: "Celine Julius", subTitle: "Partnerships Officer", buttonText: '',  },
        { image: "Nemes-Umela.jpg", title: "Nemes Umela", subTitle: "Monitoring and Evaluation Officer", buttonText: '', },
        { image: "wendy.png", title: "Wendy Shewiyo", subTitle: "Resource Mobilzation and Project Officer", buttonText: '', },
        { image: "nusura.jpeg", title: "Nusura Myonga", subTitle: "Project Lead and Monitoring and Evaluation Officer", buttonText: '',  },
        { image: "daniel.jpg", title: "Daniel Robert", subTitle: "Field and Communication Officer", buttonText: '', },
    ];
    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'Our Team'} heading3={'Home/Our Board'} />
            {/* <Programs /> */}
            <Members programData={programData} teamData={teamData} />
            <Donations />
        </div>
    );
}
export default Team;