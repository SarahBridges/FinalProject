var data = d3.csv("EducationData.csv")

data.then(function(data)
{
  console.log("data:", data);
  drawAxisLabels(data);
  drawAxes(data);
  drawBars(data);
  drawBarLabels(data);
},
function(err)
{
  console.log(err);
})

var chart = function(data)
{
  var svg = d3.select("chart")
              .attr("width", 1000)
              .attr("height", 1000)
}

var drawAxisLabels = function(data)
{
  var width = 600
  var height = 600
  var barheight = height/data.length
  
  var svg = d3.select("#axisLabels")
              .attr("width", width)
              .attr("height", height)
  
  svg.selectAll("text")
     .data(data)
     .enter()
     .append("text")
     .text(function(d){return d.EducationalAttainment})
     .attr("x", function(d){return d})
     .attr("y", function(d,i){return i*20})
     .attr("transform", "translate(0, 100)")

}

var drawAxes = function(data)
{
  var svg = d3.select("#axes")
}

var drawBars = function(data)
{
  var svg = d3.select("#bars")
}

var drawBarLabels = function(data)
{
  var svg = d3.select("#barLabels")
}
