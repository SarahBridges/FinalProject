var data = d3.csv("EducationData.csv");

var drawChart = function(data)
{
  var screen = {width: 600, height:600}
  var margins = {top:50, bottom:50, left:50, right:50}
  var width = screen.width-margins.left-margins.right
  var height = screen.height-margins.top-margins.bottom
  var barheight = height/data.length;
  var svg = d3.select("#chart")
              .attr("width", width)
              .attr("height", height)
  
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
}

var drawLabels = function(data)
{
  var screen = {width: 600, height:600}
  var margins = {top:50, bottom:50, left:50, right:50}
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
     .attr("fill", "blue")
}

data.then(function(data)
{
  console.log("data:", data);
  drawChart(data);
  drawLabels(data);
},
function(err){console.log(err);
})
