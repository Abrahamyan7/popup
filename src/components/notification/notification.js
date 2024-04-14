import React, {useState, useEffect} from 'react';
import  './notification.css';


const Notification = ({message, type}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const notificationClasses = `notification ${
    visible ? "visible" : ''
  } ${type === 'success' ? "success" : "error"}`;

  return <div className={notificationClasses}>{message}</div>;
};

export default Notification;