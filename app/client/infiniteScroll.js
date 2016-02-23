  // infinite scrolling

  var lastScrollTop = 0;

  $(window).scroll(function(event){
    // test if we are near bottom
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100){
      var scrollTop = $(this).scrollTop();
      // console.log("scroll-check");

      if (scrollTop > lastScrollTop){
        // console.log("We are going bottom");
        Session.set("ideaLimit", Session.get("ideaLimit") + 4);
        // console.log("adding more");

      }

      lastScrollTop = scrollTop;
    }
  })