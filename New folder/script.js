$(document).ready(function () {
  $(".change").on("click", function () {
    $(".mood_").toggleClass("active_")
    $(".sidedark").toggleClass("active_")
    $(".navbardark").toggleClass("active_")
    $(".backdark").toggleClass("active_")
    $(".maindark").toggleClass("active_")
    $(".lala").toggleClass("dark")
    $(".bg-dk").toggleClass("active_")
    $(".overMod").toggleClass("dark")
    $(".img-dark").toggle()
    $(".img-light").toggle()
  


  });


  $(".overMod").on("click", function () {
    $(".lala").toggleClass("active")
  });



});

// l==============================================


var xValues = ["22", "23", "24", "25", "26", "27", "28",];
var yValues = [26, 22, 30, 22, 28, 23, 25, 18,];
var barColors = ["rgba(42, 133, 255, 0.85)",
  "rgba(42, 133, 255, 0.85)",
  "rgba(42, 133, 255, 0.85)",
  "rgba(42, 133, 255, 0.85)",
  "rgba(42, 133, 255, 0.85)",
  "rgba(42, 133, 255, 0.85)",
  "rgba(42, 133, 255, 0.85)"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
    },
    scales: {
      xAxes: [{
        barThickness: 55
      }]
    }
  }
});



