import styles from './Intro.module.css'

const Intro = () => (
  <>
    <div className={styles.intro}>
      <div className={styles.shortOne}>
        <p className={styles.greeting}>Bo Farish</p>
        <p className={styles.myTitle}>
          Full Stack <br />
          Web Developer
        </p>
      </div>
      <div className={styles.longOne}>
        <p>
          I am a full stack web developer. I’m experienced in <strong>HTML5</strong>
          , <strong>CSS3</strong> and <strong>JavaScript</strong> including modern libraries{' '}
          such as <strong>React</strong> and frameworks such as <strong>Next.js</strong>. In back end technologies I am experienced
          in <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>,
          and <strong>MySQL</strong>.
        </p>
        <p>
          I am a graduate of the JRS Coding School at the {' '}
          <a
            href="https://harborec.com"
            target="_blank"
            rel="noreferrer"
          >
            Harbor Entrepreneur Center
          </a>
          , here in Charleston, South Carolina. 
        </p>
        <p>
          This immersive program has helped to sharpen my skills in creating
          high functioning, clean, and aesthetically pleasing websites and applications. 
        </p>
      </div>
    </div>
  </>
)

export default Intro