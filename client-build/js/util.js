Function.prototype.bind=function(e){var t=this;return function(){var n=Array.prototype.slice.call(arguments);return t.apply(e||null,n)}};var isInt=function(e){return e%1===0},TRANSITIONEND="transitionend webkitTransitionEnd oTransitionEnd";window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}();