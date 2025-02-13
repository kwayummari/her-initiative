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
            description: "Lydia Charles is a visionary feminist and a passionate dreamer....",
            fullDescription: `Lydia Charles is a visionary feminist and a passionate dreamer who has dedicated her life to supporting young women and girls through economic empowerment and technology. As the founder and Executive Director of Her Initiative, and the innovative mind behind Panda Digital, Lydia has been at the forefront of efforts to break the cycle of poverty and build financial resilience among young women, all while championing women’s and girls’ rights. Her achievements have not gone unnoticed; she is the proud recipient of the 2024 Global Citizen Prize and the KBF Africa Prize, reflecting her impact on the global stage.

Lydia has a rich background in communication, leadership, and management, having worked in international and local organizations and the private sector in various roles such as communications, ASRHR consultancy, and social change-making. She has over 10 years of experience working in international development and media.She is currently working to influence adolescents and young women’s financial freedom and women rights outcomes 

Lydia’s leadership style is deeply rooted in her core values of authenticity, Integrity,  innovation, and nurturing. She remains steadfast in her beliefs, prioritizing the needs of rural girls by customizing the Panda Digital platform in Swahili, ensuring that it remains accessible and free, despite pressures to monetize it for profit. 

Lydia measures success by an ability to turn dreams into reality, as evidenced by the creation of Her Initiative. Her journey is deeply personal, having grown up in a community where many girls were unable to complete their education due to extreme poverty and lack of resources. This experience fueled her passion for empowering girls to overcome these barriers. From launching self-esteem and rights awareness campaigns in secondary schools to a leading organization that promotes financial independence among young women at university, 

Her Motto
She believes that when girls are financially independent, they have a choice. Her motto is: “Girls should not be limited to dreams, the bigger the dream the bigger the chance.”

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
        {
            image: "Her-Initiative-Organization-Profile-Design-41.jpg", title: "Lydia Charles Moyo", subTitle: "Founder and Executive Director", buttonText: '', 
            fullDescription: `Lydia Charles is a visionary feminist and a passionate dreamer who has dedicated her life to supporting young women and girls through economic empowerment and technology. As the founder and Executive Director of Her Initiative, and the innovative mind behind Panda Digital, Lydia has been at the forefront of efforts to break the cycle of poverty and build financial resilience among young women, all while championing women’s and girls’ rights. Her achievements have not gone unnoticed; she is the proud recipient of the 2024 Global Citizen Prize and the KBF Africa Prize, reflecting her impact on the global stage.

Lydia has a rich background in communication, leadership, and management, having worked in international and local organizations and the private sector in various roles such as communications, ASRHR consultancy, and social change-making. She has over 10 years of experience working in international development and media.She is currently working to influence adolescents and young women’s financial freedom and women rights outcomes 

Lydia’s leadership style is deeply rooted in her core values of authenticity, Integrity,  innovation, and nurturing. She remains steadfast in her beliefs, prioritizing the needs of rural girls by customizing the Panda Digital platform in Swahili, ensuring that it remains accessible and free, despite pressures to monetize it for profit. 

Lydia measures success by an ability to turn dreams into reality, as evidenced by the creation of Her Initiative. Her journey is deeply personal, having grown up in a community where many girls were unable to complete their education due to extreme poverty and lack of resources. This experience fueled her passion for empowering girls to overcome these barriers. From launching self-esteem and rights awareness campaigns in secondary schools to a leading organization that promotes financial independence among young women at university, 

Her Motto
She believes that when girls are financially independent, they have a choice. Her motto is: “Girls should not be limited to dreams, the bigger the dream the bigger the chance.”

`
        },
        { image: "Her-Initiative-Organization-Profile-Design-43.jpg", title: "Tariq Ghusuob", subTitle: "Senior Officer, Communications and Projects", buttonText: '', 
            fullDescription: `Tariq Salim is a dynamic Senior Officer in Communications and Projects with extensive experience in digital analysis, communications strategy, branding, and project management. With a strong background in impact-driven and results-based communications, he plays a pivotal role in shaping organizational messaging, outreach, and public engagement.
