var dataP = d3.csv("EducationData.csv");

data.then(function(data)
  {
    console.log("data", data)
    
    
  },
  function(err){console.log(err)})

var screen = {height:600, width:600}

var margins = {top:10, left:10, right: 10, bottom:10}

var svg = d3.select("svg")
            .attr("width", screen.width)
            .attr("height", screen.height)
