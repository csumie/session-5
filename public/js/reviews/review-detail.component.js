angular.module('foodApp').component('reviewDetail', {
	templateUrl: 'js/reviews/review-detail.template.html',
	controller: function ReviewDetailController($routeParams, $http) {
	
		$http.get('data/' + $routeParams.reviewId + '.json')
		.then(response => {
			this.review = response.data
			this.setImage(self.review.images[2])
		});
		
		this.setImage = imageUrl =>
			this.mainImageUrl = imageUrl;
		}

});



