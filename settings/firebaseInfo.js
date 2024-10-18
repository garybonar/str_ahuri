
   const firebaseConfig = {

    apiKey: "AIzaSyBONX5Vt55XdWfLNPQ244OQhI6yok8HWOY",

    authDomain: "short-term-rental-bbf7a.firebaseapp.com",

    databaseURL: "https://short-term-rental-bbf7a-default-rtdb.firebaseio.com",

    projectId: "short-term-rental-bbf7a",

    storageBucket: "short-term-rental-bbf7a.appspot.com",

    messagingSenderId: "621952460631",

    appId: "1:621952460631:web:e62c04c502a977a9370012"

  };
  
  firebase.initializeApp(firebaseConfig);  
  var rootRef = firebase.database().ref();