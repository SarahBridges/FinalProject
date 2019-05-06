var dataP = d3.csv("EducationData.csv");

var drawChart=function(dataP)
{
  var width=600;
  var height=600;
  var barWidth=width/dataP.length;
  console.log(dataP);
  
  var svg=
  d3.select("#chart")
  .attr("width", width)
  .attr("height", height)
  
  svg.selectAll("rect")
  .data(dataP)
  .enter()
  .append("rect")
  .attr("x", function(d,i)
    {return i*barWidth;})
  .attr("y", function(d)
    {
     console.log(d.UnemploymentRate);
     return height-d.UnemploymentRate;})
  .attr("width", barWidth)
  .attr("height", function(d)
    {console.log(d);return height-d.UnemploymentRate})
  .attr("fill", function(d)
    {return "deepskyblue";})
}

var drawLabels=function(dataP)
  {
    var width=600;
    var height=600;
    var barWidth=width/dataP.length;

    var svg=d3.select("#chart")
    .attr("width", width)
    .attr("height", height)
  svg.selectAll("text")
  .data(dataP)
  .enter()
  .append("text")
  .text(function(d){
    return d.UnemploymentRate;})
  .attr("x", function(d,i){
    return i * (width / dataP.length) +25;
  })
  .attr("y", function(d){
    return height-(d.UnemploymentRate)+12;
  })
  .attr("fill", "black");
  }
var drawNameLabels=function(dataP)
{
   var width=600;
   var height=600;
   var barWidht=width/dataP.lenth;
  
  var svg=d3.select("#chart")
  .attr("width", width)
  .attr("height", height)
  
  svg.selectAll("text")
  .data(dataP)
  .enter()
  .append("text")
  .text(function(d){return d.EducationalAttainment;})
  .attr("x", function(d,i){return i*(width/dataP.length)+30;})
  .attr("fill", "black");
}

dataP.then(function(dataP)
    {
    drawChart(dataP);
    drawLabels(dataP);
    drawNameLabels(dataP)},
      
    function(err){console.log(err);})
