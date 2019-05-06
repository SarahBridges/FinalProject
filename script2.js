var dataP = d3.csv("EducationData.csv");

var drawChart=function(dataP)
{
  console.log("dataP:", dataP)
  var screen = {height: 600, width:600}
  var margins = {top:10, bottom:10, left:10, right:10}
  var width = screen.width - margins.left - margins.right
  var height = screen.height - margins.top - margins.bottom
  var barHeight=height/dataP.length;
  
  var svg = d3.select("#chart")
              .attr("height", screen.height)
              .attr("width", screen.width)
              .attr("transform", "translate(" + margins.left + "," + margins.top + ")")
  
  var xScale = d3.scaleLinear().domain([0, 2000]).range([0, width]);
  svg.append("g")
     .attr("transform", "translate(0," + height +")")
     .call(d3.axisBottom(xScale))
     .selectAll("text")
     .attr("transfomr", "translate(-10,0)rotate(-45)")
     .style("text-anchor", "end")
//     .classed("xAxis", true).call(xAxis)
  
  var yScale = d3.scaleBand()
                 .range([0,height])
                .domain(dataP.map(function(d){console.log(d.UnemploymentRate[d]); return d.UnemploymentRate}));
  svg.append("g")
     .call(d3.axisLeft(yScale))
     //.classed("yAxis", true).call(yAxis)

  svg.selectAll("rect").data(dataP).enter().append("rect")
     .attr("x", xScale(0))
     .attr("y", yScale(function(d){return d.UnemploymentRate}))
     .attr("width", function(d){return xScale(d.UnemploymentRate)})
     .attr("height", yScale.bandwidth())
     //.attr("fill", "blue");
  
  //var xAxis = d3.axisBottom(xScale).ticks(10)
  //var yAxis = d3.axisLeft(yScale).ticks(dataP.lentgh)
  
           //function(d,i){return (barHeight*i)})
           //function(d){return d.EducationalAttainmentP})
  

}

dataP.then(function(dataP){drawChart(dataP)},function(err){console.log(err)})
