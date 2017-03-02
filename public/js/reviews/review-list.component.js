angular.module('foodApp').component('reviewList', {
	templateUrl: 'js/reviews/review-list.template.html',
	controller: function ReviewListController() {
		this.review = [
  {
    name: 'Batman',
    location: 'Gotham City',
    date: '06-02-2016',
    rating:'rating5.png',
    review: 'Na na na na na na na na na Batman! na na na Batman! na na na na na na na na na Batman! Batman! Batman! na na na Batman! na na na Batman! Batman! na na na Batman! na na na',
    image: 'batman.jpg'
  },
  {
    name: 'Joker',
    location: 'Arkham Asylum',
    date: '2016-04-24',
    rating: 'rating1.png',
    review: 'HA HA HA! HA HA HA HA! HA HA HA HA HA! HA HA HA HA HA HA HA HA HA! HA HA HA HA HAAAAAAA HA! HA HA HA HA HA HA HA! HA HA HA HA HA HA HA HA! HA HA HA HA!',
    image: 'joker.jpg'
  },
  {
    name: 'Robin',
    location: 'The Batcave',
    date: '2016-03-13',
    rating: 'rating5.png',
    review: 'Holy Ghost Writer!, Holy Graf Zeppelin!, Holy Hamburger!, Holy Homework!, Holy Jaw Breaker!, Holy Knock Out Drops!, Holy Long John Silver!, Holy Mashed Potatoes!, Holy Molars!, Holy Nick Of Time!, Holy Oversight!, Holy Popcorn!, Holy Ravioli!, Holy Rip Van Winkle!, Holy Sardine!, Holy Semantics!, Holy Sonic Boom!, Holy Spider Webs!, Holy Subliminal!, Holy Time Bomb!, Holy Understatements!, Holy Waste Of Energy!, Holy Wayne Manor!',
    image: 'robin.jpg'
  },
  {
    name: 'Catwoman',
    location: 'Slums of Gotham City',
    date: '2016-10-09',
    rating: 'rating5.png',
    review: 'Somebody say fish? I haven\'t be fed all day!',
    image: 'catwoman.jpg'
  }
    ]
	}
})