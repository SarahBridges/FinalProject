var data = d3.csv("EducationData.csv");

data.then(function(data)
{
  console.log("data:", data);
  console.log("d.EducationalAttainment:", data.EducationalAttainment[0]);
  console.log("d.UnemploymentRate:", data.UnemploymentRate[0]);
},
function(err){console.log(err);
})
