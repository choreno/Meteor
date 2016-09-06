Template.contextExample.rendered = function(){
	console.log('examples rendered' + this.data); 
}

Template.contextExample.helpers({
	logContext: function(){
		console.log('context log helper', this); 
	}
})