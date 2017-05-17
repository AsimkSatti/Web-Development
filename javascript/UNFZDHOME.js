
function opennav(){
	var navigation=document.getElementById("nav");
//	var retrieve=document.getElementById("navi");
	var lux=document.getElementById("Luxury");
	opdown(navigation);
	move(lux);


}

var show="noshow";
function opdown(navigation){
	if(show=="noshow"){
		navigation.style.cssText="display:initial;"
		show="show";
	}


	else{
		navigation.style.cssText="display:none";
		show="noshow";
	}
}




var loc="moveit";
function move(lux){
	
	if(loc=="moveit"){
		TweenLite.to(logo, 0.2, {top:270});

		loc="back";
	}
	else{

		TweenLite.to(logo, 0.2, {top:90});
		loc="moveit";

	}
}



var image_tracker="first";


function change1(){
	var image=document.getElementById("sf");
		if (image_tracker=="first"){
		image.src="UFimgs/sfgarden.png";
		image.style.css=""

		image_tracker="second";
	}
	

	else if(image_tracker=="second") {
		image.src="UFimgs/OPpix.png";
		image_tracker="third";
	}
	else{
		image.src="UFimgs/UNFZDnewjapan.png";
		image_tracker="first";
	}
	
}
function change2(){
	var image=document.getElementById("gold");
	if(image_tracker=="first"){
		image.src="UFimgs/YUKKI.jpg";
		
		image_tracker="second";

	}
	else if(image_tracker=="second"){
		image.src="UFimgs/gold.png";
		image_tracker="third";
	}
	else{
		image.src="UFimgs/OPdoublefemale.png";
		image_tracker="first";

	}
	

}

function change3(){
	var image=document.getElementById("beach");
		if (image_tracker=="first"){
		image.src="UFimgs/beach.png";
		image_tracker="second";
	}
	

	else if(image_tracker=="second") {
		image.src="UFimgs/OPhigh.png";
		image_tracker="third";
}
	else{
		image.src="UFimgs/beachcoolin.png";
		image_tracker="first";
	}
	
}



//**MOBILE***\\
var mob="open";
function open(){
	var meme=document.getElementById("nav2");
	appear(meme);

	if(mob=="open"){
		TweenLite.to(nav2,2,{right:50});
		mob="close";
	}

	else{
		TweenLite.to(nav2,2,{right:50});
		mob="open";
	}
}

var appearit="noshow";
function appear(meme){
	if(appearit=="noshow"){
		meme.style.cssText="display:block;"
		appearit="show";

	}
	else{
		meme.style.cssText="display:none";
		appearit="noshow";

	}

}

setInterval("change1();",6000);
setInterval("change2();",10000);
setInterval("change3();",9500);
//setInterval("change4();",7000);

	var logo=document.getElementById("Luxury");
	TweenLite.to(logo, 2.7, {top:90})




