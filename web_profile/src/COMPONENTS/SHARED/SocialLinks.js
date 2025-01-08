import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  const socials = [
    { icon: faGithub, link: 'https://github.com/yourusername' },
    { icon: faLinkedin, link: 'https://linkedin.com/in/yourusername' },
    { icon: faTwitter, link: 'https://twitter.com/yourusername' },
  ];

  return (
    <div className="flex space-x-4">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-textSecondary hover:text-secondary transition-colors duration-300"
        >
          <FontAwesomeIcon icon={social.icon} size="lg" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;