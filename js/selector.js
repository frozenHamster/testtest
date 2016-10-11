$(document).ready(function(){
$('#show').click(function(){
  $('p').show();
})
$('#hide').click(function(){
  $('p').hide();
})
$('#slideup').click(function(){
  $('p').slideUp(500);
})
$('#slidedown').click(function(){
  $('p').slideDown(1000);
})
$('#fadein').click(function(){
  $('p').fadeIn(1000);
})
$('#fadeout').click(function(){
  $('p').fadeOut(1000);
})
$('#toggle').click(function(){
  $('p').toggle('slow');
})
$('#slidetoggle').click(function(){
  $('p').slideToggle('fast');
})
$('#fadetoggle').click(function(){
  $('p').fadeToggle('slow','linear');
})

});





  //
  // $('input#content').focus(function(){
  //   console.log('focusing to #content');
  // });
  // $('input#content').blur(function(){
  //   console.log('blur to #content');
  // });
  // $('select').change(function(){
  //   console.log('select value change');
  // });
  // $('input#content').keydown(function(){
  //   console.log('keydown');
  // });
  // $('input#content').keyup(function(){
  //   console.log('keyup');
  // });
  //
  //
  //   $('input#act').click(function(){
  //     console.log('click');
  //   });
  //   $('input#act').hover(function(){
  //     console.log('hover');
  //   });
  //   $('input#toggle').click(function(){
  //     $('p.target').toggle(100,function(){
  //       console.log('toggle it');
  //     })
  //   });
