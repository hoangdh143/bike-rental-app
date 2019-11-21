import {NotificationManager} from 'react-notifications';
const timeout = 1000;

export const createNotification = (type, message) => {
    return () => {
        switch (type) {
            case 'info':
                NotificationManager.info(message, '', timeout);
                break;
            case 'success':
                NotificationManager.success(message, '', timeout);
                break;
            case 'warning':
                NotificationManager.warning(message, '', timeout);
                break;
            case 'error':
                NotificationManager.error(message, '', timeout, () => {
                    alert('callback');
                });
                break;
        }
    };
};