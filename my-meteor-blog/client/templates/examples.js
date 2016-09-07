Template.contextExample.rendered = function(){
	console.log('examples rendered' + this.data); 
}

Template.contextExample.helpers({
	logContext: function(){
		console.log('context log helper', this); 
		return Session.get('randomNumber'); 
	}
})


Template.contextExample.events({
	'click button': function(e, template){
		Session.set('randomNumber', Math.random(0,9));
	}
})