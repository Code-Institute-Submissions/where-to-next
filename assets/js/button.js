//    $("#dest1btn").click(function() {
//         $("#dest1p").toggle();
//     });

//     $("#dest2btn").click(function () {
//         $("#dest2p").toggle();
//     });

//     $("#dest3btn").click(function () {
//         $("#dest3p").toggle();
//     });

//     $("#dest4btn").click(function () {
//         $("#dest4p").toggle();
//     });
//     $("#dest5btn").click(function () {
//         $("#dest5p").toggle();
//     });
//     $("#dest6btn").click(function () {
//         $("#dest6p").toggle();
//     });
//     $("#dest7btn").click(function () {
//         $("#dest7p").toggle();
//     });
//     $("#dest8btn").click(function () {
//         $("#dest8p").toggle();
//     });
//     $("#dest9btn").click(function () {
//         $("#dest9p").toggle();
//     });
//     $("#dest10btn").click(function () {
//         $("#dest10p").toggle();
//     });


$(".cityshow").click(function(event) {
	   showdiv = '#'+$(event.target).attr('data-link');
	   $(".infodiv").addClass('hideme');
       $(showdiv).removeClass('hideme');
       initMap();
    });