function activer(){
    let menuArea = document.getElementById("menu-area");
    if(menuArea.classList.contains('active') == true){
        menuArea.classList.remove('active');
    } else {
        menuArea.classList.add('active');
    }
}