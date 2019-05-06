var data = d3.csv("EducationData.csv");

data.then(function(data)
{
  console.log("data:", data);
  console.log("d.EducationalAttainment:", function(d){return d.EducationalAttainment});
  console.log("d.UnemploymentRate:", function(d){return d.UnemploymentRate});
},
function(err){console.log(err);
})
