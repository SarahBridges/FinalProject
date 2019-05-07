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
  //sizes
  var width = 600
  var height = 600
  var barheight = height/data.length
  //svg
  var svg = d3.select("#chart")
              .attr("width", width+200)
              .attr("height", height+200)
  //axis labels
  svg.selectAll("text")
     .data(data)
     .enter()
     .append("text")
     .text(function(d){return d.EducationalAttainment})
     .attr("x", function(d){return d})
     .attr("y", function(d,i){return i*65})
     .attr("transform", "translate(0, 65)")
  //axes
    //scales
  var xScale = d3.scaleLinear()
                 .domain([0, 5])
                 .range([0, width])

  var yScale = d3.scaleLinear()
                 .domain([0, 8])
                 .range([height, 0])
    //axes
  var xAxis = d3.axisBottom().scale(xScale)
  var yAxis = d3.axisLeft().scale(yScale)
  
  svg.append("g").classed("xAxis", true).call(xAxis).attr("transform", "translate(150, 580)")
  svg.append("g").classed("yAxis", true).call(yAxis).attr("transform", "translate(150, 50)")
}
