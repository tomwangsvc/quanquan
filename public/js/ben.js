
/** start of mobile js*/


/** start of categories select option js */
$(document).ready(function(){
	
	$( ".mobile-sub-items" ).on( "click", function() {
		
		if ($(this).children(".m-sub-m").css('display') == 'none') {
			$(this).children('.m-sub-m').show();
			$(this).children("#mobile-subcat-dwopdown").hide();
			$(this).children("#mobile-subcat-dwopup").show();
			return;
			}
		if ($(this).children(".m-sub-m").css('display') == 'block') {
			$(this).children('.m-sub-m').hide();
			$(this).children("#mobile-subcat-dwopdown").show();
			$(this).children("#mobile-subcat-dwopup").hide();
			return;
			}	
    });
});	
$(document).ready(function(){	
	
	$( ".category-select" ).on( "click", function() {		
		$(".search-top-bar").hide();
		$(".content").hide();
		$(".home-reset").hide();
		$(".category-options").show();
    });

	
});
$(document).ready(function(){	
	
	$( ".icon-category-select" ).on( "click", function() {		
		$(".search-top-bar").hide();
		$(".content").hide();
		$(".home-reset").hide();
		$(".category-options").show();
    });

	
});

$(document).ready(function(){	
	
	$( ".mobile-return-btn" ).on( "click", function() {		
		$(".search-top-bar").show();
		$(".content").show();
		$(".home-reset").show();
		$(".category-options").hide();
    });
});


$(document).ready(function(){	
	
	$( ".mobile-subsub-items" ).on( "click", function() {	
		$('.category-select').attr( "value", $(this).children(".mobile-subsub-item").attr("value") );
		$('.category-select').val($(this).children(".mobile-subsub-item").text());
		$(".search-top-bar").show();
		$(".content").show();
		$(".home-reset").show();		
		$(".category-options").hide();
		
    });
});

/** reset content for homw search*/
$(document).ready(function(){	
	
	$( ".home-reset-btn" ).on( "click", function() {	
		$('.category-select').attr( "value", "" );
		$('.category-select').val("");
		$('.custom-input').val("");	
		$('.place-select').attr( "value", "" );
		$('.place-select').val("");
    });
});
/** end of select categories js */


/** start of select region and city js */


$(document).ready(function(){
	
	$( ".mobile-region-items" ).on( "click", function() {
		
		if ($(this).children(".m-city-m").css('display') == 'none') {
			$(this).children('.m-city-m').show();
			$(this).children("#mobile-region-dwopdown").hide();
			$(this).children("#mobile-region-dwopup").show();
			return;
			}
		if ($(this).children(".m-city-m").css('display') == 'block') {
			$(this).children('.m-city-m').hide();
			$(this).children("#mobile-region-dwopdown").show();
			$(this).children("#mobile-region-dwopup").hide();
			return;
			}	
    });
});	
$(document).ready(function(){	
	
	$( ".place-select" ).on( "click", function() {		
		$(".search-top-bar").hide();
		$(".content").hide();
		$(".home-reset").hide();
		$(".place-options").show();
    });

	
});

$(document).ready(function(){	
	
	$( ".mobile-return-btn" ).on( "click", function() {		
		$(".search-top-bar").show();
		$(".content").show();
		$(".home-reset").show();
		$(".place-options").hide();
    });
});

$(document).ready(function(){	
	
	$( ".mobile-return-btn" ).on( "click", function() {		
		$(".place-top-bar").show();
		$(".content").show();
		$(".place-options").hide();
    });
});

$(document).ready(function(){	
	
	$( ".mobile-city-items" ).on( "click", function() {	
		$('.place-select').attr( "value", $(this).children(".mobile-city-item").attr("value") );
		$('.place-select').val($(this).children(".mobile-city-item").text());
		$(".search-top-bar").show();
		$(".content").show();
		$(".home-reset").show();		
		$(".place-options").hide();
		
    });
});




$(document).ready(function(){	
	
	$( ".user-menu-icon" ).on( "click", function() {	
		$(".management-menu").slideDown( "slow", function() {
		    // Animation complete.
		  });
		$(".management-menu-rec").slideDown( "slow", function() {
		    // Animation complete.
		  });
    });
});
$(document).ready(function(){	
	
	$( ".management-menu-rec" ).on( "click", function() {	
		$(".management-menu").hide();
		$(".management-menu-rec").hide();
		
    });
	//$( ".management-menu" ).mouseleave(function(){
	//	$(".management-menu").hide(10);
	//});
});


