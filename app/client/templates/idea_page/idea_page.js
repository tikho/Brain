/*****************************************************************************/
/* IdeaPage: Event Handlers */
/*****************************************************************************/
Template.IdeaPage.events({
});

/*****************************************************************************/
/* IdeaPage: Helpers */
/*****************************************************************************/
Template.IdeaPage.helpers({
	image:function(){
		var uploadedImage = Uploads.findOne({_id: this.fileId});
		return uploadedImage;
	},

	title:function(){
		return this.title;
	},

	tags:function(){
		return this.tags;
	}
});

/*****************************************************************************/
/* IdeaPage: Lifecycle Hooks */
/*****************************************************************************/
Template.IdeaPage.onCreated(function () {
});

Template.IdeaPage.onRendered(function () {
});

Template.IdeaPage.onDestroyed(function () {
});
