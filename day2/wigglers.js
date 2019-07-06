window.addEventListener("DOMContentLoaded", () => {
    const succs = document.querySelectorAll("img");
    console.log(succs);

    succs.forEach(succulent => {
        succulent.addEventListener("click", handleClick);
    });

    function handleClick (e) {
        let succulentNumber = this.getAttribute("data-number");
        this.addEventListener("transitionend", ()=>{
            this.style.transform = "none";
        });
        
        this.style.transform = "rotate(360deg)";
        // debugger;
        console.log(succulentNumber);
        // this.style.transform = "rotate(0deg)";


    }

    

});