

$(document).ready(function(){
	$(".postad-container1").slideDown();
			var editor;
			var editor2;
			KindEditor.ready(function(K) {
				editor = K.create('textarea[name="company-summary"]', {
					resizeType : 1,
					allowPreviewEmoticons : false,
					allowImageUpload : false,
					afterCreate : function() {
				         this.sync();
				        }, 
				    afterBlur:function(){
				          this.sync();
				        },

					items : [
						'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
						'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
						'insertunorderedlist']
				});
				editor2 = K.create('textarea[name="requirement"]', {
					resizeType : 1,
					allowPreviewEmoticons : false,
					allowImageUpload : false,
					items : [
						'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
						'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
						'insertunorderedlist']
				});
			});
	
	$(".postad-content1").hover(function(){
	$(".postad-content2").removeClass("postad-contenthover");
	$(".postad-content3").removeClass("postad-contenthover");
	$(".postad-content4").removeClass("postad-contenthover");
 	$(this).addClass("postad-contenthover");
 	$(this).siblings().removeClass("postad-contenthover");
})
	$(".postad-content1").click(function(){
 	$(this).addClass("postad-contentclick");
 	$(this).siblings().removeClass("postad-contentclick");
})

$(".postad-content2").hover(function() {
	$(".postad-content1").removeClass("postad-contenthover");
	$(".postad-content3").removeClass("postad-contenthover");
	$(".postad-content4").removeClass("postad-contenthover");
 	$(this).addClass("postad-contenthover");
 	$(this).siblings().removeClass("postad-contenthover");
 })
$(".postad-content2").click(function() {
 	$(this).addClass("postad-contentclick");
 	$(this).siblings().removeClass("postad-contentclick");
 })

$(".postad-content3").hover(function() {
		$(".postad-content1").removeClass("postad-contenthover");
		$(".postad-content2").removeClass("postad-contenthover");
		$(".postad-content4").removeClass("postad-contenthover");
		$(this).addClass("postad-contenthover");
 		$(this).siblings().removeClass("postad-contenthover");
})
$(".postad-content3").click(function() {
		$(this).addClass("postad-contentclick");
 		$(this).siblings().removeClass("postad-contentclick");
})

$(".postad-content4").hover(function() {
		$(".postad-content1").removeClass("postad-contenthover");
		$(".postad-content2").removeClass("postad-contenthover");
		$(".postad-content3").removeClass("postad-contenthover");
		$(this).addClass("postad-contenthover");
 		$(this).siblings().removeClass("postad-contenthover");
})
$(".postad-content4").click(function() {
		$(this).addClass("postad-contentclick");
 		$(this).siblings().removeClass("postad-contentclick");
 		window.location.href='/post/details';

})

	$(".postad-content1").click(function(){
     $('html, body').animate({
           scrollTop: $(".postad-label").offset().top
      }, 600);
 	$(this).addClass("postad-contenthover");
 	$(this).siblings().removeClass("postad-contenthover");
 	$(".postad-container2").hide();
    $(this).next(".postad-container2").show();
    
	
})

$(".postad-content2").click(function() {
	$('html, body').animate({
           scrollTop: $(".postad-label").offset().top
      }, 600);
 	$(this).addClass("postad-contenthover");
 	$(this).siblings().removeClass("postad-contenthover");
 	$(".postad-container3").hide();
	$(this).next(".postad-container3").show();
	
 })

$(".postad-content3").click(function() {
	$('html, body').animate({
           scrollTop: $(".postad-label").offset().top
      }, 600);
		$(this).addClass("postad-contenthover");
 		$(this).siblings().removeClass("postad-contenthover");
		$(".postad-container4").hide();
		$(this).next(".postad-container4").show();
})
$(".postad-content4").click(function(){
	$('html, body').animate({
           scrollTop: $(".postad-label").offset().top
      }, 600);
})
$(".postad-group").click(function(){
	window.location.href='/post/details';
})

$(".postad-region").click(function() {
	$(".postad-townforcity").fadeOut();
	$(".postad-warntoregion").fadeOut();
	$(".postad-warnregion").fadeOut();
	$(".postad-warncity").fadeOut();
	$(".postad-warntocity").fadeOut();
	$(".postad-warntotown").fadeOut();
	$(".postad-city").empty();
	$(".postad-town").empty();
	var id = $(".postad-region option:selected").attr("value");
/*	if(id=="-1")
	{
		$(".postad-warntoregion").fadeIn();
	}*/
	$.ajax({	
			   
	        url:"/post/getcities",   
	        data:{   
	        	region_id:id,             
	        },          
	        type:"POST",           
	        dataType:"text", 
	        success:function(data)
	        {
				 if(data){
				 	$(".postad-city").append("<option value='-1'style='display:none'>现在可以选择区域</option>");
	         	var items = jQuery.parseJSON(data);
	          	
	            for(var i =0; i< items.length; i++)
	            {
	            	
	            	$(".postad-city").append("<option value="+items[i].city_id+">"+items[i].city_name+"</option>");

	            }
	            
	            	
	    	}

	    }
		});
	})
$(".postad-city").click(function(){
					$(".postad-townforcity").fadeOut();
					$(".postad-warnregion").fadeOut();
					$(".postad-warntocity").fadeOut();
					$(".postad-warncity").fadeOut();
					$(".postad-warntotown").fadeOut();
	            	$(".postad-town").empty();
	            	var id = $(".postad-city option:selected").attr("value");
	            	var value = $(".postad-region option:selected").attr("value");
	    
	            		if(value==-1)
	            		{
	            			$(".postad-warnregion").fadeIn();
	            		}
	            		/*if(id==-1)
	            		{
	            			$(".postad-warntocity").fadeIn();
	            		}*/
						 $.ajax({	
			   
	       				 url:"/post/gettowns",   
	        				data:{   
	        				city_id:id,             
	       						 },          
	        				type:"POST",           
	        				dataType:"text", 
	        				success:function(data){
	        					if(data){
	         					var items = jQuery.parseJSON(data);
	         					$(".postad-town").append("<option value='-1'style='display:none'>现在可以选择城镇</option>");
	          						for(var i =0; i< items.length; i++)
	            				{
	            	
	            					$(".postad-town").append("<option value="+items[i].town_id+">"+items[i].town_name+"</option>");

	           					}
	        					}
							}
	         	
	         			});
	        
	    			})
$(".postad-town").click(function(){
						$(".postad-warntotown").fadeOut();
						$(".postad-warncity").fadeOut();
	            		var id = $(".postad-city option:selected").attr("value");
	            		var id2= $(".postad-region option:selected").attr("value");
	            		if(id==-1)
	            		{
	            			$(".postad-warncity").fadeIn();
	            		}
	            		if(id2==-1)
	            		{
	            			$(".postad-townforcity").fadeIn();
	            		}
	            	})


$(".postad-paytype").click(function(){
	$(".postad-warnwage1").fadeOut();
	$(".postad-warnwage").fadeOut();
	$(".postad-selwage1").fadeOut();
	$(".postad-selwage2").fadeOut();
	$(".postad-to").show();
	$("#postad-allowance1").show();
	$("#postad-allowance2").show();
	$(".postad-allowance").empty();
	var value=$(".postad-paytype option:selected").attr("value");
	if(value==1)
	{
		
		$(".postad-allowance").append("<option value='-1' style='display:none'>请选择</option><option value='2'>最低时薪</option><option value='3'>17.5</option><option value='4'>20</option><option value='5'>30</option>option value='6'>40</option><option value='7'>50</option><option value='8'>75</option><option value='9'>100</option><option value='10'>150</option><option value='1'>面议</option>");			
	}
	if(value==2)
	{
		$(".postad-allowance").append("<option value='-1'style='display:none'>请选择</option><option value='11'>10K</option><option value='12'>20K</option><option value='13'>30K</option><option value='14'>40K</option><option value='15'>50K</option><option value='16'>60K</option><option value='17'>70K</option><option value='18'>80K</option><option value='19'>90K</option><option value='20'>200K</option><option value='1'>面议</option>");
	}
	if(value==3)
	{
		$("#postad-allowance1").append("<option value='1'>面议</option>");
		$(".postad-to").hide();
		$("#postad-allowance2").hide();
	}
})
$(".postad-allowance").click(function(){
	$(".postad-warnwage1").fadeOut();
	$(".postad-warnwage").fadeOut();
	$(".postad-selwage1").fadeOut();
	$(".postad-selwage2").fadeOut();
	var value1=$("#postad-allowance1 option:selected").attr("value");
	var value2=$("#postad-allowance2 option:selected").attr("value");
	var value3=$(".postad-paytype option:selected").attr("value");
	$(".postad-to").show();
	$("#postad-allowance1").show();
	$("#postad-allowance2").show();
	if(value1==1)
	{
		$(".postad-to").hide();
		$("#postad-allowance2").hide();
	}
	if(value2==1)
	{
		$(".postad-to").hide();
		$("#postad-allowance1").hide();
	}
	if(value3==-1)
	{
		$(".postad-warnwage").fadeIn();
	}


})


 $("#postad-loadimg").change(function() {
 	$("#postad-showimg").fadeIn();
 	$(".postad-showimage").fadeOut();
 	$(".postad-warngetimg").fadeOut();
 	$(".postad-warnrightimg").fadeOut();
 	$(".postad-successimg").fadeOut();
 	var doc=document.getElementById("postad-loadimg");
	var img=document.getElementById("postad-showimg");
	img.src =window.URL.createObjectURL(doc.files[0]);

    var val = $(this).val();

    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
        case 'gif': case 'jpg': case 'png':
            $(".postad-successimg").fadeIn();
            break;
        default:
           
            // error message here
            $(".postad-warnrightimg").fadeIn();
            break;
    }
});
 $(".postad-input").blur(function(){
/*this.validity.patternMismatch||
*/		if (this.validity.valueMissing||this.validity.typeMismatch)
		{
			$(this).next(".postad-warn").fadeIn();
		}
		
	});
	$(".postad-input").click(function(){
			$(this).next(".postad-warn").fadeOut();
		});
	$(".postad-input").click(function(){
		$(this).css("box-shadow","1.5px 1.5px 13px gray");
		$(this).addClass("postad-border");
	});
	$(".postad-input").blur(function(){
		$(this).css("box-shadow","1.5px 1.5px 1px gray");
		$(this).removeClass("postad-border");
	});
$("#postad-phone").blur(function(){
	var num=$(this).val().trim();
	if(!validatePostadNum(num))
	{
		$(this).next(".postad-warn").fadeIn();
	}

})
$("#postad-mobile").blur(function(){
	var num=$(this).val().trim();
	if(!validatePostadNum(num))
	{
		$(this).next(".postad-warn").fadeIn();
	}

})
$("#postad-allowance1").click(function(){
	$(".postad-selwage").fadeOut();
});
$(".postad-allowhide").click(function(){
	$(".postad-selwage").fadeOut();
});
$(".postad-alterbox").click(function(){
	$(".postad-alertcontainer").hide();
	$(".postad-alert").slideUp();
})

$(".postad-close").click(function(){
	$(".postad-alertcontainer").hide();
	$(".postad-alert").slideUp();
})

 $(".postad-button").click(function(){
/* 	var value=$("#postad-summary").val();;
 	alert(value);*/

 	$(".postad-selwage1").hide();
 	$(".postad-selwage2").hide();
 	var value=$("#postad-requirement").val().trim();
	if(value=="")
	{
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("需求");
		$("#postad-requirement").next(".postad-warn").show();
		return;
	}
	var value1=$("#postad-company").val().trim();
 	if (value1=="")
		{		
				$(".postad-inputalert").empty();
				$(".postad-alertcontainer").show();
				$(".postad-alert").slideDown();
				$(".postad-inputalert").append("公司名称");
				
				$("#postad-company").next(".postad-warn").show();
				return;
		}
	var value2=$(".postad-region option:selected").attr("value");
	if(value2==-1)
	{
				$(".postad-inputalert").empty();
				$(".postad-alertcontainer").show();
				$(".postad-alert").slideDown();
				$(".postad-inputalert").append("区域");
				$(".postad-region").next(".postad-warn").show();
				return;
	}
	var value3=$(".postad-city option:selected").attr("value");
	if(value3==-1)
	{
		
				$(".postad-inputalert").empty();
				$(".postad-alertcontainer").show();
				$(".postad-alert").slideDown();
				$(".postad-inputalert").append("城市");
				$(".postad-warntocity").show();
				return;
	}
	var value4=$(".postad-town option:selected").attr("value");
	if(value4==-1)
	{
		
			$(".postad-inputalert").empty();
			$(".postad-alertcontainer").show();
			$(".postad-alert").slideDown();
			$(".postad-inputalert").append("城镇");
			$(".postad-warntotown").show();
				return;
	}
	var value6=$("#postad-phone").val().trim();
	if(value6==""||!validatePostadNum(value6))
	{
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("电话号码");
		$("#postad-phone").next(".postad-warn").show();
		return;
	}
	var value7=$("#postad-mobile").val().trim();
	if(value7==""||!validatePostadNum(value7))
	{
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("手机号码");
		$("#postad-mobile").next(".postad-warn").show();
		return;
	}

	var value8=$("#postad-email").val().trim();
	if(value8==""||!validateEmail(value8))
	{
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("邮箱");
		$("#postad-email").next(".postad-warn").show();
		return;
	}
 	var doc=document.getElementById("postad-loadimg");
	var img=window.URL.createObjectURL(doc.files[0]);
	if(img==null)
	{
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("图片");
		$(".postad-showimage").fadeIn();
			return;
	}

     var val = $("#postad-loadimg").val();

    var valueimg=val.substring(val.lastIndexOf('.') + 1).toLowerCase()
    if(valueimg!="jpg"&&valueimg!="png"&&valueimg!="gif"){
    	$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("图片格式");
		$(".postad-warnrightimg").fadeIn();
			return;
    }

	
	var value9=$("#postad-title").val().trim();
	if(value9=="")
	{
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("工作标题");
		$("#postad-title").next(".postad-warn").show();
		return;
	}
	var value10=$(".postad-paytype option:selected").attr("value");
	if(value10==-1)
	{
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("工作种类");
		$(".postad-warnwage1").show();
		return;
	}
	var value11=$("#postad-allowance1 option:selected").attr("value");
	if(value11==-1){
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("工资范围");
		$(".postad-selwage1").show();
		return;
	}
	
	var value12=$("#postad-allowance2 option:selected").attr("value");
	if(value12==-1&&value11!=1){
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("工资范围");
		$(".postad-selwage2").show();
		return;
	}
	var value13=$("#postad-numreq").val().trim();
	if(value13==""||!validateNumber(value13)){
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("需要人数");
		$("#postad-numreq").next(".postad-warn").show();
		return;
	}
	var value14=$("#postad-jobtype option:selected").attr("value");
	if(value14==-1){
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("工作种类");
		$("#postad-jobtype").next(".postad-warn").show();
		return;
	}
	var value14=$("#postad-experience option:selected").attr("value");
	if(value14==-1){
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("工作经验");
		$("#postad-experience").next(".postad-warn").show();
		return;
	}
	var value15=$("#postad-qua option:selected").attr("value");
	if(value15==-1)
	{
		
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("学历");
		$("#postad-qua").next(".postad-warn").show();
		return;
	}
	var valuemale=document.getElementById("postad-male").checked;
	var valuefemale=document.getElementById("postad-female").checked;
	if(!valuemale&&!valuefemale)
	{
		$(".postad-inputalert").empty();
		$(".postad-alertcontainer").show();
		$(".postad-alert").slideDown();
		$(".postad-inputalert").append("性别");
		$("#postad-female").next(".postad-warn").show();
		return;
	}

	
	

 });
})

