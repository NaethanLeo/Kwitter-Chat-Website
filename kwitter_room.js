var firebaseConfig = {
      apiKey: "AIzaSyBT4CWxKUJ5QZ_NqaF4cAjoXayBwkMDuCA",
      authDomain: "kwitter-c294a.firebaseapp.com",
      databaseURL: "https://kwitter-c294a-default-rtdb.firebaseio.com",
      projectId: "kwitter-c294a",
      storageBucket: "kwitter-c294a.appspot.com",
      messagingSenderId: "891487358163",
      appId: "1:891487358163:web:7facfab0c7ef758516d826"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name;

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"  
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      
      firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("room name is " + Room_names);
      roomRow = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div> <hr>"; 
      document.getElementById("output").innerHTML += roomRow;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}