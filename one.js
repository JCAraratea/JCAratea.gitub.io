function toggleMode(){
 

    document.body.classList.toggle("dark-mode");
 

    const button =
    document.querySelector(".dark-btn");
 

    if(document.body.classList.contains("dark-mode")){
        button.innerHTML = "☀️ Light Mode";
    }
    else{
        button.innerHTML = "🌙 Dark Mode";
    }
}