console.log("Script running");

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCuhPpZelyyhjLkDqJgvKpYPd04gnFP5q8",
    authDomain: "annomessage-a0866.firebaseapp.com",
    databaseURL: "https://annomessage-a0866.firebaseio.com",
    projectId: "annomessage-a0866",
    storageBucket: "annomessage-a0866.appspot.com",
    messagingSenderId: "602900608015",
    appId: "1:602900608015:web:f92bb1ab14ea80fdc19f7a",
    measurementId: "G-J8TDQ4KG6R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//ref message collection
var messagesRef = firebase.database().ref('messages');

const loginbtn = document.getElementById('login');
const messageSubmit = document.getElementById('message-submit');
const formHodler = document.getElementById('login-container');
const messageHolder = document.getElementById('message-container');
const sentHolder = document.getElementById('sent-container');



const name = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const mesageTxt = document.getElementById('message-txt');






loginbtn.addEventListener('click', () => {
    if(name.value === '' || name.value === null){
        swal("Enter an username");
    }

    else if(email.value === '' || email.value === null){
        swal("Enter an E-mail");
    }


    else{
       


        formHodler.style.display = 'none';
        loginbtn.style.display = 'none';
    
        messageHolder.style.visibility = 'visible';
    }

   
});

messageSubmit.addEventListener('click', () => {
    messageHolder.style.display = 'none';
    sentHolder.style.display = 'inline';

    var usrName = name.value;
    var usrMail = email.value;
    var usrPass = pass.value;
    var usrMessage = mesageTxt.value;


    saveMessage(usrName, usrMail, usrPass, usrMessage);

    console.log(mesageTxt.value);
});



//function to get form values
function getInputvalue(id){
    return document.getElementById(id).value;
}




//save messages to firebase
function saveMessage(name, name, pass, message){
    var newMessageRef = messagesRef.push();

    newMessageRef.set({
        name: name,
        email: name,
        pass: pass,
        message: message
    });
}