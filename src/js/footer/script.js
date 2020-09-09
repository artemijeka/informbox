$(function() {


  let jsonUrl = 'https://reqres.in/api/unknown?per_page=12';
  let jsonData = {};
  let resultTableHtml = '';
  

  //вывод данных из json в таблицу
  $.get(jsonUrl, function(data) {
    jsonData = data.data;
    for (var item of jsonData) {
      let nameCapitalized = item.name.charAt(0).toUpperCase() + item.name.slice(1)
      resultTableHtml += '<tr><td class="item-id">'+item.id+'</td><td class="item-name">'+nameCapitalized+'</td><td class="item-year">'+item.year+'</td><td class="item-color"><span style="background-color:'+item.color+'"></span>'+item.color+'</td><td class="item-value">'+item.pantone_value+'</td></tr>';
    }
    $('#jsTableTbody').html(resultTableHtml);
  },'json');


  //скрытие столбцов при клике на checkbox
  $('.js-checkbox').on('click', function() {
    if ( !$(this)[0].checked ) { //если снят checkbox      
      var targetClass = $(this).data('target');
      $('.'+targetClass).addClass('hidden');
      $('#jsBtnReset').addClass('acts');
      Cookies.set(targetClass, 'hidden');
    }

  });



  /* 
  * item-id
  * item-name
  * item-year
  * item-color
  * item-value
  */
  Cookies.get();

  hideColByCoockie('item-id');
  hideColByCoockie('item-name');
  hideColByCoockie('item-year');
  hideColByCoockie('item-color');
  hideColByCoockie('item-value');
  
  /* TODO */
  function hideColByCoockie(classOfCol) {
    console.log(classOfCol);
    if ( Cookies.get(classOfCol) == 'hidden' ) {
      console.log( Cookies.get(classOfCol) );
      $('.' + classOfCol).addClass('hidden');
      console.log( $('.' + classOfCol) );
      $('#jsBtnReset').addClass('acts');
    }
  }



  $('#jsBtnReset').on('click', function() {
    $('.hidden .js-checkbox').click();
    $('thead tr th, tbody tr td').removeClass('hidden');
    Cookies.set('item-id', '');
    Cookies.set('item-name', '');
    Cookies.set('item-year', '');
    Cookies.set('item-color', '');
    Cookies.set('item-value', '');
  });

  

});