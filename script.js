
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


$("#search").click(function () {
    var query = $("#term").val();
    var articles = $("#records").val();
    var startYr = $("#start-year").val();
    var endYr = $("#end-year").val();
    

    url += '?' + $.param({
        'api-key': "5e0838ed2b1845059a9192f09f4b8f41",
        'q': query,
        "begin_date": startYr,
        "end_date": endYr,
        "page": articles //literal los articulos nesesarios no del 0 al 9
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (result) {
        console.log(url);
        var r = result.response.docs;
        r.forEach(el => {
            var infoDiv = $("<div>");
            var title = el.headline.main;

            var articleUrl = el.web_url;
            var author = el.byline.original;

            var h3 = $("<h3>");
            var p = $("<p>");
            var a = $("<a>");

            h3.text(title);
            p.text(author);
            a.text("Click to go to link ");
            a.attr("href", articleUrl);
            a.attr("target", "_blank")

            infoDiv.append(h3, p, a);
            $("#results").append(infoDiv);
        });




    })
})




