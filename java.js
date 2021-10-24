ques=["which is greater than 4","what is |26|","the centre of earth is very hot","what is the near the planet to sun","what is the rarest blood type","what is the largest known animal","how long does human RBC cell survive "];
opt=[[5,-5,-1/2,-25],[-26,26,0,1],["true","false"],["mercury","earth","venus","pluto"],["a+","b+","ab+","ab-"],["camel","horse","whale","dog"],["20 days","121 days","120 days","10 days"]]
answer=[1,2,1,1,4,3,3];
no=1;
total=0;
choice=[];
check=[];
checked=[];
corrected=[];
timeup=0;
qc=[];
score=0;
submitted=0;
choosed=-1;
ver=0;
time=ques.length*60;
function instructions (){
  document.getElementById("total").style.display="none";
  document.getElementById("ib").style.display="block";
  document.getElementById("instruct").style.display="none";
  document.getElementById("submitall").style.display="none";
}
function closer(){
  document.getElementById("total").style.display="block";
  document.getElementById("ib").style.display="none";
  document.getElementById("submitall").style.display="block";
}
for(d=0;d<ques.length;d++){
  check[d]=0;
  choice[d]=1;
  checked[d]=1;
  corrected[d]=0;
  answer[d]-=1;
}
var j=0;
for(l=0;l<ques.length;l++){
var i=Math.floor(Math.random()*ques.length);
var q=ques[i];
if(check[i]==0){
qc[j]=i;
j+=1;
var full=document.getElementById("total").innerHTML;
document.getElementById("total").innerHTML=full+"<br><div id=quest"+i+" class=ques-container><a id=ques"+i+"></a><br>&emsp;<div id=opt"+i+"></div>"+/*&ensp<input type=button id=submit"+i+" class=submit value='check answer' onclick=ans("+i+")>*/"<p id=sol"+i+"></p></div>"
for(d=0;d<opt[i].length;d++){
}
qu(i);
}else{
l-=1;
}
check[i]=1;
}
function qu(i){
document.getElementById("ques"+i).innerHTML="<b>Question "+no+":\n"+q+"</b>";
for(d=0;d<opt[i].length;d++){
var half=document.getElementById("opt"+i).innerHTML;
document.getElementById("opt"+i).innerHTML=half+"&emsp;<a class=op><input type=radio name=q"+i+" value="+opt[i][d]+" id="+opt[i][d]+"></a><label for="+opt[i][d]+">"+opt[i][d]+"</label><br>";
}
no+=1;
}
function ans(a,b=1,c=0){
  if(checked[qc[a]]>0){
    document.getElementById("quest"+a).style.border="3px double grey";
    var vv=document.getElementsByName("q"+a);
    var ch=c;
    var correct=0;
    var chs=-1;
    for(k=0;k<vv.length;k++){
        if(vv[k].checked){
        ch+=1;
        chs=k;
        if(corrected[a]==0){
        total+=1;
        corrected[a]=1;
        }
        }
    }
    if(chs==answer[a]){
        correct=1;
        if(corrected[a]==1){
        score+=1;
        corrected[a]=2;
        }
    }
    if(ch>0&&correct==0&&b==1){
    document.getElementById("quest"+a).style.border="3px double grey";
    checked [qc[a]]-=1;
    document.getElementById("sol"+a).innerHTML="<span style='color:red' >The correct answer is "+opt[a][answer[a]]+"</span>";
    //document.getElementById("submit"+a).style.background="grey";
    }else if(ch==0){
        document.getElementById("sol"+a).innerHTML="<span style='color:grey'>You should answer first</span>";
        document.getElementById("quest"+a).style.border="2px solid red";
    }else{
     document.getElementById("sol"+a).innerHTML="";
    }
    if(correct==1&&b==1){
      document.getElementById("quest"+a).style.border="3px double grey";
    document.getElementById("sol"+a).innerHTML="<span style='color:green'>Your answer is correct</span>";
    checked[qc[a]]-=1;
   // document.getElementById("submit"+a).style.background="grey";
}
}
}
function scorecard(){
  if(submitted==0){
if(timeup!=1){
  for(d=0;d<ques.length;d++){
   ans(d,0);
 }
}
  if(total==ques.length){
 document.getElementById("score").innerHTML="<div id=scorecard></div>"
 document.getElementById("scorecard").innerHTML="<a>Your score is "+score+"/"+(no-1)+" and Your percentage is "+(score/(no-1)*100).toFixed(2)+"%</a>";
 if(timeup!=1){
 for(d=0;d<ques.length;d++){
   ans(d);
   document.getElementById("sol"+d).disabled=true;
   choice[qc[d]]=0;
   ver=1;
 }
}
 document.getElementById("submitall").innerHTML="TEST SUBMITTED";
 if((score/(no-1)*100)<34){
   document.getElementById("bg").style.background="rgb(255,148,148)";
 }else if((score/(no-1)*100)<67){
   document.getElementById("bg").style.background="rgb(255,247,163)";
 }else{
   document.getElementById("bg").style.background="rgb(136,255,186)";
 }
 if(ver==1){
 submitted=1;
 if(time==0){
  document.getElementById("timer").innerHTML='TIME UP';
 }

 document.getElementById("submitall").style.background='grey';
 console.log("color changed");
 document.getElementById("instruct").style.display="none";
 }
 }
 }else{
   for(d=0;d<ques.length;d++){
     ans(d);
   }
 }
 }
 document.getElementById("timer").innerHTML="CALCULATING TIME"
 timer();
 function timer(){
 timing=setTimeout(out,1000);
 }
 function out(){
 minutes=time/60;
 second=time%60;
 minutes=Math.floor(minutes);
 if(time>=0){
 if(minutes<10){
   minute="0"+minutes;
 } else{
   minute=minutes;
 }
 if(second<10){
  seconds="0"+second;
} else{
  seconds=second;
}
if(time==0){
  for(d=0;d<ques.length;d++){
    checkans(d);
  }
  total=ques.length;
  submitted=0;
  ver=1;
  timeup=1;
  scorecard();
}
document.getElementById("timer").innerHTML=minute+" : "+seconds; 
if(time==0){
  document.getElementById("timer").innerHTML='TIME UP';
}
if(time>0){
timer();
}
time-=1;
 }
 }
 function checkans(a){
  if(checked[qc[a]]>0){
    document.getElementById("quest"+a).style.border="3px double grey";
    var vv=document.getElementsByName("q"+a);
    var correct=0;
    var chs=-1;
    for(k=0;k<vv.length;k++){
        if(vv[k].checked){
        chs=k;
        if(corrected[a]==0){
        total+=1;
        corrected[a]=1;
        }
        }
    }
    if(chs==answer[a]){
        correct=1;
        if(corrected[a]==1){
        score+=1;
        corrected[a]=2;
        }
    }
    if(correct==0&&chs!=-1){
      document.getElementById("quest"+a).style.border="3px double grey";
      checked [qc[a]]-=1;
      document.getElementById("sol"+a).innerHTML="<span style='color:red' >The correct answer is "+opt[a][answer[a]]+"</span>";
    }else if(chs==-1){
      document.getElementById("sol"+a).innerHTML="<span style='color:grey'>You have not answered the question in time</span>";
      document.getElementById("quest"+a).style.border="2px solid red";
  }
    if(correct==1){
      document.getElementById("quest"+a).style.border="3px double grey";
    document.getElementById("sol"+a).innerHTML="<span style='color:green'>Your answer is correct</span>";
    checked[qc[a]]-=1;
  }
  
  }
}