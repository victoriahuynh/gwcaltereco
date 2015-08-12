$(document).ready(function() {
  $("[data-toggle]").click(function() {
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open-sidebar");
  });
 

});
document.addEventListener('DOMContentLoaded', function(){
	var url = "15JK9k6Yr8xyQuJ5Ddvj-KgKaPLawzlKRGD6M_U5P3Ro";
	Tabletop.init({key: url, callback: funct, simpleSheet: true})
})
function dataInfo (name, type, other){
	this.name = name;
	this.type= type;
	this.other= other;
}


function funct(data){
	items=[];
	for(var i=0; i<data.length; i++){
		var item = new dataInfo((data[i]["name"]), (data[i]["crl"]), (data[i]["other"]));
		items.push(item);
	}
}

function move(event, inpu){
if(event.keyCode===13){pumpkin(inpu);}}

function pumpkin(inpu){
	var t= false;
	for(var i=0; i<items.length; i++){
		if((inpu.toLowerCase()===items[i].name)||(inpu.toLowerCase()===items[i].name+"s")){
		document.getElementById("logId").innerHTML="Item: "+items[i].name+ "<BR/>" +"Disposal method: "+items[i].type+"<BR/>"+"Special Conditions: "+items[i].other;
			t=true;
			document.getElementById('bu').style.visibility='hidden';
			break;
		}
	} if(t===false){
		document.getElementById("logId").innerHTML= "Sorry, we do not currently have "+ inpu+ " in our database. Would you like to add it as a suggestion? You will be redirected to a new page.";
		document.getElementById('bu').style.visibility='visible';
	}
}
 
$(".swipe-area").swipe({
    swipeStatus:function(event, phase, direction, distance, duration, fingers)
        {
            if (phase=="move" && direction =="right") {
                 $(".container").addClass("open-sidebar");
                 return false;
            }
            if (phase=="move" && direction =="left") {
                 $(".container").removeClass("open-sidebar");
                 return false;
            }
        }
});


$(document).ready (function(){
	var correctAnswers =["answer1a", "answer2b", "answer3a", "answer4c", "answer5b", "answer6a", "answer7c"];
	var quizName= "Recycle";
  	$(".theQuiz").append('Score:  of ');
   	var quizHeight = $(".theQuiz").height(),
	quizQuestionNos = $(".theQuiz li").size()-1,
	answers = [],
	submitted = 0;
   	$( ".theQuiz li" ).each(function() {
   		$( this ).css("height",quizHeight);
   	});
   	var thisID = $(this).closest(".quizQ").attr('id');
   	$("input").change(function(){
   		$(this).closest(".question").attr('id', 'checked');
   		thisAnswer = $(this).val();
   	});
   	$(".submit").click(function(){
   		if( $(this).closest(".question").attr('id') == "checked"){
   			//pageTracker._trackEvent("Quiz", "question answered", quizName + " - " + thisAnswer);
   			$(this).closest(".question").css({
   				"position": "absolute",
   				"top": "-" + quizHeight + "px",
   				"height": quizHeight-10 + "px",
   				"margin-bottom": "10px"
   			});
   			answers.push(thisAnswer);
   			checkCorrects();
   			submitted++;
   			if(submitted>=quizQuestionNos){
   				$(".theQuiz").addClass("finished");
   				//pageTracker._trackEvent("Quiz", "completed", quizName + " - " + corrects);
   				console.log("Number correct answers: " + corrects);
				document.getElementById("totalScore").innerHTML = "You got " +corrects+ " out of 7 correct!";
   			}
   		} 
   	});
   	//checkCorrects();
   	function checkCorrects(){
   		corrects = 0;
   		for(var i=0; i<=(quizQuestionNos-1) && i<=answers.length; i++){
   			if(answers[i] == correctAnswers[i]){
   				corrects++;
   			}
   		}
   		$("#correctAnswers").empty();
   		$("#potentialAnswers").empty();
   		$("#correctAnswers").append(corrects);
   		$("#potentialAnswers").append(quizQuestionNos);
   		var tidyName = quizName.replace(" ", "%20");
   		$(".nav-twitter").attr("href", "http://twitter.com/home?status=I've%20scored%20" + corrects + "%20out%20of%20" + quizQuestionNos + "%20in%20" + tidyName + ".%20How%20will%20you%20do?%20" + window.location.href);
   	};
})
   
