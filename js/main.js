(function() {
  $('nav a').click(function() {
    if ($(this).attr('href').split('#').length === 2) {
      $('html, body').animate({
        scrollTop: $('#' + this.href.split('#')[1]).offset().top
      }, 750);
    }
  });
})(window.jQuery);
