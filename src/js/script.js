(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
	  var timeout;

	  return function debounced () {
		  var obj = this, args = arguments;
		  function delayed () {
			  if (!execAsap)
				  func.apply(obj, args);
			  timeout = null;
		  };

		  if (timeout)
			  clearTimeout(timeout);
		  else if (execAsap)
			  func.apply(obj, args);

		  timeout = setTimeout(delayed, threshold || 100);
	  };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


// usage:
$(window).smartresize(function(){
	strictHeightMatch()
});

strictHeightMatch()

function strictHeightMatch(){
	// height matcher
	array = document.getElementsByClassName("strict-height")
	for(var i = 0; i < array.length; i++){
		content = array[i]
		height = content.getElementsByClassName("text")[0].scrollHeight + 120
		content.style.height = height + "px"
	}
}

$(document).ready(function(){
	function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split('&');
		for(var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			if (decodeURIComponent(pair[0]) == variable) {
				return decodeURIComponent(pair[1]);
			}
		}
	}
	var utms = ["utm_source", "utm_campaign", "utm_medium", "utm_keyword"];
	$.each(utms, function(index, variable){
		var value = getQueryVariable(variable);
		if(value !== undefined){
			Cookies.set(variable, value);
		}
		if($("[name='"+variable+"']") != undefined){
			var cookie_value = Cookies.get(variable);
			if(cookie_value != undefined){
				$("[name='"+variable+"']").val(cookie_value);
			}
		}
	});
})