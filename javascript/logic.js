// Short-hand for $(document).ready(function)
$(function(){

$("#search").click(function(){
var searchTerm = $("#searchTerm").val();

$.ajax({
	type: "GET",
	url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&callback=?",
	async: false,
	dataType: "json",
	success: function(data) {

	},
	// If there's an error then alert "Err"
	error: function(err) {
		alert("Err")
	},

})    


});


});