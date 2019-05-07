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

var drawAxisLabels = function(data)
{
  var width = 600
  var height = 600
  var barheight = height/data.length
  
  var svg = d3.select("#chart")
              .attr("width", width)
              .attr("height", height)
  
  svg.selectAll("text")
     .data(data)
     .enter()
     .append("text")
     .text(function(d){return d.EducationalAttainment})
     .attr("x", function(d){return d})
     .attr("y", function(d,i){return i*50})
     //.attr("transform", "translate(0, 100)")

}

var drawAxes = function(data)
{
  var svg = d3.select("#chart")
}

var drawBars = function(data)
{
  var svg = d3.select("#chart")
}

var drawBarLabels = function(data)
{
  var svg = d3.select("#chart")
}
