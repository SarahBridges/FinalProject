d3.csv("EducationData.csv", function(data){

  console.log("data:", data)
  var screen = {height: 600, width:600}
  var margins = {top:10, bottom:10, left:10, right:10}
  var width = screen.width - margins.left - margins.right
  var height = screen.height - margins.top - margins.bottom
  var barHeight=height/data.length;
  
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
                .domain(data.map(function(d){console.log(d.UnemploymentRate); return d.UnemploymentRate}));
  svg.append("g")
     .call(d3.axisLeft(yScale))
     //.classed("yAxis", true).call(yAxis)

  svg.selectAll("rect").data(data).enter().append("rect")
     .attr("x", xScale(0))
     .attr("y", yScale(function(d){return d.EducationalAttainment}))
     .attr("width", function(d){return xScale(d.UnemploymentRate)})
     .attr("height", yScale.bandwidth())
     //.attr("fill", "blue");
  
  //var xAxis = d3.axisBottom(xScale).ticks(10)
  //var yAxis = d3.axisLeft(yScale).ticks(dataP.lentgh)
  
           //function(d,i){return (barHeight*i)})
           //function(d){return d.EducationalAttainmentP})
  

}

);
//var dataP =
//var drawChart=function(dataP)
//{
//dataP.then(function(dataP){drawChart(dataP)},function(err){console.log(err)})

