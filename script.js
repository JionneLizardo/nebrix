
$(".northbutton").on("mouseenter", function(){
  $(".backgroundimage").attr("src", "img/person5.jpg");
  console.log("im over the northbutton");
});

$(".northbutton").on("mouseleave", function(){
  $(".backgroundimage").attr("src", "img/person3.jpg");
});

$(".southbutton").on("mouseenter", function(){
  $(".backgroundimage").attr("src", "img/lala.jpg");
});

$(".southbutton").on("mouseleave", function(){
  $(".backgroundimage").attr("src", "img/person3.jpg");
});

$(".rightbutton").on("mouseenter", function(){
  $(".backgroundimage").attr("src", "img/person4.jpg");
});

$(".rightbutton").on("mouseleave", function(){
  $(".backgroundimage").attr("src", "img/person3.jpg");
});jpg

$(".leftbutton").on("mouseenter", function(){
  $(".backgroundimage").attr("src", "img/person1.jpg");
});

$(".leftbutton").on("mouseleave", function(){
  $(".backgroundimage").attr("src", "img/person3.jpg");
});
