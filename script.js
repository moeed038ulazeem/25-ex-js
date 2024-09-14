var changer = document.getElementById("hitMe");
changer.addEventListener("click",function(){
    var body1 = document.getElementById('b1');
    if(body1.style.backgroundColor==="black"){
        body1.style.backgroundColor = "white";
        changer.innerText = "black mode";
        changer.style.backgroundColor="black";
        changer.style.color="white"
    }
    else{
        body1.style.backgroundColor = "white";
        changer.innerText = "white Mode";
        changer.style.backgroundColor="black";
        changer.style.color="white"
    }
  
})