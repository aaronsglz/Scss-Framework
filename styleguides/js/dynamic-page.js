$(document).ready(function () {

	var getXmlHttpHandler = function() {

	    var xmlhttp=false;
	    
	    try {
	        xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');
	    } catch (e) {
	        try {
	            xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	        } catch (E) {
	            xmlhttp = false;
	        }
	    }

	    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
	        xmlhttp = new XMLHttpRequest();
	    }

	    return xmlhttp;
	};

	var loadPage = function(pagina) {
		var $defaultPage = '/styleguides/color-palette.html'
	    var $currentPage = $.cookie('currentPage');

	    if(typeof pagina !== 'undefined') {
	    	$.cookie('currentPage', pagina);
	    } else {
	    	if(typeof $currentPage !== 'undefined') {
	    		pagina = $currentPage;
	    	} else {
	    		pagina = $defaultPage;
	    	}
	    }
	    
	    $handler.open('GET', pagina);

	    $handler.onreadystatechange = function() {
	        if ($handler.readyState==4) {
	            $wrapper.html($handler.responseText);
				//history.pushState(', 'Page title', pagina);
				window.scrollTo(0,0);
	            // Refresh plugins
	            refreshPlugins();
	        }
	    };

	    $handler.send(null);
	};





	var refreshPlugins = function() {
		
		// Refresh click bindings
		$('body').on('click', '.js-nav', function(e){
		    e.preventDefault();

		    if($(this).attr('href') !== '#') {
		    	e.stopPropagation();
		        loadPage($(this).attr('href'));
		    }

		    return;
		});

		closeDropmenu();
		
		// Rerun Prism
		Prism.highlightAll();
	};
	
	// Init
	var $wrapper = $('#page-content');
	var $handler = getXmlHttpHandler();
    
	loadPage();
});