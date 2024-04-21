import React, { useState, useEffect } from "react";
import './style.css';

function ImpactsCounter() {
    const [counters, setCounters] = useState([
        { icon: "fa fa-code", count: 0, targetCount: 900000, label: "Lines of code" },
        { icon: "fa fa-check", count: 0, targetCount: 280, label: "Projects done" },
        { icon: "fa fa-user", count: 0, targetCount: 75, label: "Happy clients" },
        { icon: "fa fa-coffee", count: 0, targetCount: 999, label: "Cups of coffee" }
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
        <section id="counter-stats" style={{justifyContent:'space-around'}} className="wow fadeInRight" data-wow-duration="1.4s">
            <div className="container">
                <div className="row">
                    {counters.map((counter, index) => (
                        <div key={index} className="col-lg-3 stats" style={{justifyContent: 'space-around', margin: '0 70px'}}>
                            <i className={counter.icon} aria-hidden="true"></i>
                            <div className="counting">{counter.count}</div>
                            <h5>{counter.label}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ImpactsCounter;
