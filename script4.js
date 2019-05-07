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
}
})

var drawAxisLabels = function(data)
{
  var width = 200
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
     .attr("y", function(d,i){return i*barheight})

}

var drawAxes = function(data)
{
  var svg = d3.select("#axes")
}

var drawBars = functions(data)
{
  var svg = d3.select("#bars")
}

var drawBarLabels = functions(data)
{
  var svg = d3.select("#barLabels")
}
