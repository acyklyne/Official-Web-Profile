import React from 'react';
import Card from '../SHARED/Card';

const About = () => {
  return (
    <section id="about" className="py-20 custom-bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-textSecondary mb-4">
              Hello! I'm [Your Name], a passionate Data Analyst with expertise in 
              transforming complex data into clear, actionable insights. My journey 
              in data analysis began at [University/First Job], and I've since 
              developed a strong foundation in statistical analysis, data visualization, 
              and business intelligence.
            </p>
            <p className="text-textSecondary">
              Currently, I work at [Current Company] where I focus on [specific 
              responsibilities or achievements]. I'm particularly interested in 
              [specific areas of interest or specialization].
            </p>
          </div>
          <Card className="text-textSecondary">
            <h3 className="text-xl font-bold text-textPrimary mb-4">
              Quick Facts
            </h3>
            <ul className="space-y-2">
              <li>🎓 [Your Degree] from [University]</li>
              <li>💼 [X] years of experience in data analysis</li>
              <li>📊 Specialized in [specific tools/technologies]</li>
              <li>🌟 Certified in [relevant certifications]</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;