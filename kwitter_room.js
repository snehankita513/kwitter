var firebaseConfig = {
    apiKey: "AIzaSyAWTPV9djLVrZuy0LwY1NC5i40RZtI9auI",
    authDomain: "kwitter-5118b.firebaseapp.com",
    databaseURL: "https://kwitter-5118b-default-rtdb.firebaseio.com",
    projectId: "kwitter-5118b",
    storageBucket: "kwitter-5118b.appspot.com",
    messagingSenderId: "195623124323",
    appId: "1:195623124323:web:75b6198308c8d003c6a756",
    measurementId: "G-CMQNW9V5EP"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  ser_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function addroom()
{
  rom_name = document.getElementById("rom_name").value;

  firebase.database().ref("/").child(room_name).update({

    purple:"adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_room.html";

}


function getData()
{
   firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";

    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;

      Room_names = childKey; console.log("Room Name - " + Room_names);

       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

        document.getElementById("output").innerHTML += row;

        });

        });

        }

        (getData);


        function redirectToRoomName(name)
 {
    console.log(name);

   localStorage.setItem("room_name", name); 

   window.location = "kwitter_page.html";
   }


   function logout() 
   { 
         localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
           window.location = "kwitter.html";
       }
