/*****************************************************************************/
/* NewIdea: Event Handlers */
/*****************************************************************************/
Template.NewIdea.events({

    'submit .js-add-new-idea':function() {

        var title = event.target.new_idea_title.value;
        var description = event.target.new_idea_description.value;
        // var file = event.target.new_idea_file;
        var tags = event.target.new_idea_tags.value;

	    var files = event.target.new_idea_file.files;
	    console.log(files);
	    for (var i = 0, ln = files.length; i < ln; i++) {
	      console.log(event);
	      Uploads.insert(files[i], function (err, fileObj) {
	      	    Ideas.insert({
		          title: title,
		          description: description,
		          dateCreated: new Date(),
		          fileId: fileObj._id,
		          tags: tags
		        });
		        if (err){
		        	console.log(err);
		        }
	      	    console.log(Ideas.findOne({title: title}));
	      	});
	    }

		// FS.Utility.eachFile(event, function(file) {
		//   console.log(event);
	 //      Uploads.insert(file, function (err, fileObj) {
	 //      	    Ideas.insert({
		//           title: title,
		//           description: description,
		//           dateCreated: new Date(),
		//           fileId: fileObj._id,
		//           tags: tags
		//         });
		//         if (err){
		//         	console.log(err);
		//         }
	 //      	    console.log(Ideas.findOne({title: title}));
	 //      	});
	 //    });

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
