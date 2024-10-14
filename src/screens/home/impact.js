import { Add } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import * as React from 'react';
import { useEffect, useState } from 'react';

function Impact() {

    const [counters, setCounters] = useState([
        { count: 0, targetCount: 19044, label: "Young women were directly reached, with an additional 25,000,000 young women indirectly reached." },
        { count: 0, targetCount: 3330, label: "Young women entrepreneurs adopted digital operations, with 210 starting new businesses." },
        { count: 0, targetCount: 8385, label: "Young women accessed skills and opportunities through the Panda Digital website and SMS services" },
        { count: 0, targetCount: 38, label: "Youth-led organizations received support, empowering 145 youth with employability skills." },
        { count: 0, targetCount: 250, label: "Adolescent girls from 5 Mshiko clubs in 5 Secondary schools gained entrepreneurial, and life skills through tailored training" },
        { count: 0, targetCount: 108, label: "Out-of-school girls gained economic independence, confidence in addressing GBV, and leadership skills." }
    ]);

    useEffect(() => {
        const animateCounters = () => {
            counters.forEach((counter, index) => {
                const interval = setInterval(() => {
                    if (counter.count < counter.targetCount) {
                        setCounters(prevCounters => {
                            const newCounters = [...prevCounters];
                            newCounters[index].count += Math.ceil((counter.targetCount - counter.count) / 100);
                            return newCounters;
                        });
                    } else {
                        clearInterval(interval);
                    }
                }, 30);
            });
        };

        animateCounters();
    }, []);

    return (
        <div className='impact'>
            <div className="impactHeader">
                <p></p>
                <p>Our Impact</p>
            </div>
            <div className="impactContainer">
                <div className="topContainer">
                    <div className="topContainerText">
                        <p></p>
                        {counters.map((impact, index) => (
                            <div key={index} className="impactsList">
                                <Avatar sx={{ bgcolor: '#f3ec1a', marginRight: '0px', marginLeft: '30px', marginTop: '20px' }}>
                                    <Add sx={{ color: '#000000' }} />
                                </Avatar>
                                <p><span style={{ color: '#f3ec1a', fontWeight: '700', fontSize: '15px' }}>{impact.count}</span> {impact.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bottomContainer">
                <img src="/photos/impact1.jpg" alt="logo" className="bottomContainerImage" />
            </div>
        </div>

    );
}

export default Impact;
