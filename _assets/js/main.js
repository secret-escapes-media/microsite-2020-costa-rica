// general js for the project that wouldn't be a reuseable component

//////////////////////////////////////////////////////////// simple audio player
// checks if player is on page
if($('.js-audio-player').length > 0) {
  // event listener for btn click
  $('.js-audio-player').on('click', function(e){
    e.preventDefault();
    // set variables
    var btnEl = $(this)
    var audioEl = btnEl.next();
    var audioPlayingClass = 'is-playing';
    // check audio playing status
    if(audioEl.hasClass(audioPlayingClass)) {
      // sound playing - change to pause state
      audioEl[0].pause();
      audioEl.removeClass(audioPlayingClass)
      btnEl.text('Abspielen');
    } else {
      // no sound playing - change to pause state
      audioEl[0].play();
      audioEl.addClass(audioPlayingClass)
      btnEl.text('Pause');
    }
    // event listener for audio clip ending
    audioEl[0].addEventListener('ended', function(){
      // sound finished - reset to original state
      btnEl.text('Jetzt reinhören')
      audioEl[0].currentTime = 0;
      audioEl.removeClass(audioPlayingClass)
    })
  })
}