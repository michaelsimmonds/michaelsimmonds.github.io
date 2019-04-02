console.log('loaded')

$('DOM content loaded', function() {

  $('#hero').animate({ opacity: 1 }, { duration: 3000 })

  $('.project-content').hide()

  $('button').click(function () {
    $(this).prev('.project-content').slideToggle()
    $(this).prev('.project-content').css('display', 'flex')
    $(this).toggleClass('show-button hide-button')
  })

})
