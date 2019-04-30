var dataP = d3.csv("EducationData.csv");

dataP.then(function(edu)
  {
    console.log("data", edu)
    
    
  },
  function(err){console.log(err)})

var Earnings = function(edu)
{
  //measurements
  var screen = {height:600, width:600};

  var barHeight = screen.height/edu.length;

  var margins = {top:10, left:10, right: 10, bottom:10};
  //grab svg
  var svg = d3.select("svg")
              .attr("width", screen.width)
              .attr("height", screen.height);
  //scales
  var xScale = d3.scaleLinear()
                 .domain([0, 2000])
                 .range([0, width]);

  var yScale = d3.scaleBand()
                 .range([0, height])
                 .domain(data.map(function(d){return d.EducationalAttainment}));
  //axes
  var xAxis = svg.append("g")
                 .attr("transform", "translate(0," + height + ")")
                 .call(d3.axisBottom(xScale))
                 .selectAll("text")
                 .attr("transform", "translate(-10,0)rotate(-45)")
                 .style("text-anchor", "end");

  var yAxis = svg.append("g")
                 .call(d3.asxisLeft(yScale));
  //bars
  svg.selectAll("rect")
     .data(dataP)
     .enter()
     .append("rect")
     .attr("x",xScale(0))
     .attr("y", function(d){return yScale(d.MedianUsualWeeklyEarnings)})
     .attr("width", function(d){return d.MedianUsualWeeklyEarnings})
     .attr("height", yScale(bandwidth()))
     .attr("fill", "blue");
}
