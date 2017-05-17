var imagetracker="first";
		function change(){
			var back=document.getElementById("meat");
			if(imagetracker=="first"){
				back.setAttribute("style," "background:url(UFimgs/gold.png)");
				imagetracker="second";
			}
			else if(imagetracker=="second"){
				back.setAttribute("style" "background:url(UFimgs/nyc.jpg)");
				imagetracker="third";
			}
			else{

				imagetracker="first";
				back.setAttribute("style," "background:url(UF/imgs/work.png)");
			

			}

		}
		setInterval("change();",1000);