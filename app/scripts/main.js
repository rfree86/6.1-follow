var Pagebutton = require('models/likes');

$(document).ready(function(){
  $('body').prepend(JST.application());


var likebutton = new Pagebutton();
$('.likes').on('click', function(){
  likebutton.newlikes();

});

likebutton.on('change:likecount', function(){
  $('.likes').text(likebutton.get('likecount'));
});

likebutton.on('change:likecount', function(){
if(likebutton.get('likecount') < 2) {
  $('.likes').text(likebutton.get('likecount') + " like");
}
  else  {
    $('.likes').text(likebutton.get('likecount') + " likes");
  }

});

});
