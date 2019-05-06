var data = d3.csv("EducationData.csv");

var drawChart = function(data)
{
  var screen = {width: 600, height:600}
  var margins = {top:10, bottom:10, left:100, right:10}
  var width = screen.width-margins.left-margins.right
  var height = screen.height-margins.top-margins.bottom
  var barheight = height/data.length;
  
  var svg = d3.select("#chart")
              .attr("width", width)
              .attr("height", height)
  
  var yScale = d3.scaleLinear()
                 .domain([0, data.length])
                 .range([0,width]);

  var xScale = d3.scaleLinear()
                 .domain([0,d3.max(data)])
                 .range([height,0]);
  
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x", function(d,i)
           {console.log("d", d); 
            console.log("d.UR", d.UnemploymentRate); 
            return d.UnemploymentRate;})
     .attr("y", function(d,i){return i*barheight;})
     .attr("width", function(d){return d.UnemploymentRate*100})
     .attr("height", barheight)
     .attr("fill", "teal")
  
  var yAxis = d3.axisLeft(yScale).ticks(function(d){return d.EducationalAttainment}).tickSize(1)
  svg.append("g").classed("yAxis", true).call(yAxis)
}

var drawLabels = function(data)
{
  var screen = {width: 600, height:600}
  var margins = {top:10, bottom:10, left:100, right:10}
  var width = screen.width-margins.left-margins.right
  var height = screen.height-margins.top-margins.bottom
  var barheight = height/data.length;
  
  var svg = d3.select("#chart")
              .attr("width", width)
              .attr("height", height)
  
  svg.selectAll("text")
     .data(data)
     .enter()
     .append("text")
     .text(function(d){return d.UnemploymentRate})
     .attr("x", function(d,i){return d.UnemploymentRate})
     .attr("y", function(d,i){return ((i*barheight)+50)})
     .attr("fill", "white")
}

data.then(function(data)
{
  console.log("data:", data);
  drawChart(data);
  drawLabels(data);
},
function(err){console.log(err);
})
