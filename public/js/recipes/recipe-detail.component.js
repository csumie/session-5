angular.module('foodApp').component('recipeDetail', {
	templateUrl: 'js/recipes/recipe-detail.template.html',
	controller: function RecipeListController($routeParams, $http) {
		let self = this
		$http.get('data/' + $routeParams.recipeId + '.json')
		.then(function(response){
			self.recipe = response.data
			self.setImage(self.recipe.images[1])
		})
		self.setImage = function() {
			self.mainImageUrl = imageUrl;
		}
		// this.recipeId = $routeParams.recipeId;
	}
})



