var data = d3.csv("EducationData.csv");

var drawChart = function(data)
{
  var width = 600;
  var height = 600;
  var barwidth = width/data.length;
  var svg = d3.select("#chart")
              .attr("width", width)
              .attr("height", height)
  
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x", function(d,i){return i*barwidth;})
     .attr("y", function(d){console.log("d",d); 
                            console.log("d.UR",d.UnemploymentRate); 
                            return height - d.UnemploymentRate})
     .attr("width", barwidth)
     .attr("height", function(d){return d.UnemploymentRate*100})
     .attr("fill", "blue")

}
var drawChart2 = function(data)
{
  var width = 600;
  var height = 600;
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
  var width = 600;
  var height = 600;
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
  drawChart2(data);
  drawLabels(data);
},
function(err){console.log(err);
})
