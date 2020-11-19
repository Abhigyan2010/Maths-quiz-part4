function sign_in() {
    Player1_name=document.getElementById("P1_name").value;
    Player2_name=document.getElementById("P2_name").value;
    localStorage.setItem("Player1_name",Player1_name);
    localStorage.setItem("Player2_name",Player2_name);
    window.location.replace("Game_page.html");
}