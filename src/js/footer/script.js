$(function() {



  var jsonUrl = 'https://reqres.in/api/unknown?per_page=12';
  
  $.get(jsonUrl, function(data){
    console.log(data.data);
  },'json');
  
  
  
});



// 'use strict';

// const request = new XMLHttpRequest();
// const url = "https://reqres.in/api/unknown.php";
// const params = "per_page=12";

// request.responseType = "json";
// request.open("POST", url, true);
// request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// request.send(params);
// request.addEventListener("readystatechange", () => {

//   // console.log('test');

//   if (request.readyState === 4 ) {
//     console.log('test');
//     let obj = request.response;
//     console.log(obj);
//   }

// });

