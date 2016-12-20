 
$(document).ready(function(){ 

 //sacar menu
    $('js-menu').hide();

//docmento html listo imprimir
 	console.log('HTML Recipe Listo');

//onclik page y recipe!! 
	$('.js-show-recipe').on('click',function(){
 	 $('.page').removeClass('make');

  	});

 	$('.js-show-make').on('click',function(){
 	 $('.page').addClass('make');

 	});
//flecha atras
 	$('.js-back').click(function() {
        $(window.history.back('location', 'index.html');
     });

///active
	$('.js-show-make').on('click', function(){
 	$('.js-show-make').addClass('active');
 		$('js-show-recipe').removeClass('active');
 	});
 
  	$('.js-show-recipe').on('click', function(){
 	$('.js-show-recipe').addClass('active');
 		$('js-show-make').removeClass('active');
  	});        
 });