console.log('loaded')

$(function() {


  // $('.show-button').click(function() {
  //
  // })

  $('.project-content').hide()

  $('button').click(function () {
    $(this).prev('.project-content').slideToggle()
    $(this).prev('.project-content').css('display', 'flex')
    $(this).toggleClass('show-button hide-button')
  })

})





// function onClick(e) {
//   const content = e.previousElementSibling
//   if (content.style.display === 'flex') {
//     content.style.display = 'none'
//     e.classList.remove('hide-button')
//     e.classList.add('show-button')
//   } else {
//     content.style.display = 'flex'
//     e.classList.remove('show-button')
//     e.classList.add('hide-button')
//   }
// }
































// function onClick(e) {
//   // console.log(e.classList)
//   const content = e.previousElementSibling
//   content.classList.toggle('hide')
//   // console.log(content)
//   if (content.classList.contains === 'title-area') {
//     // content.classList.remove('show')
//     // content.classList.add('hide')
//     e.classList.remove('hide-button')
//     e.classList.add('show-button')
//   } else {
//     // content.classList.remove('hide')
//     // content.classList.add('show')
//
//     // content.style.display = 'flex'
//     e.classList.remove('show-button')
//     e.classList.add('hide-button')
//   }
// }



// function showSpace() {
//   const space = document.querySelector('.space')
//   const button = document.querySelector('.space-button')
//   if (space.style.display === 'flex') {
//     space.style.display = 'none'
//     button.classList.remove('hide-button')
//     button.classList.add('show-button')
//   } else {
//     space.style.display = 'flex'
//     button.classList.remove('show-button')
//     button.classList.add('hide-button')
//   }
// }

// function showHackathon() {
//   const space = document.querySelector('.hackathon')
//   if (space.style.display === 'flex') space.style.display = 'none'
//   else space.style.display = 'flex'
// }
//
// function showTravel() {
//   const space = document.querySelector('.travel')
//   if (space.style.display === 'flex') space.style.display = 'none'
//   else space.style.display = 'flex'
// }
//
// function showBarlevard() {
//   const space = document.querySelector('.barlevard')
//   if (space.style.display === 'flex') space.style.display = 'none'
//   else space.style.display = 'flex'
// }
