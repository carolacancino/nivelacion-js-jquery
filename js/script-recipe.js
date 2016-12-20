 
$(document).ready(function(){ 
 //sacar menu
    $('js-menu').hide();
//docmento html listo imprimir
 	console.log('HTML Recipe Listo');

	$('.js-show-recipe').on('click',function(){
 	 $('.page').removeClass('make');

  	});

 	$('.js-show-make').on('click',function(){
 	 $('.page').addClass('make');

 	});
 });