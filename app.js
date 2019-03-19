console.log('loaded')

$('DOM content loaded', function() {

  $('.project-content').hide()

  $('button').click(function () {
    $(this).prev('.project-content').slideToggle()
    $(this).prev('.project-content').css('display', 'flex')
    $(this).toggleClass('show-button hide-button')
  })

})
