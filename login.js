nameofstudent=["alan","alice","paul","peter","stark"];
users=["20BCS4036","20BCS4037","20BCS4038","20BCS4039","20BCS4040"];
passwords=["alan","alice","paul","peter","stark"];
var user;
var veri;
var password;
var op=-2;
function check(){
    var user;
    var veri;
    var password;
    var op=-2;
    user=document.getElementById("username").value;
    password=document.getElementById("password").value;
if(user==""||password==""){
document.getElementById("inc").style.display="block";
    document.getElementById("inc").innerHTML="you should fill all the fields";
    veri=0;
}else{
    document.getElementById("inc").style.display="none";
    veri=1;
}
if(veri==1){
for(d=0;d<users.length;d++){
    if(!(user.localeCompare(users[d]))){
      op=d;
    }else{
        if(op==-2){
        op=-1;
    }
}
}
if(op==-1||op==-2){
    document.getElementById("inc").style.display="block";
    document.getElementById("inc").innerHTML="Your Username or password is incorrect";
}else{
if(!(passwords[op]).localeCompare(password)){
    console.log("Your password is correct");
    window.location="https://cdn.jsdelivr.net/gh/suganth591/project/index.html";
}
else{
    document.getElementById("inc").style.display="block";
    document.getElementById("inc").innerHTML="Your Username or password is incorrect";
}
}
}
}
