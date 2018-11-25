$(function() {

    var showStock = document.getElementById('showStock');
    var showShoe = document.getElementById('showShoe');
    var template = Handlebars.compile(showStock.innerHTML);
    var showStockDiv = document.getElementById('showStockDiv');
    var showShoeDiv = document.getElementById('showShoeDiv');
    

    $.ajax({
        type: 'GET',
        url: '/api/shoes',
        success: function(data) {
            var tableSearch = template({
                data
            });

            showStockDiv.innerHTML = tableSearch;
        }, 
        error: function(error) {
            console.log(error);
        }
    });


    $('#showStockDiv').on('click', function(e) {
        var product_id = e.target.id;
        //btn btn-primary btn-sm

        $.ajax({
            type: 'GET',
            url: '/api/shoes/sold/' + product_id,
            success: function(data) {
                template = Handlebars.compile(showShoe.innerHTML);
                
                var tableSearch = template({
                    data
                });

                showStockDiv.innerHTML = '';
                showShoeDiv.innerHTML = tableSearch;
            }
        });
    });


    $('#showShoeDiv').on('click', function(e) {
        console.log(e);
        
        var selected = $('#my-dropdown option:selected');
        console.log(product_id, 'selected', selected.html());

    })




    // $( "#buy" ).click(function() {
    //     $('.tiny.modal').modal('show');
    //   });


      $('.dropdown')
      .dropdown({
        // you can use any ui transition
        transition: 'drop'
      })
    


});
