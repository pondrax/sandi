// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDJ75aporABBQmi2Da_kiQBy_rT4Jr1CpI",
  authDomain: "esign-apps.firebaseapp.com",
  projectId: "esign-apps",
  storageBucket: "esign-apps.appspot.com",
  messagingSenderId: "586264015120",
  appId: "1:586264015120:web:7e312630e350bb64383595",
  measurementId: "G-324TCXM89J"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});