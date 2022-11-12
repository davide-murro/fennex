(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {


		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$footer = $('#footer');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function() {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Header.
		$header.each( function() {
			var t 		= jQuery(this),
				button 	= t.find('.button');

			button.click(function(e) {
				var target = $(this).attr("href");
				if(target && target != "#") {
					$(".init").removeClass("init");

					$('#menu-open').prop('checked', false); 
					$('html, body').animate({scrollTop: 0},200);

					$(".target").fadeOut(300);
					$(target).fadeIn(300);

					t.find('.button').removeClass("selected");
					$(this).addClass("selected");
				}

				t.toggleClass('hide');

				if ( t.hasClass('preview') ) {
					return true;
				} else {
					e.preventDefault();
				}

			});
		});

		// Footer.
		$footer.each( function() {
			var t 		= jQuery(this),
				inner 	= t.find('.inner'),
				button 	= t.find('.info');

			button.click(function(e) {
				t.toggleClass('show');
				e.preventDefault();
			});
		});

	});

})(jQuery);


function date_format(date, format) {
	var d = date,
        month = ("0" + (d.getMonth() + 1)).slice(-2),
        day = ("0" + d.getDate()).slice(-2),
        year = d.getFullYear();
        hours = ("0" + d.getHours()).slice(-2);
        minutes = ("0" + d.getMinutes()).slice(-2);
    var ret = "";

    if(format == 'dd-mm-yyyy') {
    	ret = [day, month, year].join('-');
    }
    if(format == 'dd-mm-yyyy HH:ii') {
    	ret = [day, month, year].join('-');
    	ret += " " + ([hours, minutes].join(':'));
    }
    if(format == 'HH:ii') {
    	ret = [hours, minutes].join(':');
    }

    return ret;
}


function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("include-html");
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute("include-html");
					includeHTML();
				}
			} 
			xhttp.open("GET", file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}
}

$(document).ready(function() {
	includeHTML();

	
})
