//     jQuery(document).ready(function () {
//       jQuery('.btn').click(function () {
//         alert('Hi JQuery');
//       });
//     });

//  $(document).ready(function () {
//       $('.btn').mouseover(function () {
//         $('.jumbotron').hide(1000);
//       });
//     });


$(document).ready(function () {
  $('#show-btn').dblclick(function () {
    $('.jumbotron').show(1000);
  });
});


$(document).ready(function () {

  $('.toggle').click(function () {
    $('.jumbotron').toggle(1000);
  });


  $('.slideUp').click(function () {
    $('.jumbotron').slideUp(500)
  });

  $('.slideDn').click(function () {
    $('.jumbotron').slideDown(2000);
  });

  $('.slidStop').click(function () {
    $('.jumbotron').stop();
  });


  $('.donw_up').click(function () {
    $('.jumbotron').slideToggle(500);
  });




  $('.btn-primary').click(function () {
    $('.wrap').fadeToggle(1000);
  });





});


$(document).ready(function () {
  $('.one').mouseover(function () {
    $(this).stop().animate({
      width: "330px"
    }, 1000);
  });

  $('.one').mouseout(function () {
    $(this).stop().animate({
      width: "250px"
    }, 2000);
  });




});

$(document).ready(function () {
  $('.goTop').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 5000);
  });
});