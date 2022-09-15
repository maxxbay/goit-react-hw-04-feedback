import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message }) {
  return (
    <div>
      <p className={s.message}>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
