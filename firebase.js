var firebaseConfig = {
    apiKey: "AIzaSyBezqSF7mnxjooda2qiDwwJzpUNktSQmoU",
    authDomain: "to-do-list-75b96.firebaseapp.com",
    projectId: "to-do-list-75b96",
    storageBucket: "to-do-list-75b96.appspot.com",
    messagingSenderId: "215221823415",
    appId: "1:215221823415:web:0b0407fd87fab5d502aa32",
    measurementId: "G-2HXMQZ28VP"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();