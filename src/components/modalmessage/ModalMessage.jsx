/* eslint-disable react/prop-types */
import styles from './ModalMessage.module.css'

const ModalMessage = ({ message }) => (
  <div className={styles.modal}>{message}</div>
)

export default ModalMessage
