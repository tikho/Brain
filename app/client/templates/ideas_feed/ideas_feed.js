/*****************************************************************************/
/* IdeasFeed: Event Handlers */
/*****************************************************************************/
Template.IdeasFeed.events({
});

/*****************************************************************************/
/* IdeasFeed: Helpers */
/*****************************************************************************/
Template.IdeasFeed.helpers({
	ideas:function(){
		return Ideas.find();
	},

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
/* IdeasFeed: Lifecycle Hooks */
/*****************************************************************************/
Template.IdeasFeed.onCreated(function () {
});

Template.IdeasFeed.onRendered(function () {
});

Template.IdeasFeed.onDestroyed(function () {
});
