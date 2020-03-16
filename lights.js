window.onload = function() {

//funktion för att tända 
document.getElementById("start_button").addEventListener("click", startLights); 

// //funktion för atssst släcka
document.getElementById("stop_button").addEventListener("click", stopLights); 

}; 



let div = document.getElementsByTagName("div");
    //genom att sätta en delay innuti en funktion
    function startLights() {

        for (let i = 0; i <= div.length; ++i) {
            setDelay(i);
        }
    }
            
    function setDelay(i) {
        setTimeout(() => {
            console.log(div[i]); 
            div[i].setAttribute("class", "test");
        }, 500 * i);
    }
    



//knappen stoppar 
function stopLights() {
  clearTimeout(startLights);
}
