const fs=require('fs');
fs.open("data.txt","w",(err,file))
var user;
var password;
function check(){
user=document.getElementById("username").value;
password=document.getElementById("password").value;
console.log(user);
if(user==""||password==""){
    document.getElementById("inc").style.display="block";
}else{
    document.getElementById("inc").style.display="none";
}
}