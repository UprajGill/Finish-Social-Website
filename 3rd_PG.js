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
  username=localStorage.getItem("username");
  roomname=localStorage.getItem("roomname");
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          name:username,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey;
   message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h3>"+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h3>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
 row=name_tag+message_with_tag+like_button+span_with_tag;
 document.getElementById("output").innerHTML=row;
} 
});
});
}
getData();
function updateLike(message_id){
 console.log("clicked on like button - " + message_id);
  button_id = message_id; likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1; console.log(updated_likes);
    firebase.database().ref(roomname).child(message_id).update({ like : updated_likes }); }
function logout(){
window.location="index.html";
localStorage.removeItem("username");
localStorage.removeItem("roomname");
}