/** end of mobile js*/





/** desktop js*/

$(document).ready(function(){	
	$(".top-nav-category").hover(function(event) { 		
	      $(this).children('.c-dropdown').show();	
	  
	},function(){
		 $(this).children('.c-dropdown').hide();
	});  
});











/*



//show top navigation of home page
$(document).ready(function(){
 $(".top-nav-category").hover(function(){
	
	$(".sub-nav-list").show();
    $(".nav-recuits-list").slideDown(250);
 },function(){
	//$(".sub-nav-list").hide();
    //$(".nav-recuits-list").hide(50);
 })
})

$(document).ready(function(){
 $(".recuit").mouseleave(function(){
	
	$(".nav-items-list").hide();
    $(".nav-recuits-list").hide(250);
 },function(){
	//$(".sub-nav-list").hide();
    //$(".nav-recuits-list").hide(50);
 })
})

$(document).ready(function(){
 $(".regions-nav").hover(function(){
  $(this).show();
 },function(){
	  $(this).hide();
	  $(".expend-icon").attr('src','/images/plus-icon.png');	
	  $('.city-items').hide();	
 })
})











































//show top navigation of home page
$(document).ready(function(){
 $(".regions-input-nav").hover(function(){
   $(".regions-nav").show();
 },function(){
   $(".regions-nav").hide();
 })
})
$(document).ready(function(){
 $(".regions-nav").hover(function(){
  $(this).show();
 },function(){
	  $(this).hide();
	  $(".expend-icon").attr('src','/images/plus-icon.png');	
	  $('.city-items').hide();	
 })
})

//show and hide citie, and change expend icon
$(document).ready(function(){
	
	$(".expend-icon").click(function(event) { 
		
		  var src = $(".city-items").attr('src');
	      $(this).parent(".region-items").siblings('.region-items').children(".expend-icon").attr('src','/images/plus-icon.png');	
	      $(this).parent(".region-items").siblings('.region-items').children('.city-items').hide(500);	
		  
		  var src = $(this).attr('src');
		  if(src=='/images/plus-icon.png'){
			  $(this).attr('src','/images/minus-icon.png');	
		  }
		  if(src=='/images/minus-icon.png'){
			  $(this).attr('src','/images/plus-icon.png');	
		  }	  
	      $(this).siblings('.city-items').slideToggle(500);
	      event.stopPropagation();   	   
	});  
});

//ajax for display region or city name from selected
$(document).ready(function(){
  $(".regions-nav a").click(function() {
    var id = $(this).attr('value'); 
    $.ajax({		   
        url:"/index/region",   
        data:{   
       	 region_id:id,             
        },          
        type:"POST",           
        dataType:"text", 
        success:function(data)
        {
         if(data){
        	 $(".regions-input-nav").val(data);
        	}
        }
    });

  });
});

//show and hide categories, and change expend icon

$(document).ready(function(){
	 $(".category-input-nav").hover(function(){
	  $(".category-nav").show();
	 },function(){
	  $(".category-nav").hide();
	 })
	})
$(document).ready(function(){
	 $(".category-nav").hover(function(){
		 $(".category-nav").show();
	 },function(){
	  $(".category-nav").hide();
	  $(".category-expend-icon").attr('src','/images/plus-icon.png');	
	  $('.sub-categories').hide();	
	  $(".sub-category-expend-icon").attr('src','/images/plus-icon.png');	
	  $('.sub-sub-categories').hide();	
	 })
	})	
	
$(document).ready(function(){
	
	$(".category-expend-icon").click(function(event) { 
		
		  $(".sub-category-expend-icon").attr('src','/images/plus-icon.png');	
		  $('.sub-sub-categories').hide(500);	
		  
	      $(this).parent(".category-item").siblings('.category-item').children(".category-expend-icon").attr('src','/images/plus-icon.png');	
	      $(this).parent(".category-item").siblings('.category-item').children('.sub-categories').hide(500);	
		  
		  var src = $(this).attr('src');
		  if(src=='/images/plus-icon.png'){
			  $(this).attr('src','/images/minus-icon.png');	
		  }
		  if(src=='/images/minus-icon.png'){
			  $(this).attr('src','/images/plus-icon.png');	
		  }	  
	      $(this).siblings('.sub-categories').slideToggle(500);
	      event.stopPropagation();   	   
	});  
});

$(document).ready(function(){
	
	$(".sub-category-expend-icon").click(function(event) { 
		
	      $(this).parent(".sub-category-item").siblings('.sub-category-item').children(".sub-category-expend-icon").attr('src','/images/plus-icon.png');	
	      $(this).parent(".sub-category-item").siblings('.sub-category-item').children('.sub-sub-categories ').hide(500);	
		  
		  var src = $(this).attr('src');
		  if(src=='/images/plus-icon.png'){
			  $(this).attr('src','/images/minus-icon.png');	
		  }
		  if(src=='/images/minus-icon.png'){
			  $(this).attr('src','/images/plus-icon.png');	
		  }	  
	      $(this).siblings('.sub-sub-categories').slideToggle(500);
	      event.stopPropagation();   	   
	});  
});


$(document).ready(function(){
	  $(".category-nav a").click(function() {
	    var id = $(this).attr('value'); 
	    $.ajax({		   
	        url:"/index/category",   
	        data:{   
	        	category_id:id,             
	        },          
	        type:"POST",           
	        dataType:"text", 
	        success:function(data)
	        {
	        	
	         if(data){
	        	 $(".category-input-nav").val(data);
	        	}
	        }
	    });

	  });
	});






/*
		  var src = $(".category-expend-icon").attr('src');
	      $(this).parent(".category-item").parent(".categories").siblings('.sub-category-items').children(".category-expend-icon").attr('src','/images/plus-icon.png');	
	      $(this).parent(".category-item").parent(".categories").siblings('.sub-category-items').children.hide(500);	
		  
		  var src = $(this).attr('src');
		  if(src=='/images/plus-icon.png'){
			  $(this).attr('src','/images/minus-icon.png');	
		  }
		  if(src=='/images/minus-icon.png'){
			  $(this).attr('src','/images/plus-icon.png');	
		  }	  




$(document).ready(function(){
	 $(".category-item").hover(function(){
	  $(this).next().show();
	 },function(){
		$(this).next().hide();
	 })
	})
$(document).ready(function(){
	 $(".sub-category-items").hover(function(){
		 $(".category-nav").show();
	 },function(){
		 $(".category-nav").hide();
	 })
	})

/*
		  $.post(this.action, $(this).serialize(), function (notice) {
		    	if(notice>0){		            	           
				     if(notice==2){	
				    	  $(".loginform").remove(); 
					      window.location.href=$(location).attr('href');
					  }
					  if(notice==1){
				          txt = "帐号没有被激活，请登入注册邮箱查看激活链接";
				          $('.notice').append(txt);
				      }
			     }else{
					  txt = "用户及密码不匹配，请重新输入";
					  $('.notice').append(txt);
				      }
			        	   
			 });
			return false;	     
			   
	});    
			
			
$(document).ready(function(){

    $(".regions-input-nav").mouseover(function(){   	
    	$('.regions-categories').css('display', 'inline');
    }).mouseout(function() {
    	$('.regions-categories').css('display', 'none'); 	
     });
});
$(document).ready(function(){
	
    $(".regions-categories").mouseover(function(){   	
    	$('.regions-categories').css('display', 'inline');
    }).mouseout(function() {
    	$('.regions-categories').css('display', 'none'); 	
     });
});

$(document).ready(function(){
	
    $('.region-item').on('mouseover',function(){   	
        $(this).children('.city-items').css('display', 'inline');
    }).on('mouseout',function(){
        $(this).children('.city-items').css('display', 'none'); 	
    });
});




/**
//show and hide my qq nav


$(document).ready(function(){

	$('region-item').mouseover(function(){
       $(this).children('.city-items').css('display', 'inline');
    }).mouseout(function(){
       $(this).children('.city-items').css('display', 'none'); 
    });

	alert();
});

$(document).ready(function(){
    $(".mqq-nav").mouseover(function(){
    	$('.mqq-nav-sub').css('display', 'inline');	
    }).mouseout(function(){
    	$('.mqq-nav-sub').css('display', 'none');	
    });
    $(".mqq-items").mouseover(function(){
    	$('.mqq-nav-sub').css('display', 'inline');	
    }).mouseout(function(){
    	$('.mqq-nav-sub').css('display', 'none');	
    });
});


$(document).ready(function(){
    $('.region-item').on('mouseover',function(){
        $(this).children('.city-items').css('display', 'inline');
    }).on('mouseout',function(){
        $(this).children('.city-items').css('display', 'none'); 	
    });
});
*
*
*
*
*/