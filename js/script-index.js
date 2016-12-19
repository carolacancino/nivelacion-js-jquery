$(document).ready( function(){
	renderHighlightedRecipes(recipesArray);
	//parte2
	  $('js-back').hide();

	function printNews(Recetas){
    $(".callout-news").append("<p>NUEVAS RECETAS</p>");
}
	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"

});
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for (i = 0; i < recipesArray.length; i++){
 		if(recipesArray[i].highlighted==true){
 			var recipe = recipesArray[i];
 			renderRecipe(recipe);
 		}
 	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	var titulo = recipe.title;
 	var nombre = recipe.source.name;
 	var imagen = recipe.name;

	$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+titulo+'</span><span class="metadata-recipe"><span class="author-recipe">'+nombre+' </span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/'+imagen+'.jpg"/></a>');

};

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}
//sacar flecha

 
