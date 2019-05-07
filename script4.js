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
              .attr("height", height+100)
  //axis labels
  svg.selectAll("text")
     .data(data)
     .enter()
     .append("text")
     .text(function(d){return d.EducationalAttainment})
     .attr("x", function(d){return d})
     .attr("y", function(d,i){return i*70})
     .attr("transform", "translate(0, 65)")
  //axes
    //scales
  var xScale = d3.scaleLinear()
                 .domain([0, 5])
                 .range([0, width])

  var yScale = d3.scaleLinear()
                 .domain(8)
                 .range([height, 0])
    //axes
  var xAxis = d3.axisBottom().scale(xScale)
  var yAxis = d3.axisLeft().scale(yScale)
  
  svg.append("g").classed("xAxis", true).call(xAxis).attr("transform", "translate(180, 650)")
  svg.append("g").classed("yAxis", true).call(yAxis).attr("transform", "translate(180, 50)")
  
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x", function(d,i){return d.UnemploymentRate;})
     .attr("y", function(d,i){return (i*barheight)})
     .attr("width", function(d){return xScale(d.Unemploymentrate)})
     .attr("height", barheight)
     .attr("fill", "teal")
     .attr("transform", "translate(185, 55)")
}
