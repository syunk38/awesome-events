// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on('ajax:success', '#createTicket', function(xhr, data, status){
  location.reload()
})

$(document).on('ajax:error', '#createTicket', function(xhr, data, status){
  var form = $('#new_ticket .modal-body')
  var div = $('<div id="createTicketErrors" class="alert alert-danger"></div>')
  var ul = $('<ul></ul>')
  $.each(data.responseJSON.messages, function() {
    var li = $('<li></li>').text(this)
    ul.append(li)
  })
  if($('#createTicketErrors')[0]) {
    $('#createTicketErrors').html(ul)
  }
  else {
    div.append(ul)
    form.prepend(div)
  }
})
