window.addEventListener("DOMContentLoaded", () => {
    const succs = document.querySelectorAll("img");
    console.log(succs);

    succs.forEach(succulent => {
        succulent.addEventListener("mouseover", handleClick);
    });

    function handleClick (e) {
        let succulentNumber = this.getAttribute("data-number");
        this.addEventListener("transitionend", ()=>{
            this.style.transform = "none";
        });
        

        let deg = 360;
        if(Math.random() > 0.5){deg *= -1;}


        this.style.transform = `rotate(${deg}deg)`;
        // debugger;
        // this.style.transform = "rotate(0deg)";
    }

    

});