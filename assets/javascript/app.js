var time = 100;
var intervalId;
var right = 0;
var wrong = 0;
var incomplete = 0;

$("#submit").click(stop);

function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      time--;
      $("#timer").html("<h3><strong>Time Remaining: " + time + "</h3></strong>");

      if (time === 0) {
      	stop();
      }
    }


function stop() {

	 clearInterval(intervalId);
	 var answers = $("input[type='radio']").filter(":checked");
	 for (i = 0; i < answers.length; i++) {
	 if ($(answers[i]).hasClass("right")) {
	 	right++;
	 }

	 if ($(answers[i]).hasClass("wrong")) {
	 	wrong++;
	 } 
	 console.log(answers);
	 console.log(right);
	 console.log(wrong);
	 $("#questions").html("Right: " + right + "<br>");
	 $("#questions").append("Wrong: " + wrong + "<br>");
	 $("#questions").append("Unanswered: " + (10 - right - wrong) + "<br>");
	 $("#questions").append("<img src=assets/images/hipster-dog.jpg>");
}
}

   	run();
