;(function() {
  var catalogSection = document.querySelector('.section-catalog');

  if (catalogSection === null) {
    return;
  }

  var removeChildren = function(item) {
    while (item.firstChild) {
      item.removeChild(item.firstChild);
    }
  };

  var updateChildren = function(item, children) {
    removeChildren(item);
    for (var i = 0; i < children.length; i += 1) {
      item.appendChild(children[i]);
    }
  };

  var catalog = catalogSection.querySelector('.catalog');
  var catalogNav = catalogSection.querySelector('.catalog-nav');
  var catalogItems = catalogSection.querySelectorAll('.catalog__item');

  catalogNav.addEventListener('click', function(e) {
    var target = e.target;
    var item = work.closestItemByClass(target, 'catalog-nav__btn');

    if (item === null || item.classList.contains('is-active')) {
      return;
    }

    e.preventDefault();
    var filterValue = item.getAttribute('data-filter');
    var previousBtnActive = catalogNav.querySelector('.catalog-nav__btn.is-active');

    previousBtnActive.classList.remove('is-active');
    item.classList.add('is-active');

    if (filterValue === 'all') {
      updateChildren(catalog, catalogItems);
      return;
    }

    var filteredItems = [];
    for (var i = 0; i < catalogItems.length; i += 1) {
      var current = catalogItems[i];
      if (current.getAttribute('data-category') === filterValue) {
        filteredItems.push(current);
      }
    }

    updateChildren(catalog, filteredItems);
  });
})();




var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}
