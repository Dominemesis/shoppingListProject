/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable quotes */
'use strict';
function main(){

$('#js-shopping-list-form > button').on( 'click',  function (e) {
  e.preventDefault();   
    let text = $('#shopping-list-entry').val();
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${text}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
      <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
       <span class="button-label">delete</span>
      </button>
    </div>
  </li>`); 
  $('#shopping-list-entry').val('');    
});

$('.shopping-list').on('click', '.shopping-item-toggle', function (e) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

$('.shopping-list').on('click', '.shopping-item-delete', function (e) {
  $(this).closest('li').remove();
});

}
$(main);
