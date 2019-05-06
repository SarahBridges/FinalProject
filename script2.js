var dataP = d3.csv("EducationData.csv");

var drawChart=function(dataP)
{
  console.log("dataP:", dataP)
  var screen = {height: 600, width:600}
  var margins = {top:10, bottom:10, left:10, right:10}
  var width = screen.width - margins.left - margins.right
  var height = screen.height - margins.top - margins.bottom
  var barHeight=height/dataP.length;
  
  var svg = d3.select("#chart").attr("height", screen.height).attr("width", screen.width)
  
  var xScale = d3.scaleLinear().domain([0, 2000]).range([0, width]);
  var yScale = d3.scaleLinear().domain([0,dataP.length]).range([height,0]);
  
  svg.selectAll("rect").data(dataP).enter().append("rect")
     .attr("width", function(d){return     }).attr("height", function(d){return     })
  
  var xAxis = d3.axisBottom(xScale).ticks(10)
  var yAxis = d3.axisLeft(yScale).ticks(dataP.lentgh)
  
  svg.append("g").classed("xAxis", true).call(xAxis)
  svg.append("g").classed("yAxis", true).call(yAxis)
