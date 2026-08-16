import Box from '../box/box';
import styles from './profile.module.css';

function Profile() {
  return (
    <Box className={styles.profile}>
      <img
        src='/assets/lordcat.png'
        width={70}
        height={70}
        draggable={false}
      />
      <span>Lord Cat</span>
    </Box>
  );
}

export default Profile;