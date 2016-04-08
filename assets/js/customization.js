
var xhttp;

$( document ).ready(function() {
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.open("GET", "graphData.json", true);
  xhttp.send();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    var objs = eval(xhttp.responseText);
    console.log(objs);
  }
};

  // $.getJSON('graphData.json', function (json) {
  //   var objs = json_string.map(JSON.parse);
  //   console.log(objs);
  // });
//   function getArray(){
//     return $.getJSON('graphData.json');
// }
//
// getArray().done(function(data) {
//     // now you can use json
//     var objs = data.map(JSON.parse);
//     console.log(objs);
// });
});
// function initEditCounter(){
//   xhttp.open("GET", "editCounter.php", true);
//   xhttp.send();
// }
