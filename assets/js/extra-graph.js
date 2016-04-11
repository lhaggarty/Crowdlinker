var randomScalingFactor = function(value){ return Math.round(value*100)};
var lineChartData;
var styleSpan = document.createElement("SPAN");        // Create a <button> element
$(styleSpan).css({
});


var slider = document.getElementById('slider');

noUiSlider.create(slider, {
	start: [12],
  step: 1,
	range: {
		'min': 0,
		'max': 24
	}
});
slider.noUiSlider.on("change", function( values, handle ) {
  updateGraph(Math.round(slider.noUiSlider.get()));
});
var myLineChart;
window.onload = function(){
  sliderValue=12;
  lineChartData = {
    labels : [
      month[sliderValue], month[sliderValue+1] , month[sliderValue+2],
      month[sliderValue+3], month[sliderValue+4], month[sliderValue+5] , month[sliderValue+6]
    ],
    datasets : [
      {
        label: "My Second dataset",
        fillColor : "rgba(151,187,205,0.2)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        pointHighlightFill : "#fff",
        pointHighlightStroke : "rgba(151,187,205,1)",
        data : [graphValue[sliderValue],graphValue[sliderValue+1],
        graphValue[sliderValue+2],graphValue[sliderValue+3],
        graphValue[sliderValue+4],graphValue[sliderValue+5],
        graphValue[sliderValue+6]]
      }
    ]

  }
  var ctx = document.getElementById("canvas").getContext("2d");
  myLineChart = new Chart(ctx).Line(lineChartData, {
    scaleShowHorizontalLines: false,
    scaleShowVerticalLines: true,
    showScale: true,
    bezierCurve : false,
    responsive: true,
    customTooltips: true,
    // tooltipTemplate: function(v) {return btn+"<%if (label=='March'){%><%=label%>: <%}%><%= value %> sdf 99";},
    customTooltips: function(tooltip) {
        var tooltipEl = $('#chartjs-tooltip');
        // var type = $('#type').val();
        // type= type.split(",");
        // var likes = $('#likes').val();
        // likes= likes.split(",");
        // var views = $('#views').val();
        // views= views.split(",");
        // var shares = $('#shares').val();
        // shares= shares.split(",");
        // var innerHtml;
        // tooltip will be false if tooltip is not visible or should be hidden
        if (!tooltip) {

            return;
        }

        tooltipEl.removeClass('above below');
        tooltipEl.addClass(tooltip.yAlign);
        var parts = tooltip.text.split(":");
        var check=-1;
        var xpos = tooltip.chart.canvas.offsetLeft + tooltip.x ;
        var ypos = tooltip.chart.canvas.offsetTop + tooltip.y ;
        specialValue(parts[1].trim(),xpos, ypos);
            // console.log(check);

          innerHtml = '<i class="fa fa-info-circle circle-pad"></i> '+
          '<span>' + parts[0].trim() + '</span>: <span>€' + parts[1].trim() + ' </span>'+
          "";
          tooltipEl.css({
              opacity: 1,
              left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
              top: tooltip.chart.canvas.offsetTop + (-80) + tooltip.y + 'px',
              fontFamily: tooltip.fontFamily,
              fontSize: tooltip.fontSize,
              fontStyle: tooltip.fontStyle,
          });

        tooltipEl.html(innerHtml);
        // tooltipEl.css({tooltipCSS});
        setTimeout(function(){
          tooltipEl.css({
                opacity: 0
            });
       },3000);
      }
  });

}
