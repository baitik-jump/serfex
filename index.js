/*function Animate(divId)
{
	var oThis = this;
	var aImg  = document.getElementById(divId).getElementsByTagName('img');
	var m1 = 100, m2 = 0, nextImage = 0, t = "";
	var oImg1 = '', oImg2 = '';

	this.next = function()
	{
		if (t != "") return;
		m1 = 100;
		m2 = 0;
		oImg1 = aImg[nextImage];	
		nextImage++;
		if (nextImage == aImg.length) { nextImage = 0; }  
		oImg2 = aImg[nextImage];	
		oThis.changeSlide();
	}

	this.changeSlide = function(){
		m1--; m2++;
		oImg1.style.opacity = m1/100;
		oImg1.style.filter="alpha(opacity="+m1+")";
		oImg2.style.opacity = m2/100;
		oImg2.style.filter="alpha(opacity="+m2+")";
		t = setTimeout(oThis.changeSlide,5);
		if (m2 == 100) {
			clearTimeout(t); t = ""; 
			setTimeout(oThis.next,3000);
		}
	}

	setTimeout(oThis.next,1000);
}

window.onload = function() { new Animate('img1'); new Animate('img2');  }*/



///
$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});

                
                    
                    
        
               
    