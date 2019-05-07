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
  var svg = d3.select("#axisLabels")
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
