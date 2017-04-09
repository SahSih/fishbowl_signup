'use strict';

function Debug() {

}

Debug.prototype.log = function() {
  var paragraphElement = document.createElement('p');
  paragraphElement.textContent = Array.prototype.join.call(arguments, '');
  document.querySelector('.js-log').appendChild(paragraphElement);
};

window.addEventListener('load', function() {
  var logDiv = document.createElement('div');


  window.Demo = window.Demo || {};
  window.Demo.debug = window.Demo.debug || new Debug();
});
