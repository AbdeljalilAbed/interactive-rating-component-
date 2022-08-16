$(".thank-you").hide();

$('.rate').click(function() {
    if( $('.rate').hasClass('selected')){
        $('.rate').removeClass('selected')
    }
    $(this).addClass('selected');
    var rating = $(this).text()
    $(".your-rating p").text("you selected "+rating+" out of 5")
});
$('.btn').click(function() {
    $(".container").hide();
    $(".thank-you").show()
 
});
