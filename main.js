console.log("hihi");

var sayWhat = document.getElementById("output");

var articleItems = document.getElementsByClassName("article-section");
console.log("article-seciton", articleItems);

for (var i = 0; i < articleItems.length; i++){
	// console.log("articleItems.item(i)", articleItems.item(i));
	articleItems.item(i).addEventListener("click", handleClick);
}

function handleClick(event){
	// console.log makes sure it's connected, shows us what we're accessing
	console.log(event);
	// Tells the program what to do when you click.
	var elementText = event.target.innerHTML;
	sayWhat.innerHTML = "You clicked on " + elementText;
}

var header = document.getElementById("page-header");

function handleHeaderMouseOver (event){
	sayWhat.innerHTML = "The force is strong with this one";
}

function handleHeaderMouseOut(event){
	sayWhat.innerHTML = "Remember... the Force will be with you, always";
}

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

// Scripting the Input Element

var inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", function(event){
	console.log("event", event);
	sayWhat.innerHTML = event.target.value;
});

// Obi-Wan's Message

var obiwan = document.getElementById("obi-wan");

document.getElementById("add-color")
	.addEventListener("click", function(){
		obiwan.classList.toggle("blue")
	});

document.getElementById("make-large")
	.addEventListener("click", function(){
		obiwan.classList.toggle("large")
	});

document.getElementById("add-border")
	.addEventListener("click", function(){
		obiwan.classList.toggle("bordered")
	});

document.getElementById("add-rounding")
	.addEventListener("click", function(){
		obiwan.classList.toggle("rounded")
	});

document.getElementById("add-gif")
	.addEventListener("click", function(){
		obiwan.classList.toggle("gif")
	});


// Event Bubbling

document.getElementById("wrapper").addEventListener("click", function(event){
	console.log("target", event.target);
	console.log("currentTarget", event.currentTarget);
	if (event.target.tagName.toLowerCase() === "li"){
		console.log("You clicked on an <li> element");
	}

	if (event.target.className === "article-section"){
		console.log("You clicked on an 'article-section' element");
	}

	if (event.target.id === "page-title"){
		console.log("You clicked on the page-title element")
	}
});


// Quotes

var quotesArray = [
	"A long time ago in a galaxy far, far away…",
	"Use the force, Luke.",
	"The force is strong with this one.",
	"Do. Or do not. There is no try.",
	"Fear is the path to the dark side.",
	"Someday I will be the most powerful Jedi ever.",
	"You were the chosen one!"
];

quotesArray.forEach(function(quote, index){
	var quoteBlock = `<div id="quote--${index}">
						<h3>"${quote}" --Star Wars</h3>
					  </div>`;
	var quoteDiv = document.createElement("div");
	quoteDiv.innerHTML = quoteBlock;
	document.getElementById("stickItHere").appendChild(quoteDiv);
	var quoteDom = document.getElementById(`quote--${index}`);
	quoteDom.addEventListener("click", function (event){
		console.log("clickEvent CT:", event.currentTarget, "T:", event.target);
		event.currentTarget.classList.add("red");
	});
});