// Short-hand for $(document).ready(function)
$(function() {

    var backgroundImg = ' https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/2000px-Wikipedia-logo-v2-en.svg.png'

    //Allows a variable for changing background imgs based in an array, see weather app
    $('body').css('background-image', 'url(' + backgroundImg + ')');

    $('#search').click(function() {

        var searchTerm = $('#searchTerm').val();

        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&callback=?"

        //Ajax call for JSON data     
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data) {

                //Clears all data prior to running/re-running for loop
                $('#results').html('');

                for (var i = 0; i < data[1].length; i++) {
                    $('#results').append("<a href=" + data[3][i] + " target='blank'><h1>" + data[1][i] + "</h1></a>" + "<h3>" + data[2][i] + "</h3><hr><br>");
                }

            },
            // If there's an error then alert "Err"
            error: function(error) {
                alert("Err");

            },

        });

    });
    
    // If keyCode 13 (enter button) is pressed then run the #search.click function
    $('#searchTerm').bind('keypress', function(e) {
        if (e.keyCode == 13) {
            $("#search").click();
        }
    });

});
