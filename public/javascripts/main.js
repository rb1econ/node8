$(function(){

  $('.deleteBtn').on('click', function(){
    // console.log('this dollar', $(this));
    // console.log('this', this)
    var $objectToDelete = $(this).parent();
    var currentId = $(this).parent().attr('data-id');
    $.post('/delete', {currentId:currentId}, function(data){
      alert(data.name+"was deleted");
      $objectToDelete.remove();
      console.log($objectToDelete);
    });
  });

});