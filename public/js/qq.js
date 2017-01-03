
function validateEmail(sEmail) {
	var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/;
	if (filter.test(sEmail)) {
	  return true;
	}
	else {
	  return false;
	}
}
function validateUsername(name) {
	
	var filter =/^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9\u4e00-\u9fa5]+$/;
	//var filter = /^[a-zA-Z][a-zA-Z0-9_]+$/;
	if (filter.test(name)) {
	  return true;
	}
	else {
	  return false;
	}
}
function validateName(name) {
	
	var filter =/^[a-zA-Z\u4e00-\u9fa5][a-zA-Z\u4e00-\u9fa5]+$/;
	//var filter = /^[a-zA-Z][a-zA-Z0-9_]+$/;
	if (filter.test(name)) {
	  return true;
	}
	else {
	  return false;
	}
}
function validatePostadNum(num){
	var filter=/^\d{5}$|^\d{6}$|^\d{7}$|^\d{8}$|^\d{9}$|^\d{10}$|^\d{11}$|^\d{12}$|^\d{13}$|^\d{14}$|^\d{15}$/;
	if(filter.test(num)){
		return true;
	}
	else{
		return false;
	}
}
function validateNumber(number) {
	var filter = /^[0-9]+$/;
	if (filter.test(number)) {
	  return true;
	}
	else {
	  return false;
	}
}
function validatePhoneNumber(number) {
	var filter = /^[0-9\-]+$/;
	if (filter.test(number)) {
	  return true;
	}
	else {
	  return false;
	}
}

function validatePassword(password) {
	var filter = /^(?=.*[a-zA-Z\d].*)[a-zA-Z\d!@#$%&*]{7,}$/;
	if (filter.test(password)) {
	  return true;
	}
	else {
	  return false;
	}
}

function showProcessImage(){	
	var html=$('<div style="z-index:999;background:#fff;; position:absolute; top:0; left:0; margin:0; padding:0;width:100%;height:100%;" id="processcontainer">'+
				'<div style="width:100px; height:100px;top:50%;left:50%;position:absolute;margin-left:-40px; margin-top:-90px;" ><img src="/images/processing.gif"></i></div></div>');
   $('body').append(html);
}
/*remove a processing image div*/
function clearProcessImage(){
	$("#processcontainer").remove();
}

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