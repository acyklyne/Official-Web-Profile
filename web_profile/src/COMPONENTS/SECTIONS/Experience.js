import React, { useState } from 'react';
import Card from '../SHARED/Card';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Current Company",
      position: "Senior Data Analyst",
      duration: "2021 - Present",
      responsibilities: [
        "Led data analysis projects resulting in 30% efficiency improvement",
        "Developed automated reporting systems using Python and SQL",
        "Collaborated with cross-functional teams to implement data-driven solutions"
      ]
    },
    {
      company: "Previous Company",
      position: "Data Analyst",
      duration: "2019 - 2021",
      responsibilities: [
        "Conducted statistical analysis on large datasets",
        "Created interactive dashboards using Tableau",
        "Improved data collection processes by 40%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Work Experience</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`w-full text-left px-4 py-3 border-l-2 transition-all
                  ${activeTab === index 
                    ? 'border-secondary text-secondary' 
                    : 'border-textSecondary text-textSecondary hover:border-secondary hover:text-secondary'
                  }`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          <Card className="md:w-3/4">
            <h3 className="text-2xl font-bold text-textPrimary">
              {experiences[activeTab].position}
            </h3>
            <p className="text-secondary mb-4">
              {experiences[activeTab].duration}
            </p>
            <ul className="space-y-4">
              {experiences[activeTab].responsibilities.map((resp, index) => (
                <li 
                  key={index}
                  className="text-textSecondary flex items-start"
                >
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2" />
                  {resp}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;