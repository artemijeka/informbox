$(function() {



  let jsonUrl = 'https://reqres.in/api/unknown?per_page=12';
  let jsonData = {};
  let resultTableHtml = '';
  


  // $(window).on('load', function() {
    //вывод данных из json в таблицу
    $.get(jsonUrl, function(data) {
      jsonData = data.data;
      for (var item of jsonData) {
        resultTableHtml += '<tr>';

        if ( Cookies.get('item-id') !== 'hidden') {
          resultTableHtml += '<td class="item-id">'+item.id+'</td>';
        } else {
          $('th.item-id').remove();
          $('#jsBtnReset').addClass('acts');
        }
        if ( Cookies.get('item-name') !== 'hidden') {
          let nameCapitalized = item.name.charAt(0).toUpperCase() + item.name.slice(1);
          resultTableHtml += '<td class="item-name">'+nameCapitalized+'</td>';
        } else {
          $('th.item-name').remove();
          $('#jsBtnReset').addClass('acts');
        }
        if ( Cookies.get('item-year') !== 'hidden') {
          resultTableHtml += '<td class="item-year">'+item.year+'</td>';
        } else {
          $('th.item-year').remove();
          $('#jsBtnReset').addClass('acts');
        }
        if ( Cookies.get('item-color') !== 'hidden') {
          resultTableHtml += '<td class="item-color"><span style="background-color:'+item.color+'"></span>'+item.color+'</td>';
        } else {
          $('th.item-color').remove();
          $('#jsBtnReset').addClass('acts');
        }
        if ( Cookies.get('item-value') !== 'hidden') {
          resultTableHtml += '<td class="item-value">'+item.pantone_value+'</td>';
        } else {
          $('th.item-value').remove();
          $('#jsBtnReset').addClass('acts');
        }

        resultTableHtml += '</tr>';
      }
      $('#jsTableTbody').html(resultTableHtml);
    },'json');
  // });



  //скрытие столбцов при клике на checkbox
  $('.js-checkbox').on('click', function() {
    if ( !$(this)[0].checked ) {//если снят checkbox      
      var targetClass = $(this).data('target');
      $('.'+targetClass).addClass('hidden');
      $('#jsBtnReset').addClass('acts');
      Cookies.set(targetClass, 'hidden');
    }
  });



  //reset кнопки механизм
  $('#jsBtnReset').on('click', function() {
    $('#jsBtnReset').removeClass('acts');
    $('input:checkbox').prop('checked', true);//добавим состояние checked для всех чекбоксов 
    Cookies.set('item-id', '');
    Cookies.set('item-name', '');
    Cookies.set('item-year', '');
    Cookies.set('item-color', '');
    Cookies.set('item-value', '');
    window.location.reload();
  });



});