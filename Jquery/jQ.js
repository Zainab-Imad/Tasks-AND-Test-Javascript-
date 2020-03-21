$("document").ready(function(){
	$(".bl").css("background-color","black");
	$(".gr").css("background-color","grey");
	var y= $("h1").html();
	$("h1").html("hellloooo");
	$("h1").prepend("welcome   ");
	$("h1").append("    welcome");
	$("a").attr("target","_blanck");
	$("a").removeAttr("target");
	$(".bt1").click(function(){
		$(".z").hide(2000);
	});
	$(".bt2").click(function(){
		$(".z").show(2000);
	});
	$(".bt3").click(function(){
		$(".z").toggle(2000);
	});
	$(".bt4").click(function(){
		$(".z").fadeToggle(2000);
	});
	$(".htu").click(function(){
		$(".uni").css("visibility","visible");
	});
	$(".thank").click(function(){
		$(".uni").css("visibility","hidden");
	});
	$(".che").click(function(){
		var radios = $('input:radio[name=lan]');
		radios.filter('[value=rh]').prop('checked', true);
		$(".radio1").css("color","green");
		$(".radio2").css("color","red");
		$(".radio3").css("color","red");
	});
	$(".draw1").hide();
	$(".draw2").hide();
	$(".draw3").hide();
	$(".box1").hover(function(){
		$(".draw1").show(1000);
	},
	function(){
		$(".draw1").hide();
	});
	$(".box2").hover(function(){
		$(".draw2").show(1000);
	},
	function(){
		$(".draw2").hide();
	});
	$(".box3").hover(function(){
		$(".draw3").show(1000);
	},
	function(){
		$(".draw3").hide();
	});
	$('.pink').on('click',function(){
		$('body').css('background-color', '#FE3A51');
	});
	$('.blue').on('click',function(){
		$('body').css('background-color', '#7FCEFB');
	});
	$('.yellow').on('click',function(){
		$('body').css('background-color', '#B3FC28');
	});
	$('.white').on('click',function(){
		$('body').css('background-color', '#fff');
	});
	$('.plus').click(function(){
		var x=parseInt($(".num1").val());
		var y=parseInt($(".nam2").val());
		var z= x+y;

		$('.result').html(z);

	});$('.minus').click(function(){
		var x=parseInt($(".num1").val());
		var y=parseInt($(".nam2").val());
		var z= x-y;

		$('.result').html(z);

	});$('.mul').click(function(){
		var x=parseInt($(".num1").val());
		var y=parseInt($(".nam2").val());
		var z= x*y;

		$('.result').html(z);

	});$('.sup').click(function(){
		var x=parseInt($(".num1").val());
		var y=parseInt($(".nam2").val());
		var z= x/y;

		$('.result').html(z);

	});
    document.addEventListener('copy', (event) => {
    	const pagelink = `\n\nVisited Website: ${document.location.href}`;
    	event.clipboardData.setData('text', document.getSelection() + pagelink);
    	event.preventDefault();
    });

    $('#thankYou').hide();
    $('#send').hide();
    function sh(d){
    	if ( d == true){
    		$('#thankYou').show();
    		$('#send').show();
    	}
    	else{
    		$('#thankYou').hide();
    		$('#send').hide();
    	}
    };
    $('#wordCount').on('keyup',function(){
    	var words = 0;
        words = this.value.match(/\s+/g).length;
        if (words >= 5 ){
        	sh(true);
        }
        else
        {
        	sh(false);
        }
    });
    function Orange(){
    	if ($('#Orange').is(':checked') == true){
    		var x=$('#Orange').val();
    		var y=$('.Orange option:selected').val();

    		return (x*y);
    	}
    	else{
    		return 0;
    	}
    };
    function HiGeen(){
    	if ($('#HiGeen').is(':checked') == true){
    		var x=$('#HiGeen').val();
    		var y=$('.HiGeen option:selected').val();
    		return (x*y);
    	}
    	else{
    		return 0;
    	}
    };
    function VitamineC(){
    	if ($('#VitamineC').is(':checked') == true){
    		var x=$('#VitamineC').val();
    		var y=$('.VitamineC option:selected').val();
    		return (x*y);
    	}
    	else
    		return 0;
    };
    $('#btn-Count').on('click',function(){
    	var x=Orange();
    	var y=HiGeen();
    	var z=VitamineC();

    	$('#total').html(x+y+z);
    });
    $('#countries').change(function () {
        var c = $(this).val();
        if (c == 'country1')
        	{
        		$('#cities').html('<option value="test">California</option><option value="test2">Los Angelos</option>');
        	}
        else if (c == 'country2')
        	{
        		$('#cities').html('<option value="test">Amman</option><option value="test2">Irbid</option>');
        	}
    });
    $('#man').change(function(){
    	var m = $(this).val();
    	if(m == 'Army'){
    		$('#sol').css({
    			'background-image' : 'url("img/img.jpg")',
    			'background-repeat' : 'no-repeat',
    			'background-size': '100% 100%'
    		});
    	}
    	else if(m == 'Business'){
    		$('#sol').css({
    			'background-image':'url("img/business.jpg")',
    			'background-repeat' : 'no-repeat',
    			'background-size': '100% 100%'
    		});
    	}
    	else if(m == 'Student'){
    		$('#sol').css({
    			'background-image':'url("img/images1.jpg")',
    			'background-repeat' : 'no-repeat',
    			'background-size': '100% 100%'
    		});
    	}
    });
    $( function() {
            $( "#accordion" ).accordion();
        });
});

