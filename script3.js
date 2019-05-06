var data = d3.csv("EducationData.csv");

var drawChart = function(data)
{
  var width = 600;
  var height = 600;
  var barwidth = width/data.length;
  var svg = d3.select("#chart")
              .attr("width", width)
              .attr("height", height)
  
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x", function(d,i){return i*barwidth;})
     .attr("y", function(d){console.log(d); return height - d.UnemploymentRate})

}

data.then(function(data)
{
  console.log("data:", data);
  drawChart(data);
},
function(err){console.log(err);
})
