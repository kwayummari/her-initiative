import React, { useEffect, useState } from 'react';

const Values = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: "Her Centric",
      description: "Our work is deeply rooted in a her-centric philosophy, ensuring that every initiative is designed with and for the needs, dreams, and aspirations, and rights of adolescent girls and young women at its core."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Inclusion",
      description: "We are committed to creating an environment where every adolescent girl and young woman feels valued, respected, and empowered, regardless of their abilities, gender, ethnicity, or any other aspect of their identity."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
          <path d="M12 2v2"/>
          <path d="M12 20v2"/>
          <path d="M4.93 4.93l1.41 1.41"/>
          <path d="M17.66 17.66l1.41 1.41"/>
          <path d="M2 12h2"/>
          <path d="M20 12h2"/>
          <path d="M6.34 6.34L4.93 4.93"/>
          <path d="M19.07 19.07l-1.41-1.41"/>
        </svg>
      ),
      title: "Innovation",
      description: "We believe in fostering a culture that encourages creativity, experimentation, and the development of novel solutions to address the unique challenges faced by young women and girls in Tanzania."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
      title: "Learning",
      description: "Her Initiative promotes a learning environment where knowledge is shared, skills are developed, and experiences are valued."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
        </svg>
      ),
      title: "Partnership",
      description: "We believe in the power of collaboration and actively seek to build strong, mutually beneficial relationships with various stakeholders, including government bodies, non-governmental organisations, private sector entities, and community groups."
    }
  ];

  return (
    <section className="values-section">
      <div className="container">
        <div className="values-header">
          <span className="section-badge">Our Foundation</span>
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            The core principles that guide our mission and drive our impact
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`value-card ${isVisible ? 'slide-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-icon">
                {value.icon}
              </div>
              <h3 className="card-title">{value.title}</h3>
              <p className="card-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .values-section {
          padding: 6rem 0;
          background: #f8f9fa;
        }

        .values-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          background: #633e98;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .value-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .value-card.slide-up {
          opacity: 1;
          transform: translateY(0);
        }

        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .card-icon {
          width: 80px;
          height: 80px;
          background: #633e98;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          transition: transform 0.3s ease;
        }

        .value-card:hover .card-icon {
          transform: scale(1.1);
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .card-description {
          color: #6c757d;
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .value-card {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Values;