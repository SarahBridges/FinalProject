var dataP = d3.csv("EducationData.csv");

dataP.then(function(edu)
  {
    console.log("data", edu);
    Earnings(edu);
    
  },
  function(err){console.log(err)})

var Earnings = function(edu)
{
  //measurements
  var screen = {height:600, width:600};

  var barHeight = screen.height/edu.length;

  var margins = {top:10, left:10, right: 10, bottom:10};
  
  var width = screen.width - margins.left - margins.right;
  var height = screen.height = margins.top - margins.bottom;
  
  //grab svg
  var svg = d3.select("#chart")
              .attr("width", width)
              .attr("height", height);
  //scales
  var xScale = d3.scaleLinear()
                 .domain([0, 2000])
                 .range([0, width]);

  var yScale = d3.scaleLinear()
                 .domain([0,10])
                .range([height, 0]);
  //var plotLand
  
  //axes
  var xAxis = d3.axisBottom(xScale);
      svg.append("g").classed("xAis", true)
                     .call(xAxis)
                     .attr("transform", "translate(" margins.left + "," + (margins.top+height) + ")");

  var yAxis = d3.axisLeft(yScale);
      svg.append("g").classed("yAxis", true)
                 .call(yAxis)
                 .attr("transform", "translate(" + margins.left + ", 10)");
  //bars
  svg.selectAll("rect")
     .data(dataP)
     .enter()
     .append("rect")
     .attr("x",xScale(0))
     .attr("y", function(d){return yScale(d.MedianUsualWeeklyEarnings)})
     .attr("width", function(d){return d.MedianUsualWeeklyEarnings})
     .attr("height", yScale.bandwidth)
     .attr("fill", "blue");
}
// #factors #chart
