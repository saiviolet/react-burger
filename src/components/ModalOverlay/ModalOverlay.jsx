import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';
function ModalOverlay ({onClose}) {
  return (<div className={styles.modalOverlay} onClick={onClose}></div>);
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default ModalOverlay 