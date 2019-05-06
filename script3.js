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
     .attr('transform', 'translate(' + (margins.left +10)+ ','+(margins.top + 1)+')');
  
}
var drawAxes = function(data)
{
  var screen = {width: 600, height:600}
  var margins = {top:10, bottom:10, left:100, right:10}
  var width = screen.width-margins.left-margins.right
  var height = screen.height-margins.top-margins.bottom
  var barheight = height/data.length;
  
  var svg = d3.select("#chart")
              .attr("width", width)
              .attr("height", height)
  
  var xScale = d3.scaleLinear()
                 .domain([0,5])
                 .range([height, 0])
  
  var yScale = d3.scaleLinear()
                 .domain([0, data.length])
                 .range([0, width])
  
  var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom")
                    .ticks(5)
  
  svg.append("g")
     .call(xAxis)
  
  
  
//   var yScale = d3.scaleLinear()
//                  .domain([0, data.length])
//                  .range([0,width]);

//   var xScale = d3.scaleLinear()
//                  .domain([0,d3.max(data)])
//                  .range([height,0]);
  
// //   var yAxis = d3.axisLeft(yScale).tickFormat(function(d){return data.EducationalAttainment})
// //   svg.append("g").classed("yAxis", true).call(yAxis)
// //      .attr('transform', 'translate(' + (margins.left +10)+ ','+(margins.top + 1)+')');
  
//   /////
//   var xAxis = d3.axisBottom(xScale);
//     svg.append("g").classed("xAis", true)
//                      .call(xAxis)
//                      .attr("transform", "translate(" + margins.left + "," + (margins.top+height) + ")");

//   var yAxis = d3.axisLeft(yScale)
//                 .ticks(9)
//                 .tickFormat(function(d,i)
//                   {console.log("d.EA",edu[d].EducationalAttainment); 
//                    return edu[d].EducationalAttainment});
//       svg.append("g").classed("yAxis", true)
//                  .call(yAxis)
//                  .attr("transform", "translate(" + (margins.left+100) + ", 30)");

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
     .attr("fill", "black")
     .attr('transform', 'translate(' + (margins.left +10)+ ','+(margins.top + 1)+')');
}

data.then(function(data)
{
  console.log("data:", data);
  console.log("page building failed??");
  //drawChart(data);
  //drawLabels(data);
  drawAxes(data);
},
function(err){console.log(err);
})
