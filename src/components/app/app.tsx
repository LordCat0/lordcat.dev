import Background from '../background/background';
import Profile from '../profile/profile';
import Socials from '../socials/socials';

import styles from './app.module.css';

function App() {
  return (
    <>
      <Background intensity={2.5} origin='top-left' />
      <div className={styles.wrapper}>
        <aside className={styles.leftContent}>
          <Profile />
          <Socials />
        </aside>
      </div>
    </>
  );
}

export default App;