var x=screen.width;
var y=screen.height;
console.log(y);
console.log(x);

var x=0;
// document.getElementById("jumbotron").style.height=y+"px";
	function navbar() {
		
		
		document.getElementById("nav").style.height=y+"px";
		
		document.getElementById("nav").style.display = "block";
		document.getElementById("btn1").style.display="none";
		document.getElementById("btn").style.display="block";
		document.getElementById("nav").className="anime";
		// document.getElementById("sidebar-nav").className="side";
		
		}

	function back() {
		document.getElementById("btn1").style.display="block";
		document.getElementById("btn").style.display="none";
		document.getElementById("nav").style.display="none";
		document.getElementById("nav").className="animeback";
		// body...
	}
	function image() {
		document.getElementById("banner").style.height=y+"px";
		var z=y-y/3;
		document.getElementById("butn").style.top=z+"px";
		// document.getElementById("banner").style.width=x+"px";	
		// body...
	}