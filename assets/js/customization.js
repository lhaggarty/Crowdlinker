
var xhttp;

var type = [];
type[901]='22:amount';
type[800]='20:earned';
type[690]='16:amount';
type[500]='13:earned';
type[401]='8:amount';
type[404]='3:earned';
console.log(type[5]);
var month= [];
var graphValue= [];
var likes= [];
var views= [];
var shares= [];
$( document ).ready(function() {
  $("#specialValue").css({opacity:0});
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
      likes.push(objs[i]['likes']);
      views.push(objs[i]['views']);
      shares.push(objs[i]['shares']);

      // document.getElementById("graphValue").value =$( "#graphValue" ).val() + ((i ==0 ) ? graphValue[i] : "," + graphValue[i]);
      // document.getElementById("type").value =$( "#type" ).val() + ((i ==0 ) ? type[i] : ',' + type[i]);
      // document.getElementById("likes").value =$( "#likes" ).val() + ((i ==0 ) ? likes[i] : "," + likes[i]);
      // document.getElementById("views").value =$( "#views" ).val() + ((i ==0 ) ? views[i] : "," + views[i]);
      // document.getElementById("shares").value =$( "#shares" ).val() + ((i ==0 ) ? shares[i] : "," + shares[i]);
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

function specialValue (currentValue,xcoord,ycoord){
  var box=$("#specialValue");
  if (type[currentValue] !== void 0 && type[currentValue].indexOf('a') !==-1) {
    var cut=type[currentValue].split(":");
    var i = cut[0];
    if(type[currentValue].indexOf('e') !==-1){
      box.html('<h3 class="box-header">€'+ currentValue +'</h3>'+
                '<span>Earned For ' + month[i] + '</span></h3>');
      box.css({background: '#838CC7'});
    } else if (type[currentValue].indexOf('m') !==-1) {
      box.html('<h3 class="box-header"><i class="fa fa-check-circle-o"></i>' +
              '<span> Achievement Unlocked</span></h3>' +
              '<hr style="margin-top:10px">' +
              '<div class="box-text"><span><i class="fa fa-thumbs-up icon"></i>  '+ likes[i] + ' Likes</span>' +
              '<span><i class="fa fa-eye icon"></i>'+ views[i] + ' Views</span>' +
              '<span><i class="fa fa-share icon"></i>'+ shares[i] + ' Shares</span></div>');
      box.css({background: '#39ADD1'});
    }
    box.css ({
      opacity: 1,
      left: xcoord + 'px',
      top: ycoord + 'px',
    });
    setTimeout(function(){
      box.css({
            opacity: 0
        });
   },1500);
  }
}
$( window ).resize(function() {
  
});
