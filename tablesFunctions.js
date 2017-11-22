var varNumber2=1; //look for way to insert this number from click on nav (ie selected times table number)
var varUserAnswer;
var varActualAnswer;

function problem(timestable)
{
    number1 = Math.floor(1 + Math.random() * 12 );//generate random integer between 1 and 12

//
    var question = document.getElementById("question");
    question.innerHTML = "What is " + number1 + " x " + timestable + " ?<br/><br/>";
    actualAnswer = (number1*timestable);
}

function checkAnswer()  // look for way to save this function to .js file and call from page
{
    var varStatusDiv = document.getElementById("status");
    varUserAnswer=document.getElementById("answer").value;
    if(varUserAnswer != varActualAnswer)
    varStatusDiv.innerHTML="Oops! You either forgot to add your answer or it was wrong. Please try again.";
    else
    //if (varUserAnswer==varActualAnswer) - remove from all other pages!!!
    {
        varStatusDiv.innerHTML="Yes! Well done! You did it! Now try another :-)";
        document.getElementById("answer").value = "";
        problem(varNumber2);
    }
}
