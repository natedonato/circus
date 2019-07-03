document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("body");
    const head = document.getElementById("head");
    const strobe = document.getElementById("strobe");    
    let interv = null;
    strobe.addEventListener("click", () => {
        if(interv){
            clearInterval(interv);
            interv = null;
            strobe.innerText = "Activate Strobe";
        }
        else{
        
        setTimeout ( () => {strobe.innerText = "Deactive Strobe";}, 200);
        interv = setInterval( () => {
            if(body.style.backgroundColor !== "white"){
                head.style.color = "black";
                body.style.backgroundColor = "white";}
            else{
                head.style.color = "white";
                body.style.backgroundColor = "black"; 
            }

            }, 200);    
        
        }
    });

});



// function flash (body, colors) {
//     let flash = setInterval( 
//         (body) => {
//         body.style.background = "FFFFFF";
//         body.style.background = "000000"; 
//         }, 100
//     );
// }