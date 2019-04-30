var margin = {top:20, right: 30, bottom: 40, left: 90}, width = 460 - margin.left - margin.right, height = 400 - margin.top - margin.bottom;

var svg = d3.select("svg")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("EducationData.csv", function(data){

  var x = d3.scaleLinear()
            .domain([0, 2000])
            .range([0, width])
  svg.append("g")
     .attr("transform", "translate(-10, 0)rotate(-45)")
     .style("text-anchor", "end");
  
  var y = d3.scaleBand()
            .range([0, height])
            .domain(data.map(function(d){return d.EducationalAttainment;}))
            .padding(.1);
  
  svg.append("g")
     .call(d3.axisLeft(y));
     
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("x", x(0))
     .attr("y", function(d){return y(d.EducationalAttainment);})
     .attr("width", function(d){return x(d.MedianUsualWeeklyEarnings;)})
     .attr("fill", "blue");


})
