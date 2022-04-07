function validation (){
    var email=document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    

if (email.match(pattern)) {
    document.getElementById("demo").innerHTML = "This is a valid email!";
}
else {
    document.getElementById("demo").innerHTML = "This is invalid email !";

}
}