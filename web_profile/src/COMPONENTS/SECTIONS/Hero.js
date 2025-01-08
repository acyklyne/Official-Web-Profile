import React from 'react';
import Button from '../SHARED/Button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <p className="text-secondary mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-textPrimary mb-4">
          Acy Klyne Aguilar.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-textSecondary mb-6">
          I'm a Data Analyst.
        </h2>
        <p className="text-textSecondary max-w-xl mb-8">
          I'm a data analyst specializing in turning complex data into actionable insights.
          Currently, I'm focused on building data-driven solutions at [Company Name].
        </p>
        <div className="flex gap-4">
          <Button primary>View My Work</Button>
          <Button>Contact Me</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;