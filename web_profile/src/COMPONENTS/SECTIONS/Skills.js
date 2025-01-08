import React from 'react';
import Card from '../SHARED/Card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      skills: ["SQL", "Python", "R", "Excel", "Statistical Analysis"]
    },
    {
      title: "Visualization",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn"]
    },
    {
      title: "Tools & Platforms",
      skills: ["AWS", "Google Analytics", "JIRA", "Git"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Leadership", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-primary/90">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <h3 className="text-xl font-bold text-textPrimary mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-textSecondary flex items-center"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;