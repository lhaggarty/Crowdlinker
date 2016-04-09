
var xhttp;
var month= [];
var graphValue= [];
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
    // console.log(objs);
    for (var i= 0; i<objs.length; i++){
      month.push(objs[i]['month']);
      graphValue.push(objs[i]['graphValue']);
    };
    // console.log(month);
    // console.log(graphValue);
  }
};

});
function updateGraph (sliderValue){

  var j=0;
  for (var i=sliderValue; i<(sliderValue+7); i++){
    myLineChart.removeData();
    myLineChart.addData([graphValue[i]], month[i]);
    // myLineChart.datasets[0].points[j].value=graphValue[i];
    // myLineChart.datasets[0].labels[j].value=month[i];
    j++;
  };

  myLineChart.update();
}
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
  // function initEditCounter(){
  //   xhttp.open("GET", "editCounter.php", true);
  //   xhttp.send();
  // }
