question_turn="Player1";
answer_turn="Player2";
function send(){
    Number1=document.getElementById("N1").value;
    Number2=document.getElementById("N2").value;
    actual_answer=parseInt(Number1)*parseInt(Number2);
    question_number="<h4>"+Number1+"X"+Number2+"</h4>";
    input_box="<br>Answer:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
function check(){
    get_answer=document.getElementById("input_check_box").value;
    if (get_answer==actual_answer){
        if (answer_turn=="Player1"){
            player1_score=player1_score+1;
            document.getElementById("P1_score").innerHTML=player1_score;
        } else{
            player2_score=player2_score+1;
            document.getElementById("P2_score").innerHTML=player2_score;
        }
        if (question_turn=="Player1"){
            question_turn="Player2";
            document.getElementById("question_turn").innerHTML=question_turn;
        } else{
            question_turn="Player1";
            document.getElementById("answer_turn").innerHTML=answer_turn;
        }
        if (answer_turn=="Player1"){
            answer_turn="Player2";
            document.getElementById("answer_turn").innerHTML=answer_turn;
        } else{
            answer_turn="Player1";
            document.getElementById("answer_turn").innerHTML=answer_turn;
        }
    }
}