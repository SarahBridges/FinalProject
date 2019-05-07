var data = d3.csv("EducationData.csv")

data.then(function(data)
{
  console.log("data:", data);
  initialize(data);
},
function(err)
{
  console.log(err);
})

var initialize = function(data)
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
     .attr("y", function(d,i){return i*60})
     .attr("transform", "translate(0, 65)")

}
