const firebaseConfig = {
    apiKey: "AIzaSyBQW7puRUts1Jei8GXCzxXoOIm0eg31Q64",
    authDomain: "kwitter-9b471.firebaseapp.com",
    databaseURL: "https://kwitter-9b471-default-rtdb.firebaseio.com",
    projectId: "kwitter-9b471",
    storageBucket: "kwitter-9b471.appspot.com",
    messagingSenderId: "863629544390",
    appId: "1:863629544390:web:1a348d4ccbc0b5b371c0c7"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("username");
  document.getElementById("username").innerHTML="Welcome "+user_name+"!";
  function addroom(){
        room_name=document.getElementById("roomname").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"Room Name"
        });
        localStorage.setItem("roomname",room_name);
      window.location="3rd_PG.html";
  }

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("roomname"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
});});}
getData();
function redirect(name){
console.log(name);
localStorage.setItem("room_name",name);

};
function logout(){
    window.location="index.html";
}