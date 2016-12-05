// helpers

var tabs = document.querySelectorAll('[data-tab-group] [data-tab]');

var deactivate = function(element) {
  element.classList.add('black-40');
  element.classList.remove('black-80');

  var tabFor = document.querySelector('#' + element.dataset.tabFor);
  tabFor.classList.remove('is-visible');
};

var activate = function(element) {
  element.classList.remove('black-40');
  element.classList.add('black-80');

  var tabFor = document.querySelector('#' + element.dataset.tabFor);
  tabFor.classList.add('is-visible');
};

tabs.forEach(function(tab) {
  tab.addEventListener('click', function(event) {
    // check others are active
    // if they are, deactivate
    tabs.forEach(function(tab) {
      if (tab !== event.target) {
        deactivate(tab);
      }
    });

    // check if self is active
    // if is, deactivate
    if (event.target.classList.contains('black-80')) {
      deactivate(event.target);
      return;
    }

    activate(event.target);
  });
});

// $('.scroll-right').click(function() {
//   console.log(this);
//
//   $(this).animate({
//     scrollLeft: "+=" + ($(this).innerWidth() / 3)
//   }, 300);
// });
//
// $('.client-list').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// })
