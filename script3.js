var data = d3.csv("EducationData.csv");

var drawBars = function(data)
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
                 .domain([0, 5])
                 .range([0, width])
  
  var yScale = d3.scaleLinear()
                 .domain([0, data.length])
                 .range([height, 0])
  
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x", function(d,i)
           {console.log("d", d); 
            console.log("d.MUWE", d.UnemploymentRate); 
            return d.UnemploymentRate;})
     .attr("y", function(d,i){return i*barheight;})
     .attr("width", function(d){return xScale(d.UnemploymentRate)})
     .attr("height", barheight)
     .attr("fill", "teal")
     .attr('transform', 'translate(' + (margins.left +10)+ ','+(margins.top + 1)+')');
  
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

var drawAxes = function(data)
{
  var screen = {width: 600, height:600}
  var margins = {top:10, bottom:10, left:100, right:10}
  var width = screen.width-margins.left-margins.right
  var height = screen.height-margins.top-margins.bottom
  var barheight = height/data.length;
  
  var svg = d3.select("#chart")
              .attr("width", width+200)
              .attr("height", height+100)
  
  var xScale = d3.scaleLinear()
                 .domain([0, 2000])
                 .range([0, width])
  
  var yScale = d3.scaleLinear()
                 .domain([0, data.length])
                 .range([height, 0])
  
  var xAxis = d3.axisBottom().scale(xScale)
  
  svg.append("g").classed("xAxis", true)
     .call(xAxis)
     .attr("transform", "translate(120,550)")
  
  var yAxis = d3.axisLeft().scale(yScale)
  
  svg.append("g").classed("yAxis", true)
     .call(yAxis)
     .attr("transform", "translate(110, 10)")

  
//    .attr("fill", "black")
//     .ticks(9)
//     .tickFormat()
//     .attr("transform", "translate(" + margins.left+","+(margins.top+height+")"))

}

var drawAxisLabels = function(data)
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
     .text(function(d){return d.EducationalAttainment})
     .attr("x", function(d){return d.EducationalAttainment})
     .attr("y", function(d, i){return i* barheight})
     .attr("transform", "translate(100, 30)")
}

data.then(function(data)
{
  console.log("data:", data);
  console.log("page building failed??");
  //drawBars(data);
  //drawLabels(data);
  drawAxes(data);
  drawAxisLabels(data);
},
function(err){console.log(err);
})
