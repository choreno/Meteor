Template.home.created = function() {
    console.log('Created the home template');
};

Template.home.rendered = function() {
    console.log('home is rendered');
    //this.$('p').html('We just replaced that text!');
    
}

Template.home.destroyed = function() {
    console.log('home template is destroyed.')
}

Template.home.helpers({
    exampleHelper: function() {
        return new Spacebars.SafeString('This is the text came from a helper with some <strong>HTML</strong>');
    },

    dataContextHelper: function() {
        return {
            someText: 'This text was set using a helper of the parent template.',
            someNested: { text: 'That comes from "someNested.text"' }
        }
    }
    ,
    postsList: function(){   

        return Posts.find({}, {sort: {timeCreated: -1}}); 
        // return [
        // {
        //     title: 'My Second Entry',
        //     description: 'Borem sodum ....',
        //     author: 'FAbian Vogel',
        //     timeCreated: moment().subtract(3, 'days').unix()
        // },
        // {
        //     title: 'My Second Entry',
        //     description: 'Borem sodum ....',
        //     author: 'FAbian Vogel',
        //     timeCreated: moment().subtract(3, 'days').unix()
        // }
        // ]
    },
    monthList: function(){
        return ['Jan', 'Feb', 'Mar']; 
    }

});