var plastics = [];
var theItem = 0;
var Plastic = function(picture, description, significance) {
	this.significance = significance;
	this.description = description;
	this.picture = picture;
}
var plastic = new Plastic("https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Plastic-recyc-01.svg/50px-Plastic-recyc-01.svg.png",
"Usually found on clear plastics such as soda and water bottles. When recycled, it is used to make tote bags, furniture, carpeting, and polyester clothing. ",
"It is commonly recycled by recycling programs. However, harmful chemicals are used in the cleaning of the recycled material and the environmental impact may be harmful.");
plastics.push(plastic);
var plastic = new Plastic("https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Plastic-recyc-02.svg/50px-Plastic-recyc-02.svg.png",
"This is the stiff plastic used to make milk jugs, toys, and other plastic objects. It is durable and considered very safe.",
"The process used to recycle this type of plastic is cost-effective and environmentally friendly.");
plastics.push(plastic)
var plastic = new Plastic("https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Plastic-recyc-03.svg/50px-Plastic-recyc-03.svg.png",
"This is the plastic used in PVC. It is used in plastic food wrapping, bottles, and packaging.",
"This is not considered a safe plastic because it contains harmful toxins. Although people do recycle it, recycling centers usually dispose of it due to the difficulty of safely recycling it.");
plastics.push(plastic)
var plastic = new Plastic("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Plastic-recyc-04.svg/50px-Plastic-recyc-04.svg.png",
"Found in shrink wraps, squeezable bottles, and grocery bags, LDPE is a commonly used plastic. Products containing recycled LDPE are generally less durable than those made with other plastics.",
"LDPE is considered relatively safe but is only starting to be commonly recycled. Reuse is considered more efficient than recycling and objects made with LDPE should be reused if possible.");
plastics.push(plastic)
var plastic = new Plastic("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Plastic-recyc-05.svg/50px-Plastic-recyc-05.svg.png",
"Polypropylene is a tough and lightweight plastic that is highly heat-resistant. This is the plastic used for cereal bags, pails, yogurt containers, straws, and potato chip bags.",
"Only about 3% of polypropylene products are recycled but it is becoming more commonly accepted by recyclers.");
plastics.push(plastic)
var plastic = new Plastic("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Plastic-recyc-06.svg/50px-Plastic-recyc-06.svg.png",
"Polystyrene is an inexpensive and lightweight plastic used to make Styrofoam.",
"Polystyrene is considered extremely harmful to the environment as it leaches harmful chemicals into the environment. In addition, its weak structure causes it to break apart in landfills and be blown away, which often results in it entering the ocean. It is rarely recycled by recyclers and use of it should be avoided if possible.");
plastics.push(plastic)
var plastic = new Plastic("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Plastic-recyc-07.svg/50px-Plastic-recyc-07.svg.png",
"#7 plastics are mixed plastics which often include BPA, polycarbonate, and LEXAN. They are used in a variety of items. Confusingly, this category also includes compostable polymers such as plastics made from corn starch.",
"These items are rarely recyclable unless they have the PLA compostable coding. If they are compostable, they should be put in the compost collection bin.");
plastics.push(plastic)
var plastic = new Plastic("https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Plastic-recyc-abs.svg/50px-Plastic-recyc-abs.svg.png",
"ABS plastics fall into the same category as #7 plastics.",
"These plastics have the same considerations as #7 plastics.");
plastics.push(plastic)

function changePlastic() {
	theItem = theItem + 1
	if(theItem===plastics.length) {
		theItem = 0;
	};
	/*document.getElementById("theColor").style.color = colors[Math.floor(Math.random()*colors.length)];*/
	document.getElementById("significance").innerHTML = plastics[theItem].significance;
	document.getElementById("theDescription").innerHTML = plastics[theItem].description;
	document.getElementById("thePicture").src = plastics[theItem].picture;
}

function setPlastic0() {
	theItem = -1;
	changePlastic();
}

function setPlastic1() {
	theItem = 0;
	changePlastic();
}

function setPlastic2() {
	theItem = 1;
	changePlastic();
}

function setPlastic3() {
	theItem = 2;
	changePlastic();
}

function setPlastic4() {
	theItem = 3;
	changePlastic();
}

function setPlastic5() {
	theItem = 4;
	changePlastic();
}

function setPlastic6() {
	theItem = 5;
	changePlastic();
}

function setPlastic7() {
	theItem = 6;
	changePlastic();
}

function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}
