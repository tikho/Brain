Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'Home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/idea/:_id', {
  name: 'IdeaPage',
  template: 'IdeaPage',
  where: 'client',
  data: function(){
    return Ideas.findOne({_id:this.params._id});
  }
});