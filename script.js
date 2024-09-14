// var changer = document.getElementById("hitMe");
// changer.addEventListener("click",function(){
//     var body1 = document.getElementById('b1');
//     if(body1.style.backgroundColor==="black"){
//         body1.style.backgroundColor = "white";
//         changer.innerText = "black mode";
//         changer.style.backgroundColor="black";
//         changer.style.color="white"
//     }
//     else{
//         body1.style.backgroundColor = "white";
//         changer.innerText = "white Mode";
//         changer.style.backgroundColor="black";
//         changer.style.color="white"
//     }
  
// })
var changer = document.getElementById("hitMe");
changer.addEventListener("click", function() {
    var body1 = document.getElementById('b1');
    
    if (body1.style.backgroundColor === "black") {
        // If the background color is black, change it to white
        body1.style.backgroundColor = "white";
        changer.innerText = "Dark Mode";
        changer.style.backgroundColor = "black";
        changer.style.color = "white";
    } else {
        // If the background color is not black (assumed to be white), change it to black
        body1.style.backgroundColor = "black";
        changer.innerText = "Light Mode";
        changer.style.backgroundColor = "white";
        changer.style.color = "black";
    }
});
