//Single state object
var state = {
	item: ""
};

//get user input
function getUserInput(state) {
  state.item = $('input').val();
  console.log('item = ' + state.item);
}

//render user input
function renderInput(state) {
  var newItem = $(
    '<li>' +
      '<span class="shopping-item">' + state.item + '</span>' +
      '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
          '<span class="button-label">check</span>' +
        '</button>' +
        '<button class="shopping-item-delete">' +
          '<span class="button-label">delete</span>' +
        '</button>' +
      '</div>' +
    '</li>'
  );
  $('.shopping-list').append(newItem);
}

//check item button
$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
  event.stopPropagation();  
  console.log($(this).html());
  $(this).parent().prev().toggleClass('shopping-item__checked');
});

//delete item button
$('.shopping-list').on('click', '.shopping-item-delete', function(event){
  $(this).parent().parent().remove();
});

//add item button
$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault();
    getUserInput(state);
    renderInput(state);
});