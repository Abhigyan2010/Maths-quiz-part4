function sign_in() {
    P1_name=document.getElementById("P1_name").value;
    P2_name=document.getElementById("P2_name").value;
    localStorage.setItem("P1_name",P1name);
    localStorage.setItem("P2_name",P2name);
    window.location.replace("Game_page.html");
}