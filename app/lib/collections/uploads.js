var baseUrl = "";

if (Meteor.isServer) {
    baseUrl = process.env.PWD;
}

Uploads = new FS.Collection('uploads', {
	stores:[new FS.Store.FileSystem('uploads', {path: baseUrl + '/uploads'})]
});
