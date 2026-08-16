import Background from '../background/background';
import Profile from '../profile/profile';
import Socials from '../socials/socials';
import Projects from '../projects/projects';

import styles from './app.module.css';

function App() {
  return (
    <>
      <Background intensity={3} origin='top-left' />
      <div className={styles.wrapper}>
        <aside className={styles.leftContent}>
          <Profile />
          <Socials />
        </aside>
        <Projects />
      </div>
    </>
  );
}

export default App;