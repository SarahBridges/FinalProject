var data = d3.csv("EducationData.csv");

data.then(function(data)
{
  console.log("data:", data);
  console.log("d.EducationalAttainment:", data.EducationalAttainment);
  console.log("d.UnemploymentRate:", data.UnemploymentRate);
},
function(err){console.log(err);
})
