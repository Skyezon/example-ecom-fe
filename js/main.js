$(document).ready(function () {
  $('.carosel').slick({
    infinite: true,
    dots: true,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    adaptiveHeight: false,
    slidesToShow: 1
  })
});

$(function () {
  $("#pulsa").click(function () {
    $(this).css('background-color', '#C04365');
    $(this).css('border-radius', '2rem');
    $("#data").css('background-color', 'transparent');
    $("#listrik").css('background-color', 'transparent');
    $("#air").css('background-color', 'transparent');
    $("#ganti").empty();
    $("#ganti").html("Nomor Telepon");
    $(".radio-button").css('visibility', 'Hidden');

  })
});

$(function () {
  $("#data").click(function () {
    $(this).css('background-color', '#C04365');
    $(this).css('border-radius', '2rem');
    $("#pulsa").css('background-color', 'transparent');
    $("#listrik").css('background-color', 'transparent');
    $("#air").css('background-color', 'transparent');
    $("#ganti").empty();
    $("#ganti").html("Nomor Telepon");
    $(".radio-button").css('visibility', 'hidden');
  })
});

$(function () {

  $("#listrik").click(function () {

    //clicked element, do-some-stuff
    $('#listrik').css('background-color', '#C04365');
    $('#listrik').css('border-radius', '2rem');
    $("#data").css('background-color', 'transparent');
    $("#pulsa").css('background-color', 'transparent');
    $("#air").css('background-color', 'transparent');
    $(".radio-button").css('visibility', 'visible');
    // $("#fix").css("margin",'10px 10px');
    $("#ganti").empty();
    $("#ganti").html("ID Pelanggan &nbsp &nbsp");

    // visibility: visible;

  })
});

$(document).ready(function () {
  $("#uang").change(function () {
    if ($(this).val() == 5) {
      $(".harga-value").empty();
      $(".harga-value").html("Rp6.000");
    } else if ($(this).val() == 10) {
      $(".harga-value").empty();
      $(".harga-value").html("Rp11.000");
    } else if ($(this).val() == 20) {
      $(".harga-value").empty();
      $(".harga-value").html("Rp21.000");
    } else if ($(this).val() == 50) {
      $(".harga-value").empty();
      $(".harga-value").html("Rp51.000");
    } else if ($(this).val() == 100) {
      $(".harga-value").empty();
      $(".harga-value").html("Rp101.000");
    }
  })
})


$(function () {
  $("#air").click(function () {
    $(this).css('background-color', '#C04365');
    $(this).css('border-radius', '2rem');
    $("#data").css('background-color', 'transparent');
    $("#listrik").css('background-color', 'transparent');
    $("#pulsa").css('background-color', 'transparent');
    $("#ganti").empty();
    $("#ganti").html("Nomor Telepon");
    $(".radio-button").css('visibility', 'Hidden');
  })
});

$(document).ready(function () {
  $('.carosel-benda').slick({
    infinite: true,
    dots: false,
    useCSS: true,
    useTransform: true,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1
  })
});

$(document).ready(function () {
  $('.category-carosel').slick({
    infinite: true,
    dots: false,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    adaptiveHeight: false,
    slidesToShow: 5,
    slidesToScroll: 1,

  })
});

$(document).ready(function () {
  $('.carosel-pilihan').slick({
    infinite: true,
    dots: false,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,

  })
});


$(function () {
  $(".category-carosel-item-button").click(function () {
    $(".category-carosel-item-button").each(function () {
        $(this).css('background-color', 'white');
        $(this).css('color', 'black');
    });
    $(this).css('background-color', '#C04365');
    $(this).css('color', 'white');
  })
});

$(function () {
  $(".carosel-pilihan-button").click(function () {
    $(".carosel-pilihan-button").each(function () {
        $(this).css('background-color', 'white');
        $(this).css('color', 'black');
    });
    $(this).css('background-color', '#C04365');
    $(this).css('color', 'white');
  })
});

$(function(){
  $("#plus").click(function(){
    var value = $("#angka-value").text();
    value++;
    console.log(value);
    $("#angka-value").empty();
    $("#angka-value").text(value);
  })
})

$(function(){
  $("#minus").click(function(){
    var value = $("#angka-value").text();
    
    if(value == 0){

    }else
    value--;
    console.log(value);
    $("#angka-value").empty();
    $("#angka-value").text(value);
  })
})