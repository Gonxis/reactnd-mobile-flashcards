import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';

const NOTIFICATIONS_KEY = 'NOTIFICATIONS';

// https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
export function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
};

export function clearLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFICATIONS_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
  return {
    title: 'Complete a quiz today',
    body: 'Don\'t forget to complete at least one quiz today!',
    ios: {
      sound: true
    },
    android:
    {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
};

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATIONS_KEY)
    .then(JSON.parse)
    .then(data => {
      // if notification already exists, set up a new one for tomorrow
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate());
              tomorrow.setHours(22);
              tomorrow.setMinutes(23);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              );

              AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true));
            }
          })
      }
    })
}
