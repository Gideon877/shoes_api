$(function() {
    // GET	/api/shoes	List all shoes in stock

    $.ajax({
        type:'GET',
        url: 'http://localhost:4040/api/shoes/',
        success: function(data) {
            console.log(data);

            var myInfo = document.getElementById('myTable');
            var template = Handlebars.compile(myInfo.innerHTML);
            var tableSearch = template({
                data
            });

            var display = document.getElementById('display');
            display.innerHTML = tableSearch;

        }
    });

    $('.adidas').on('click', function() {
        $.ajax({
            type:'GET',
            url: 'http://localhost:4040/api/shoes/brand/Adidas',
            success: function (data) {
                var myInfo = document.getElementById('myTable');
                var template = Handlebars.compile(myInfo.innerHTML);
                var tableSearch = template({
                    data
                });

                var display = document.getElementById('display');
                display.innerHTML = tableSearch;
            }
        });

    });

    // GET	/api/shoes/brand/:brandname	List all shoes for a given brand
    // GET	/api/shoes/size/:size	List all shoes for a given size
    // GET	/api/shoes/brand/:brandname/size/:size	List all shoes for a given brand and size
    // POST	/api/shoes/sold/:id	Update the stock levels when a shoe is sold
    // POST	/api/shoes	Add a new new shoe to his stock.



});
