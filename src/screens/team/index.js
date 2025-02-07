import React from "react";
import AboutCarousel from "../about/aboutCarousel";
import Part1 from "../about/part1";
import Members from "../home/member";
import Donations from "../about/donation";

function Team() {
    const programData = [
        {
            image: "vanessa.jpeg", title: "Vanessa Anyoti", subTitle: "Chair of the Board",
            buttonText: '',
            description: `Vanessa Anyoti who currently serves as the CEO of the Jakaya
             Mrisho Kikwete Foundation, is a seasoned ...`,
            fullDescription: `Vanessa Anyoti, who currently serves as the CEO of the
             Jakaya Mrisho Kikwete Foundation, is a seasoned professional holding a
             Master's degree in epidemiology and biostatistics. With a remarkable 8-year
              career spanning development, program management, and youth leadership, Vanessa
               showcases versatility and unwavering commitment in her field. Her
               global perspective is evident through significant roles in both
               national and international civil society organizations, reflecting
               her ability to navigate diverse cultural contexts.
               <br />From Tanzania to Switzerland, Vanessa's impact resonates through
                her dedication to community-led change. Renowned for her emphasis on
                collaboration, she firmly believes in the transformative power of
                collective action to drive sustainable and inclusive development.
                Vanessa's leadership style is characterized by her dedication to
                fostering partnerships and empowering communities. Grounded in her belief
                 in the potential of every individual, Vanessa envisions a future where societal
                  progress is driven by the collective contributions of all.` },

        {
            image: "lydia.jpeg", title: "Lydia Charles", subTitle: "Founder & Executive Director, Her Initiative",
            buttonText: '',
            description: "Lydia Charles Moyo, a 31-year-old Tanzanian feminist, is a dedicated leader and....",
            fullDescription: `Lydia Charles Moyo, a 31-year-old Tanzanian feminist, is a dedicated leader and 
            innovator committed to fostering social change and economic empowerment for girls and young women.
            As the Founder and Executive Director of <a href="www.herinitiative.or.tz" target="_blank"> Her Initiative</a>, she works to
             break the cycle of poverty by promoting financial resilience and entrepreneurship. She is also
              the visionary behind <a href="www.pandadigital.co.tz" target="_blank"> Panda Digital</a> , Tanzania’s first Swahili hybrid
              e-learning platform that leverages AI SMS technology and digital resources to equip young women
               business owners with skills, financial literacy, and social justice advocacy. <br />
            With over eight years of experience in local and international development, media, and leadership,
             Lydia has played a pivotal role in advancing gender equality. Her career spans communication, leadership,
             and youth advocacy, including serving as Leader of the Girl Power Team at Femina HIP and producing
             TV and radio programs at EFM, DTV, and Clouds Media Group. She has been a strong voice for adolescent
              girls’ and young women’s sexual and reproductive health, integrating economic empowerment and
              technology-driven solutions to tackle gender-based violence through Panda Digital. <br />
            Lydia's groundbreaking work has been recognized globally, earning her multiple prestigious awards, including:
            <br />
            <ul>
            <li>KBF Africa Prize Laureate (2023-2024)</li>
            <li>2024 Global Citizen Gender Equality Award</li>
            <li>+1 Global Fund by the Roddenberry Foundation</li>
            <li>UNDP Funguo 2022 Innovation Week Prize</li>
            <ul>
		She is an alumna of the Community Leadership Institute (CLI) and actively engaged in networks such as Goalkeepers,
         Gender Equality Community, and the East Africa Young Women Leaders Mentorship Initiative. Through her relentless
         commitment and transformative leadership, Lydia continues to impact thousands of girls and young women in Tanzania
          and beyond, serving as a role model and catalyst for social change.
` },


        {
            image: "samuel.jpg", title: "Samwel Ndandala", subTitle: "Board member", buttonText: '',
            description: `Mr Ndandala, is an expert in economics, finance, and taxation, specializing in international
             tax and transfer ...`,
            fullDescription: `Mr. Ndandala, is an expert in economics, finance, and taxation, specializing in international
             tax and transfer pricing. As a partner at Deloitte Consulting Tanzania, he brings a wealth of experience
             in advising corporate clients on transfer pricing, value chain strategy, and taxation. Samwel's expertise
              extends to compliance, consulting, planning, and dispute resolution, having worked with some of the
              world's largest multinationals and collaborated with tax authorities to resolve disputes and establish
               private rulings/APAs. With a Master's Degree from SOAS, University of London, and a Bachelor's degree
                in Accounting and Finance from Mzumbe University, Samuel is a certified chartered accountant,
                Certified Public Accountant (CPA-T), and a member of the Association of Chartered Certified Accountants
                 (ACCA-UK). He actively contributes to thought leadership in economics and taxation, publishing articles
                  in leading Tanzanian newspapers and engaging with professional and business associations such as ACCA,
                  CPA (T), CEO’s Roundtable, and the British and European Union Business Groups. <br />
               Beyond his professional endeavours, Mr. Ndandala has a longstanding commitment to youth activism in
                Tanzania, serving leadership roles in organisations like Youth of the United Nations of Tanzania,
                where he held the position of national treasurer. As the founder and inaugural president of the
                Tanzanian Association of Accounting, Auditing, and Finance Students, he demonstrates a passion
                 for financial literacy, conducting personal finance training and workshops to empower young
                 people with the skills needed to manage their finances effectively.` },

        {
            image: 'anna.jpg', title: "Anna Meela Kulaya", subTitle: "Board Member",
            description: `Anna Meela Kulaya has nearly two decades of service in the legal sector 
            and has been an influential  ...`,
            fullDescription: `Anna Meela Kulaya has nearly two decades of service in the legal sector and has been an
            influential figure in the community, specializing in networking, coalition building, advocacy, governance,
            law, gender, and development. Graduating with a Bachelor of Laws from the University of Dar es Salaam in
            2000, Ms Kulaya has furthered her education with diplomas in Human Rights and Humanitarian Law from the
            Raoul Wallenberg Institute in Lund – Sweden, Leadership Development from St. Francis Xavier – Coady
            Institute Canada, and a Master's in Migration and Refugee Laws from the University of Dar es Salaam.
            Her journey with Women in Law and Development in Africa (WiLDAF) began in 2001 as a legal officer,
            evolving through various roles like Program Officer in Legal Education and Training, Program Officer
            in Advocacy, and Program Officer for Monitoring and Evaluation. Currently, as the National Coordinator
            of WiLDAF Tanzania, she oversees a team of 14 employees, showcasing her leadership and supervisory skills. <br />
            Ms. Kulaya's extensive involvement includes chairing the Legal Aid Committee of the Tanganyika Law Society
            from 2014 to 2016, serving on the board of TANLAP (a network for legal aid providers), and holding the
            position of Board Chairperson for TANGO, an association comprising over 100 Civil Society Organizations.
            Notably, she played a pivotal role in coordinating the 16 Days of Activism against Gender-Based Violence
            (GBV) in Tanzania, transforming it into a national movement. Her commitment is further exemplified by
            her membership in the Committee of GBV Multi-Sectorial coordinated by the Ministry of Health, Community
            Development, Gender, Elderly, and Children.` },

        {
            image: "andrew.jpg", title: "Andrew Mahiga", subTitle: "Board Member", buttonText: '',
            description: `Andrew Mahiga is a development professional, who currently serves as the 
            Commercial Specialist at the...`,
            fullDescription: `Andrew Mahiga is a seasoned development professional currently serving as the
             Country Director for the Department for Business & Trade at the British High Commission
             in Dar es Salaam, Tanzania. In this role, he leads efforts to strengthen trade and
             investment relations between Tanzania and the United Kingdom, fostering economic
             growth and business partnerships. <br />
            Before joining the British High Commission, Andrew was the Commercial Specialist
            at the Embassy of the United States of America in Tanzania, where he played a pivotal role in
            advancing commercial diplomacy and facilitating trade between Tanzanian and U.S. businesses. <br />
            Prior to his diplomatic engagements, Andrew served as the Director of Policy, Research, Advocacy
            & Lobbying at the Tanzania Private Sector Foundation (TPSF). His expertise in policy engagement
            and formulation contributed to creating a more enabling business environment, improving access to
            quality education, and fostering entrepreneurship and business development in Tanzania. <br />
            Beyond his professional roles, Andrew is an influential thought leader and social commentator,
            particularly on issues of youth empowerment, civic engagement, business development, and
            innovation in Tanzania. <br /> He holds an MSc. in Public Policy & Management from SOAS,
            University of London, and a B.S. in International Studies from The City College of New York (CUNY).` },

        {
            image: "emmanuel.jpg", title: "Emmanuel Kyarwenda", subTitle: "Board member", buttonText: '', description: "Emmanuel is a seasoned and accomplished business leader, boasting a remarkable 12-year track record across...",
            fullDescription: `Emmanuel is a seasoned and accomplished business leader, boasting a remarkable 
            12-year track record across diverse industries, including consulting, real estate, and manufacturing,
            within both public and private sectors. His expertise is underlined by a robust finance background,
            and he holds a proven record of successfully developing and leading high-performing teams. Emmanuel's
            noteworthy career includes pivotal roles at leading sugar and cigarette manufacturers in Tanzania,
            showcasing his strategic acumen and leadership prowess. <br />

Presently serving as the Finance Director at Coca-Cola Kwanza Limited, Emmanuel plays a pivotal role in crafting and executing the strategic plan while overseeing a dynamic finance team of 38 employees. His commitment to excellence is reflected in his active membership with the ACCA and his designation as a registered tax consultant with TRA, underscoring his dedication to professional growth and expertise in the finance domain. Emmanuel's multifaceted experience positions him as a valuable asset in steering organizations towards success.
` },

        {
            image: "catherine.jpg", title: 'Catherine Mwakasitu', subTitle: "Board member", buttonText: '',
            description: 'Catherine, a seasoned Finance and Risk professional with over 11 years of diverse experience, holds leadership...',
            fullDescription: `Catherine Mwakasitu – Head of Finance Operations, Vodacom Tanzania Plc <br />
            Catherine Mwakasitu is a seasoned Finance and Risk professional with over 11 years of experience
            spanning both the private and public sectors across Eastern and Southern Africa. She currently serves
             as the Head of Finance Operations at Vodacom Tanzania Plc, where she leads financial management,
             compliance, risk assessment, and operational efficiency initiatives within the organization. <br />
             Before joining Vodacom, Catherine was the Finance and Operations Lead at Financial Sector Deepening
             Trust (FSDT). In this role, she was responsible for overseeing finance, compliance, grants management,
             procurement, project delivery, and human resources, ensuring the smooth functioning of FSDT’s governance
             and effective communication between the board and management. <br />
             Previously, she worked as a Senior Manager, Risk Advisory at Deloitte Consulting
             Limited, where she specialized in risk management, compliance, and strategic financial
             consulting for various organizations. Her expertise extends across corporate governance,
             strategy development, business process improvement, and stakeholder engagement. <br />
             A Certified Fraud Examiner (CFE), Catherine holds a Bachelor’s degree in Business Accounting
              and Finance from Mzumbe University (2011) and pursued a Master’s in Business Administration
              at the Eastern and Southern African Management Institute in 2022. <br />
              Her extensive background and leadership in financial management and risk advisory position her
              as a key figure in Tanzania’s financial sector.
`}
    ];
    const teamData = [
        { image: "Her-Initiative-Organization-Profile-Design-41.jpg", title: "Lydia Charles Moyo", subTitle: "Founder and Executive Director", buttonText: '', },
        // { image: "rajabu.jpg", title: "Rajabu Mohamed", subTitle: "Head Of Programs", buttonText: '', },
        { image: "Her-Initiative-Organization-Profile-Design-42.jpg", title: "Amanda Moses", subTitle: "Finance Officer", buttonText: '', },
        { image: "Her-Initiative-Organization-Profile-Design-43.jpg", title: "Tariq Ghusuob", subTitle: "Senior Communication Officer", buttonText: '', },
        { image: "Her-Initiative-Organization-Profile-Design-44.jpg", title: "Celine Julius", subTitle: "Partnerships Officer", buttonText: '', },
        { image: "Nemes-Umela.jpg", title: "Nemes Umela", subTitle: "Monitoring and Evaluation Officer", buttonText: '', },
        { image: "wendy.png", title: "Wendy Shewiyo", subTitle: "Resource Mobilzation and Project Officer", buttonText: '', },
        { image: "nusura.jpeg", title: "Nusura Myonga", subTitle: "Project Lead and Monitoring and Evaluation Officer", buttonText: '', },
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