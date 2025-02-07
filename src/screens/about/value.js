import React from 'react';
import { Heart, Users, Lightbulb, BookOpen, Handshake } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: <Heart size={32} />,
      title: "Her Centric",
      description: "Our work is deeply rooted in a her-centric philosophy, ensuring that every initiative is designed with and for the needs, dreams, and aspirations, and rights of adolescent girls and young women at its core."
    },
    {
      icon: <Users size={32} />,
      title: "Inclusion",
      description: "We are committed to creating an environment where every adolescent girl and young woman feels valued, respected, and empowered, regardless of their abilities, gender, ethnicity, or any other aspect of their identity."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "We believe in fostering a culture that encourages creativity, experimentation, and the development of novel solutions to address the unique challenges faced by young women and girls in Tanzania."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Learning",
      description: "Her Initiative promotes a learning environment where knowledge is shared, skills are developed, and experiences are valued."
    },
    {
      icon: <Handshake size={32} />,
      title: "Partnership",
      description: "We believe in the power of collaboration and actively seek to build strong, mutually beneficial relationships with various stakeholders, including government bodies, non-governmental organisations, private sector entities, and community groups."
    }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-4 text-purple fw-bold">Our Values</h2>
        <div className="mx-auto bg-warning" style={{ height: "3px", width: "100px" }}></div>
      </div>

      <div className="row g-4">
        {values.map((value, index) => (
          <div key={index} className="col-md-6">
            <div className="card h-100 border-0 shadow-sm value-card">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle bg-purple bg-opacity-10 p-3 me-3">
                    <div className="text-purple">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="h4 mb-0 text-purple">{value.title}</h3>
                </div>
                <p className="card-text fs-5 text-muted">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
          </div>
          <style>
              {`
              .value-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 1rem;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(99, 62, 152, 0.1) !important;
}

.icon-circle {
  border-radius: 50%;
}

.text-purple {
  color: #633e98;
}

.bg-purple {
  background-color: #FFF855;
}

@media (max-width: 768px) {
  .display-4 {
    font-size: 2.5rem;
  }
  
  .fs-5 {
    font-size: 1rem !important;
  }
}`}
          </style>
    </div>
  );
};

export default Values;