;(function() {
  window.work = {};

  window.work.body = document.querySelector('body');

  window.work.closestAttr = function(item, attr) {
    var node = item;

    while(node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.work.closestItemByClass = function(item, className) {
    var node = item;

    while(node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.work.toggleScroll = function() {
    myLib.body.classList.toggle('no-scroll');
  };
})();
