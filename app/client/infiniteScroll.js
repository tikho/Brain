  // infinite scrolling

  var lastScrollTop = 0;

  $(window).scroll(function(event){
    // test if we are near bottom
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100){
      // console.log(new Date());
      var scrollTop = $(this).scrollTop();

      if (scrollTop > lastScrollTop){
        // console.log("We are going bottom");
        Session.set("ideaLimit", Session.get("ideaLimit") + 4);
      }

      lastScrollTop = scrollTop;
    }
  })