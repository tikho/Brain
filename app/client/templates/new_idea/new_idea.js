/*****************************************************************************/
/* NewIdea: Event Handlers */
/*****************************************************************************/
Template.NewIdea.events({

	'click .btn btn-primary btn-lg':function(){
		console.log("modal-pressed");
		$('#new-idea-tags').tagsinput();//refreshing tags-input
	},

    'submit .js-add-new-idea':function() {

        var title = event.target.title.value;
        var description = event.target.description.value;
        var tags = event.target.tags.value;
        var shownToEveryone = event.target.shownToEveryone;
	    var files = event.target.file.files;
	    
	    for (var i = 0, ln = files.length; i < ln; i++) {
	      console.log(event);
	      Uploads.insert(files[i], function (err, fileObj) {
	      	    Ideas.insert({
		          title: title,
		          description: description,
		          dateCreated: new Date(),
		          fileId: fileObj._id,
		          shownToEveryone: shownToEveryone, 
		          tags: tags,
		          createdBy: Meteor.user()._id
		        });
		        if (err){
		        	console.log(err);
		        }
	      	    console.log(Ideas.findOne({title: title}));
	      	});
	    }

	    console.log("Okey, we passed upload.insert");

        $("#addIdeaModal").modal('hide');

        return false;
    }

});

/*****************************************************************************/
/* NewIdea: Helpers */
/*****************************************************************************/
Template.NewIdea.helpers({
});

/*****************************************************************************/
/* NewIdea: Lifecycle Hooks */
/*****************************************************************************/
Template.NewIdea.onCreated(function () {
});

Template.NewIdea.onRendered(function () {
});

Template.NewIdea.onDestroyed(function () {
});
