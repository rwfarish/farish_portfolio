import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';
import { IconAlternate } from 'components/molecules';
import { Button } from '@material-ui/core';

const Footer = ({ noBorder }) => (
  <footer>
    <div className={noBorder ? styles.containerNoBorder : styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/bo-farish/"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/rwfarish"
            >
              <i class="fab fa-github fa-lg"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
