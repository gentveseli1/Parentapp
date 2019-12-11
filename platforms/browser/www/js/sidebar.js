function hamburgerClick(){
  $('.bbros-side-bar').css('left','0')
  $('.bbros-close').css({'opacity':'1','visibility':'visible'})
  $('.bbros-close').css({'display': 'flex'})
}

function hamburgerClose(){
  $('.bbros-side-bar').css('left','-75%')
  $(this).css({'opacity':'0','visibility':'hidden'})
  $('.bbros-close').css({'display': 'none'})
}