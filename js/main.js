$(document).ready(function(){
  $('#viewMore').click(function(){
      $('#info').animate({top:"570px"});
      $('#aboutMe').animate({top:"0px"});
      $('#image').animate({left:"350px"});
      $('#project').animate({left:"0px"});
  });  
    $('#close').click(function(){
      $('#info').animate({top:"305px"});
      $('#aboutMe').animate({top:"-160px"});
      $('#image').animate({left:"0px"});
      $('#project').animate({left:"-300px"});
  }); 
});