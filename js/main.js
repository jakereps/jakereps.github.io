(function() {
  $('nav a').click(function() {
    if ($(this).attr('href').split('#').length === 2) {
      $('html, body').animate({
        scrollTop: $('#' + this.href.split('#')[1]).offset().top
      }, 750);
    }
  });


  var items = ['data scientist', 'technology enthusiast', 'blogger',
               'snowboarder', 'tutor', 'software engineer'];
  var tagline = $('#name span');
  (function loopTransition(delay) {
    $.each(items, function(i, element) {
      tagline.delay(delay).fadeOut();
      tagline.queue(function() {
        tagline.html(items[i]);
        tagline.dequeue();
      })
      tagline.fadeIn();
      tagline.queue(function() {
        if (i === items.length - 1) {
          loopTransition(delay);
        }
        tagline.dequeue();
      });
    });
  })(5000);
})(window.jQuery);
