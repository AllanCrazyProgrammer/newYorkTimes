
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

$(document).ready(function () {


    $("#search").click(function () {
        var query = $("#term").val();
        var articles = $("#records").val();
        var startYr = $("#start-year").val();
        var endYr = $("#end-year").val();

        startYr += "0101";
        endYr += "1231";


        url += '?' + $.param({
            'api-key': "5e0838ed2b1845059a9192f09f4b8f41",
            'q': query,
            "begin_date": startYr,
            "end_date": endYr //literal los articulos nesesarios no del 0 al 9
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).then(function (result) {
            console.log(url);
            var r = result.response.docs;

            for(var i = 0; i < articles; i++) {
                var infoDiv = $("<div>");
                var title = r[i].headline.main;

                var articleUrl = r[i].web_url;
                var author = r[i].byline.original;

                var h3 = $("<h3>");
                var p = $("<p>");
                var a = $("<a>");
                var hr = $("<hr>");

                h3.text(title);
                p.text(author);
                a.text("Click to go to link ");
                a.attr("href", articleUrl);
                a.attr("target", "_blank")

                infoDiv.append(h3, p, a, hr);
                $("#result").append(infoDiv);
            }
            r.forEach(el => {
               
            });






        })
    });

    $("#clear").click(function () {
        $("#result").empty();
    });

})


