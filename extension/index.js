;(function ($) {
"use strict";
$.fn.qrCode = function() {
  //validation
  //1. disabling input char on range class
  $(".range").bind({
    keydown: function(el){
      if(el.shiftKey === true ){
        if (el.which == 9)
        {return true;}
        return false;
      }
      if(el.which > 57){
        return false;
      }
      if(el.which==32)
      {return false;}
        return true;
      }
  });
  //2. set default val parameter
  $('.range').val('1');

  $('.refresh').click(function()
    {
      $('#result').empty();
      $('#prefix').val('');
      $('.range').val('1');
    });

  $('.generate').on('click', function()
  {
    //create download button
    $('#result').empty();
    let sf = $('#sf').val();
    let f = $('#f').val();
    //console.log(sf + '-' + f);
    let prefix = $('#prefix').val();
    var i = sf;
    var i = i;
    for(i;i<=f; i++)
    {
      $('#result').append(getPrefix(prefix+i));
      //var dataImg = $
    }
  });

  function getPrefix(data)
  {
    var prefix = data;
    var initDiv = $('#result').append('<div id="result'+prefix+'" class="column-2" style="font-size:20px;padding: 5px;"><b>'+prefix+'</b></div>')
    var result = document.getElementById('result'+prefix);
    var generator = new QRCode(result,{
      name:prefix,
      width: 100,
      height: 100,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });

    generator.clear();
    generator.makeCode(prefix);
  }

};
}( jQuery ));
