Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
})


Router.map(function(){
	this.route('Home', {
		path: '/',
		template: 'home',
		subscriptions: function(){
			return Meteor.subscribe("lazyload-posts", Session.get('lazyloadLimit')); 
		}

	}) ;

	this.route('About',{
		path: '/about',
		template: 'about'
	}); 

})
