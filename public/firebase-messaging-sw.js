importScripts(
  "https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDs7c3X16IeU7Fpm5nWpYAVH3ZPHDfXgYg",
  authDomain: "portfolio-b362b.firebaseapp.com",
  projectId: "portfolio-b362b",
  storageBucket: "portfolio-b362b.firebasestorage.app",
  messagingSenderId: "616499656335",
  appId: "1:616499656335:web:c690230e003433852e62fa",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Background message:",
    payload
  );

  const notificationTitle =
    payload.notification?.title ||
    "Portfolio Alert";

  const notificationOptions = {
    body:
      payload.notification?.body ||
      "Someone visited your portfolio.",
    icon: "/favicon.ico",
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});