var dataP = d3.csv("EducationData.csv");

data.then(function(data)
  {
    console.log("data", data)
    
    
  },
  function(err){console.log(err)})

var screen = {height:600, width:600}

var margins = {top:10, left:10, right: 10, bottom:10}

var xScale = d3.scaleLinear()
               .domain([0, 2000])
               .range([0, width])

var yScale = d3.scaleLinear()
               .domain([0, 10])
               .range([0, height])

var xAxis = svg.append("g")
               .attr("transform", "translate(0," + height + ")")
               .call(d3.axisBottom(xScale))
               .selectAll("text")
               .attr("transform", "translate(-10,0)rotate(-45)")
               .style("text-anchor", "end")

var yAxis = svg.append("g")
               .call(d3.asxisLeft(yScale))

var Earnings = function(data)
{
  var svg = d3.select("svg")
              .attr("width", screen.width)
              .attr("height", screen.height)

  svg.selectAll("rect")
     .data(dataP)
     .enter()
     .append("rect")
     .attr("x",xScale(0))
     .attr("y", function(d){return yScale(d.MedianUsualWeeklyEarnings)})
}

