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
  var svg = d3.select("body").append("svg")
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
                 .domain([0, 6])
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
     .attr("width", function(d){return xScale(d.UnemploymentRate)})
     .attr("height", barheight-5)
     .attr("fill", "teal")
     .attr("transform", "translate(181, 49)")

}
var update = function(data, button)
{
  d3.select("svg").remove();
  
   //sizes
  var width = 600
  var height = 600
  var barheight = height/data.length
  //svg
  var svg = d3.select("body").append("svg")
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
                 .domain([0, function(d){if(button="UR"){return 6}
                                         else if (button="ME"){return 2000}
                                         else if (button="MP"){return 15}
                                         else if (button="WP"){return 20}}])
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
     .attr("x", function(d,i){if(button="UR"){return d.UnemploymentRate}
                              else if (button="ME"){return d.MedianUsualWeeklyEarnings}
                              else if (button="MP"){return d.MenBelowPovertyLevel}
                              else if (button="WP"){return d.WomenBelowPovertyLevel}})
     .attr("y", function(d,i){return (i*barheight)})
     .attr("width", function(d){if(button=="UR"){return xScale(d.UnemploymentRate)}
                                else if (button="ME"){return xScale(d.MedianUsualWeeklyEarnings)}
                                else if (button="MP"){return xScale(d.MenBelowPovertyLevel)}
                                else if (button="WP"){return xScale(d.WomenBelowPovertyLevel)}})
     .attr("height", barheight-5)
     .attr("fill", "teal")
     .attr("transform", "translate(181, 49)")

}
