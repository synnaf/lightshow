window.onload = function() {

//funktion för att tända 
document.getElementById("start_button").addEventListener("click", startLights); 

// //funktion för atssst släcka
// document.getElementById("stop_button").addEventListener("click", stopLights); 

}; 

 
 
// function startLights() {
//   let div = document.getElementsByTagName('div');

//     for(let i=0; i<lightarray.length; i++) {
//         lightarray[i].style.backgroundColor = lightarray[i].style.backgroundColor == "yellow" ? "pink" : "yellow";
//     }
// }; 

// function startlights() {
//     setInterval(lights, 1500);
// }
// function lights() {
//     let div = document.getElementsByTagName("div");

//         for (let i = 0; i <div.length; i++) {
        
//                  div[i].style.background="red";
//             }
//         }

     
// function startlights() {
//     let x = 0;
//     function go() {
//         let div = document.getElementsByTagName("div");
//             div.forEach(div => {
//                 div.style.background="white";
//             }) 
//         if (x++ < 20) { setTimeout(go, 500) 
//         }
//     }
//     go();
//     return false;
// }          
 

//genom att sätta en delay innuti en funktion
function startLights() {
    let div = document.getElementsByTagName("div");
    for (let i = 0; i <= div.length; ++i) {
        setDelay(i);
    }
        
    function setDelay(i) {
        setTimeout(function(){
            console.log(div[i]); 
            div[i].setAttribute("class", "test");
        }, 1500 * i);
    }

}



// function setDelay(i) {
//     setTimeout(function() {
//         console.log(i); 
//     }, 2000); 
// }

