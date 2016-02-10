/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	'change .fileInput':function(event, template){
		FS.Utility.eachFile(event, function(file){
			FS.Utility.eachFile(event, function(file) {
		      Uploads.insert(file, function (err, fileObj) {
		        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
		        });
		   	});
		});
	}
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
	uploads:function(){
		return Uploads.find();
	}
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
