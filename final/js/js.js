$(document).ready(function(){

  // set up var array to loop colors
    var colors = ["#BCCEE1", "#E2CAD9", "#B4D8BC", "#E2D2CA", "#D4CAE2", "#D69494", "#7DA5D3", "#5EA177", "#D694A7", "#A094D6"];
    var index = 0;

  // set up array to loop fonts
    var fonts = ["Courier", "Helvetica", "cursive", "Impact", "Georgia"];
    var fontIndex = 0;

     // set up array to loop fonts
    var size = ["36px", "12px", "18px", "24px", "30px"];
    var sizeIndex = 0;

    // var pronouns = ["I", "you", "we", "me", "they", "she", "it", "he", "him", "her", "their", "them"];
    // var randomPronun = pronouns[Math.floor(Math.random() * pronouns.length)];
    // var randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];

    // var a = ["Roger", "Russell", "Clyde", "Egbert", "Clare", "Bobbie", "Simon", "Elizabeth", "Ted", "Caroline"];

    // var randA = a[Math.floor(Math.random() * a.length)];

  $(document).keypress(function(e){
    // prevent default keypress actions
    event.preventDefault();

    // x = the key that's pressed
    var x = (event.keyCode ? event.keyCode : event.which);

   //letter a / A
    if(x == '65' || x == '97' ){
      console.log('you pressed !a!');
      $('#cursor').before('<span class="written">honey </span>');
    }

    //letter b / B
    if(x == '66' || x == '98' ){
      console.log('you pressed !b!');
      $('#cursor').before('<span class="written">baby </span>');
    }

    //letter c / C
    if(x == '67' || x == '99' ){
      console.log('you pressed !c!');
      $('#cursor').before('<span class="written">love </span>');
    }

    //letter d / D
    if(x == '68' || x == '100' ){
      console.log('you pressed !d!');
      $('#cursor').before('<span class="written">fluff </span>');
    }

    //letter e / E
    if(x == '69' || x == '101' ){
      console.log('you pressed !e!');
      $('#cursor').before('<span class="written">blush </span>');
    }

    //letter f / F
    if(x == '70' || x == '102' ){
      console.log('you pressed !f!');
      $('#cursor').before('<span class="written">crave </span>');
    }

    //letter g / G
    if(x == '71' || x == '103' ){
      console.log('you pressed !g!');
      $('#cursor').before('<span class="written">fair </span>');
    }

    //letter h / H
    if(x == '72' || x == '104' ){
      console.log('you pressed !h!');
      $('#cursor').before('<span class="written">cabbage </span>');
    }

    //letter i / I
    if(x == '73' || x == '105' ){
      console.log('you pressed !i!');
      $('#cursor').before('<span class="written">hot </span>');
    }

    //letter j / J
    if(x == '74' || x == '106' ){
      console.log('you pressed !j!');
      $('#cursor').before('<span class="written">soft </span>');
    }

    //letter k / K
    if(x == '75' || x == '107' ){
      console.log('you pressed !k!');
      $('#cursor').before('<span class="written">sweet </span>');
    }

    //letter l / L
    if(x == '76' || x == '108' ){
      console.log('you pressed !l!');
      $('#cursor').before('<span class="written">spicy </span>');
    }

    //letter m / M
    if(x == '77' || x == '109' ){
      console.log('you pressed !m!');
      $('#cursor').before('<span class="written">money </span>');
    }

    //letter n / N
    if(x == '78' || x == '110' ){
      console.log('you pressed !n!');
      $('#cursor').before('<span class="written">coarse </span>');
    }

    //letter o / O
    if(x == '79' || x == '111' ){
      console.log('you pressed !o!');
      $('#cursor').before('<span class="written">light </span>');
    }

    //letter p / P
    if(x == '80' || x == '112' ){
      console.log('you pressed !p!');
      $('#cursor').before('<span class="written">sugar </span>');
    }

    //letter q / Q
    if(x == '81' || x == '113' ){
      console.log('you pressed !q!');
      $('#cursor').before('<span class="written">kiddo </span>');
    }

    //letter r / R
    if(x == '82' || x == '114' ){
      console.log('you pressed !r!');
      $('#cursor').before('<span class="written">chaos </span>');
    }

    //letter s / S
    if(x == '83' || x == '115' ){
      console.log('you pressed !s!');
      $('#cursor').before('<span class="written">marble </span>');
    }

    //letter t / T
    if(x == '84' || x == '116' ){
      console.log('you pressed !t!');
      $('#cursor').before('<span class="written">clouds </span>');
    }

    //letter u / U
    if(x == '85' || x == '117' ){
      console.log('you pressed !u!');
      $('#cursor').before('<span class="written">flowers </span>');
    }

    //letter v / V
    if(x == '86' || x == '118' ){
      console.log('you pressed !v!');
      $('#cursor').before('<span class="written">gentle </span>');
    }

    //letter w / W
    if(x == '87' || x == '119' ){
      console.log('you pressed !w!');
      $('#cursor').before('<span class="written">touch </span>');
    }

    //letter x / X
    if(x == '88' || x == '120' ){
      console.log('you pressed !x!');
      $('#cursor').before('<span class="written">kiss </span>');
    }

    //letter y / Y
    if(x == '89' || x == '121' ){
      console.log('you pressed !y!');
      $('#cursor').before('<span class="written">cuddle </span>');
    }

    //letter z / Z
    if(x == '90' || x == '122' ){
      console.log('you pressed !z!');
      $('#cursor').before('<span class="written">spoon </span>');
    }

    // space bar to change background color
    if (x == '32') {
      console.log('you pressed !spacebar!');
      $('body').css("background-color", colors[index]);
      $("body").css("transition","2s");
      index = index >= colors.length?0:index+1;//if end of array reset variable to 0
    }

  //enter to insert page break
    if(x == '13'){
      console.log('you pressed !enter!');
      $('#cursor').before('</br>');
    }

  //enter to insert period
    if(x == '46'){
      console.log('you pressed !.!');
      $('#cursor').before('<span class="written">. </span>');
    }

    //enter to insert comma
    if(x == '44'){
      console.log('you pressed !,!');
      $('#cursor').before('<span class="written">, </span>');
    }

    //if pressed key is a #1 (backspace (delete) || x == 8/'127')
    if (x == '49'){
      $(".written").last().remove();
      console.log("you pressed delete");
    }
  })

  //margin left
  $('.margin-left').click(function() {
    $(this).toggleClass('margin-click');
    $('.container').css('padding','75px');
    $('.margin-center').removeClass('margin-click');
  })
  
  //margin center
  $('.margin-center').click(function() {
    $(this).toggleClass('margin-click');
    $('.container').css('padding','75px 200px 75px 200px');
    $('.margin-left').removeClass('margin-click');
  })

  //margin right
  // $('.margin-right').click(function() {
  //   $(this).toggleClass('margin-click')
  //   $('.container').css('padding','75px 75px 75px 200px');
  // })

  //change font family
  $('.font-fam').click(function() {
    $(this).find('p').addClass('font-click');
    $('.written').css("font-family", fonts[fontIndex]);
      fontIndex = fontIndex >= fonts.length?0:fontIndex+1;//if end of array reset variable to 0
  })

   //change font size
  $('.font-size').click(function() {
    $(this).find('p').addClass('font-click');
    $('.written').css("font-size", size[sizeIndex]);
      sizeIndex = sizeIndex >= size.length?0:sizeIndex+1;//if end of array reset variable to 0
  })




});