Specializing in strategic storytelling, digital marketing, and stakeholder engagement, Tariq is committed to enhancing brand visibility and fostering meaningful conversations. His expertise in content creation, media relations, campaign execution, and project coordination ensures that both communication and programmatic efforts are data-driven, compelling, and effective.
As the leader of Strategic Objective One: Enabling Economic and Financial Freedom, Tariq spearheads initiatives that empower women and youth through entrepreneurship, financial literacy, and access to economic opportunities. His role in project design, implementation, and impact assessment ensures that programs are aligned with organizational goals and create tangible change.
Through his leadership in outreach, digital strategy, and project execution, Tariq strengthens organizational influence and program effectiveness, ensuring that communication efforts and development projects drive sustainable impact.
`
        },
        { image: "Her-Initiative-Organization-Profile-Design-42.jpg", title: "Amanda Moses", subTitle: "Finance and Administration Officer", buttonText: '', 
            fullDescription: `Amanda Mosses is a skilled Finance and Administration Officer, 
            responsible for ensuring the efficient financial management and operational support of organizational activities. With expertise in budgeting, financial reporting, compliance, and administrative coordination, she plays a crucial role in maintaining transparency and efficiency in financial operations.
<br />Passionate about organizational effectiveness and financial accountability, Amanda specializes in financial planning, resource management, and internal controls. Her role also extends to office administration, procurement, and logistics coordination, ensuring seamless day-to-day operations. Through her dedication, she contributes to the sustainability and smooth functioning of the organization
`
        },
        { image: "wendy.png", title: "Wendy Shewiyo", subTitle: "Resource Mobilization and Project Officer", buttonText: '', 
            fullDescription: `She is a Resource Mobilization and Project Officer at Her Initiative, bringing over six years of experience in resource mobilization and project management. She possesses technical skills and expertise in building and strengthening partnerships with diverse stakeholders for project implementation and resource mobilization. Her experience includes business development, project management, and managing stakeholders' financial landscapes. She is passionate about youth empowerment and believes in youth involvement for generational growth.`
        },
        
        { image: "Her-Initiative-Organization-Profile-Design-44.jpg", title: "Celine Julius", subTitle: "Partnership and Safeguarding Officer", buttonText: '', 
            fullDescription: `She is a Partnership and Safeguarding Officer with over years of experience in maintaining donor relations, securing partnerships, and safeguarding organizational interests. She excels in building relationships with private, public, and government stakeholders, ensuring mutual benefits and long-term success. Celine's expertise in partnership building has led to securing funding, expanding collaborative efforts, and implementing safeguarding measures to protect beneficiaries. Her leadership has fostered an environment where both beneficiaries and donors feel supported and confident. Celine's work continues to drive impactful outcomes and strengthen the organization's sustainability.`
        },
        { image: "Nemes-Umela.jpg", title: "Nemes Umela", subTitle: "Monitoring & Evaluation Officer", buttonText: '', 
            fullDescription: `Nemes Umela is a results-driven Monitoring & Evaluation (M&E) Officer, committed to ensuring data-driven decision-making for impactful development programs. With expertise in data collection, analysis, and performance tracking, Nemes plays a key role in assessing project effectiveness and improving implementation strategies.
Passionate about evidence-based development, he specializes in designing M&E frameworks, conducting impact assessments, and providing insights that enhance program efficiency and accountability. Through his work, Nemes contributes to strengthening project outcomes, ensuring that interventions deliver sustainable and measurable change.
`
        },
        
        { image: "nusura.jpeg", title: "Nusura Myonga", subTitle: "Project Lead & Assistant Monitoring & Evaluation Officer", buttonText: '', 
            fullDescription: `Nusura Myonga is a dedicated Project Lead and Assistant Monitoring & Evaluation (M&E) Officer, committed to ensuring the effective implementation and impact measurement of development initiatives. With expertise in project management, data analysis, and performance tracking, she plays a key role in both leading projects and supporting M&E functions.
<br />Passionate about evidence-based decision-making and community empowerment, Nusura specializes in program coordination, stakeholder engagement, and impact assessment. Her work bridges strategic planning and on-the-ground execution, ensuring that projects are efficient, accountable, and aligned with organizational goals.
`
        },
        { image: "daniel.jpg", title: "Daniel Robert", subTitle: "Field and Communications Officer", buttonText: '', 
            fullDescription: `A dedicated Field and Communications Officer with six years of experience in community-based projects, specializing in grassroots engagement and impact storytelling. Passionate about youth empowerment and sustainable development, he has led initiatives promoting digital literacy, entrepreneurship, and community resilience. With expertise in stakeholder engagement and content creation, He bridges the gap between organizations and the communities through meaningful and lasting impact.`
        },
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