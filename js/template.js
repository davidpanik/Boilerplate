// Duplicate hidden content from elsewhere on the page and insert content
var Template = function(from, placeholders) {
	if (typeof(placeholders) == "undefined") var placeholders = {};
	
	// Replace all instances of a string
	var replaceAll = function(fullStr, searchStr, replaceStr) { 
		while (fullStr.indexOf(searchStr) > -1)
			fullStr = fullStr.replace(searchStr, replaceStr);
		
		return fullStr;
	};

	// Get the template HTML
	var templateObj = document.getElementById(from);
	var templateHtml = (typeof(templateObj) == "undefined") ? from : templateObj.innerHTML;
		
	if (templateHtml == "") return ""; // If we still don't have content then give up
	
	// Populate placeholders
	$.each(placeholders, function(x) {
		templateHtml = replaceAll(templateHtml, "{" + x + "}", placeholders[x]);
	});
	
	return templateHtml;
};	
