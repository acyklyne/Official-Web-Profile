import React from 'react';
import Card from '../SHARED/Card';
import Button from '../SHARED/Button';

const Projects = () => {
  const projects = [
    {
      title: "Data Visualization Dashboard",
      description: "Created an interactive dashboard for sales analytics using Power BI",
      technologies: ["Power BI", "SQL", "DAX"],
      link: "#"
    },
    {
      title: "Predictive Analysis Model",
      description: "Developed a machine learning model for customer churn prediction",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      link: "#"
    },
    {
      title: "Automated Reporting System",
      description: "Built an automated reporting system using Python and SQL",
      technologies: ["Python", "SQL", "Automation"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary/90">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="transform hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-textPrimary mb-2">
                {project.title}
              </h3>
              <p className="text-textSecondary mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-sm text-secondary bg-secondary/10 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button href={project.link} className="w-full">
                View Project
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;