import React, {useEffect, useState} from 'react';
import AboutCarousel from '../about/aboutCarousel';
import Part1 from '../about/part1';
import ReportsData from './programData';


function ReportsUser() {
    const [programData, setProgramData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://herinitiative.or.tz/her-api/api/reports/get_reports.php', {
                    method: 'POST',
                });
                const data = await response.json();
                console.log('Data fetched successfully:', data);
                setProgramData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, []);
    

    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'Our Reports'} heading3={'Home/Reports'} />
            {programData && <ReportsData programData={programData} />}
        </div >
    );
}

export default ReportsUser;
