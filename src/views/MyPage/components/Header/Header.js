import styles from './Header.module.css';
import { Link } from "react-scroll";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <nav className={styles.nav}>
        {/* <a href="/404">Blog</a> */}
        <a
          className={styles.contactLink}
          href="mailto:rwfarish@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
        <a> 
        <Link to="skillset" smooth={true} duration={500}> Skillset </Link>
          </a>
        <a> 
          <Link to="projects" smooth={true} duration={500}>
          Work 
          </Link>
          </a>
      </nav>
    </div>
  </header>
)

export default Header