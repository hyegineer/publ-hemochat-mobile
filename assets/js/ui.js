
function openModal(id) {
  $('#' + id).addClass('active');
  $('#' + id).children('.custom-modal').scrollTop(0);
}

function closeModal(id) {
  $('#' + id).removeClass('active');
}

function allCloseModal() {
  $('.modal-wrapper').removeClass('active');
}

$('.header .menu-btn').on('click', function () {
  $('.header-nav-container').addClass('show');
})

$('.header-nav-container .close-btn').on('click', function () {
  $('.header-nav-container').removeClass('show');
})