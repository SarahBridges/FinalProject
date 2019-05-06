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
     .attr("height", function(d){return d.UnemploymentRate*400})
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
     .attr("width", function(d){return d.UnemploymentRate*500})
     .attr("height", barheight)
}

data.then(function(data)
{
  console.log("data:", data);
  drawChart2(data);
},
function(err){console.log(err);
})
