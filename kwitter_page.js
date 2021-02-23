//YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBS4KecuvTzmFVq3lDZkeD-zLgoBq6qV_o",
      authDomain: "kwitter-25c91.firebaseapp.com",
      databaseURL: "https://kwitter-25c91-default-rtdb.firebaseio.com",
      projectId: "kwitter-25c91",
      storageBucket: "kwitter-25c91.appspot.com",
      messagingSenderId: "205471128242",
      appId: "1:205471128242:web:35f9f004bb3475e06dc7ab",
      measurementId: "G-NY2X6G7H43"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    room_name = localStorage.getItem("room_name");
function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//End code
      } });  }); }
getData();
