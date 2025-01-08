import React from 'react';
import SocialLinks from '../SHARED/SocialLinks';

const Footer = () => {
  return (
    <footer className="custom-footer py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <SocialLinks />
          <p className="mt-4 text-textSecondary text-sm">
            © {new Date().getFullYear()} YourName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;