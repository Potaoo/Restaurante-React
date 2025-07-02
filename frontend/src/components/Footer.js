import React from 'react';
import { Github, Linkedin } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className="footer-social text-center mt-auto py-4">
      <div className="social-icons mb-2">
        <a
          href="https://github.com/Potaoo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/caio-eduardo-a10685204/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>
      </div>
      <p className="credit">
        Caio Eduardo de Lima Domingues — 2025
      </p>
    </footer>
  );
}

export default Footer;
