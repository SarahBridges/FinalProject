var dataP = d3.csv("EducationData.csv");

data.then(function(data)
  {
    console.log("data", data)
    
    
  },
  function(err){console.log(err)})
