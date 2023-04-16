// function for tab, getElementsByClass
function openPage(pageName, elmnt, color) {
  // hide all elements with class="tabcontent" by default
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

// remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '';
  }

// show the specific tab content
  document.getElementById(pageName).style.display = 'block';

// add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

// function for alert pop up when user press submit button
function myFunction() {
  alert(
    'Thanks for your response! Remember that things will get better. Have a great day ahead :).'
  );
}

// move slider that will change number and text, function and event listener
var slider = document.getElementById('range');
var display = document.getElementById('display');
var getVal = slider.value;

numVal.innerHTML = getVal;

slider.onchange = function () {
  numVal.innerHTML = this.value; // to show at which number the text label will change

  var getVal = this.value;

  if (getVal == 1) {
    display.innerHTML = 'Bad mood';
  }

  if (getVal == 2) {
    display.innerHTML = 'Moderately bad mood';
  }

  if (getVal == 3) {
    display.innerHTML = 'Neutral';
  }

  if (getVal == 4) {
    display.innerHTML = 'Moderately good mood';
  }

  if (getVal == 5) {
    display.innerHTML = 'Good mood';
  }
};

// tool tip for 'ranking of countries' in world happiness bar chart
const footer = (tooltipItems) => {
  return 'Rank: ' + Rank[tooltipItems[0].dataIndex];
};

// data for bar chart showing world happiness rankings
  const Country = ["Finland","Denmark","Iceland","Switzerland","Netherlands","Luxembourg","Sweden","Norway","Israel","New Zealand","Austria","Australia","Ireland","Germany","Canada","United States","United Kingdom","Czechia","Belgium","France","Bahrain","Slovenia","Costa Rica","United Arab Emirates","Saudi Arabia","Taiwan Province of China","Singapore","Romania","Spain","Uruguay","Italy","Kosovo","Malta","Lithuania","Slovakia","Estonia","Panama","Brazil","Guatemala","Kazakhstan","Cyprus","Latvia","Serbia","Chile","Nicaragua","Mexico","Croatia","Poland","El Salvador","Kuwait","Hungary","Mauritius","Uzbekistan","Japan","Honduras","Portugal","Argentina","Greece","South Korea","Philippines","Thailand","Moldova","Jamaica","Kyrgyzstan","Belarus","Colombia","Bosnia and Herzegovina","Mongolia","Dominican Republic","Malaysia","Bolivia","China","Paraguay","Peru","Montenegro","Ecuador","Vietnam","Turkmenistan","North Cyprus","Russia","Hong Kong S.A.R. of China","Armenia","Tajikistan","Nepal","Bulgaria","Libya","Indonesia","Ivory Coast","North Macedonia","Albania","South Africa","Azerbaijan","Gambia","Bangladesh","Laos","Algeria","Liberia","Ukraine","Congo","Morocco","Mozambique","Cameroon","Senegal","Niger","Georgia","Gabon","Iraq","Venezuela","Guinea","Iran","Ghana","Turkey","Burkina Faso","Cambodia","Benin","Comoros","Uganda","Nigeria","Kenya","Tunisia","Pakistan","Palestinian Territories","Mali","Namibia","Kingdom of Eswatini","Myanmar","Sri Lanka","Madagascar","Egypt","Chad","Ethiopia","Yemen","Mauritania","Jordan","Togo","India","Zambia","Malawi","Tanzania","Sierra Leone","Lesotho","Botswana","Rwanda","Zimbabwe","Lebanon","Afghanistan"];
  const LifeEvaluation = [7.821,7.636,7.557,7.512,7.415,7.404,7.384,7.365,7.364,7.200,7.163,7.162,7.041,7.034,7.025,6.977,6.943,6.920,6.805,6.687,6.647,6.630,6.582,6.576,6.523,6.512,6.480,6.477,6.476,6.474,6.467,6.455,6.447,6.446,6.391,6.341,6.309,6.293,6.262,6.234,6.221,6.180,6.178,6.172,6.165,6.128,6.125,6.123,6.120,6.106,6.086,6.071,6.063,6.039,6.022,6.016,5.967,5.948,5.935,5.904,5.891,5.857,5.850,5.828,5.821,5.781,5.768,5.761,5.737,5.711,5.600,5.585,5.578,5.559,5.547,5.533,5.485,5.474,5.467,5.459,5.425,5.399,5.377,5.377,5.371,5.330,5.240,5.235,5.199,5.199,5.194,5.173,5.164,5.155,5.140,5.122,5.122,5.084,5.075,5.060,5.048,5.048,5.046,5.003,4.973,4.958,4.941,4.925,4.891,4.888,4.872,4.744,4.670,4.640,4.623,4.609,4.603,4.552,4.543,4.516,4.516,4.483,4.479,4.459,4.396,4.394,4.362,4.339,4.288,4.251,4.241,4.197,4.153,4.152,4.112,3.777,3.760,3.750,3.702,3.574,3.512,3.471,3.268,2.995,2.955,2.404];  // Average Life Evaluation
  const Rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146];

    const dataObj = {
    labels: Country,
    datasets: [
    {
    label: 'Average life evaluation',
    data: LifeEvaluation,
    borderWidth: 1,
    backgroundColor: 'hsla(20,100%,80%,0.8)',
    borderColor: 'hsla(0,100%,50%,1)',
    },
    ],
    };

// bar chart for world happiness rankings
new Chart('sm-bar-chart', {
  type: 'bar',
  data: dataObj,
  options: {
    plugins: {
      title: {
        display: true,
        // title of bar chart
        text: 'Ranking of Happiness based on a three-year-average 2019-2021',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
      tooltip: {
        callbacks: {
          footer: footer, // tooltip
        },
      },
    },
  },
});


// line chart for ranking of singapore throughout years
  var ranking = [24, 22, 26, 34, 34, 31, 32, 27];

  new Chart("RankingChart", {
  type: 'line',
  data: {
  labels: years,
  datasets: [
  { 
  data: ranking,
  label: "Ranking",
  borderColor: "#f6c85f",
  fill: false
  },
  ]
  },
  options: {
  plugins: {
  title: {
  display: true,
// title of line chart
  text: 'Worldwide Happiness Ranking of Singapore',
  font: {
  size: 18,
  weight: 'bold'
  }
  }
  }
  }});

// data for line chart showing all happiness variables
var years = [2015,2016,2017,2018,2019,2020,2021,2022];
var happiness = [6.798, 6.739, 6.572, 6.343, 6.262, 6.377, 6.377, 6.480];
var gdp = [1.522, 1.646, 1.692, 1.529, 1.572, 1.520, 1.695, 2.149];
var health = [1.025, 0.947, 0.949, 1.008, 1.141, 1.138, 0.897, 0.851];
var freedom = [0.543, 0.488, 0.550, 0.631, 0.556, 0.635, 0.664, 0.672];
var government = [0.4921, 0.46987, 0.46430, 0.457, 0.453, 0.533, 0.547, 0.587];
var support = [null, null, , 1.451, 1.463, 1.395, 1.019, 1.127];
var generosity = [0.311, 0.327, 0.346, 0.261, 0.271, 0.219, 0.176, 0.163];

// line chart for happiness factors of singapore
          new Chart("myChart", {
            type: 'line',
            data: {
              labels: years,
              datasets: [
                { 
                  data: happiness,
                  label: "Happiness score",
                  borderColor: "#1084a5", // different colors for each line
                  fill: false
                },
                { 
                  data: gdp,
                  label: "GDP per capita",
                  borderColor: "#6c4c7c",
                  fill: false
                },
                { 
                  data: health,
                  label: "Life expectancy",
                  borderColor: "#f7b358",
                  fill: false
                },
                { 
                  data: freedom,
                  label: "Freedom",
                  borderColor: "#cb442c",
                  fill: false
                },
                { 
                  data: government,
                  label: "Perception of corruption",
                  borderColor: "#9cd364",
                  fill: false
                },
                { 
                  data: support,
                  label: "Social support",
                  borderColor: "#3094c4",
                  fill: false
                },
                { 
                  data: generosity,
                  label: "Generosity",
                  borderColor: "#f48c4c",
                  fill: false
                },
              ]
            },
            options: {
              plugins: {
                title: {
                  display: true,
                  text: 'Happiness Factors of Singapore from 2015-2022', // title of line chart
                  font: {
                    size: 18,
                    weight: 'bold'
                  }
                }
              }
            }
          });
          
// first slideshow
  let slideIndex = 1;
    showSlides(slideIndex);
          
// next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
          
// thumbnail image controls
   function currentSlide(n) {
    showSlides(slideIndex = n);
  }
        
  // slide show display
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("demo");
      let captionText = document.getElementById("caption");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
      }

//second slideshow
  let slideIndex2 = 1;
    showSlides2(slideIndex2);
          
// next/previous controls
  function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
      }
          
// thumbnail image controls
  function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
      }

// slideshow display
  function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
            let dots2 = document.getElementsByClassName("demo2");
            let captionText2 = document.getElementById("caption2");
            if (n > slides2.length) {slideIndex2 = 1}
            if (n < 1) {slideIndex2 = slides2.length}
            for (i = 0; i < slides2.length; i++) {
              slides2[i].style.display = "none";
            }
            for (i = 0; i < dots2.length; i++) {
              dots2[i].className = dots2[i].className.replace(" active", "");
            }
            slides2[slideIndex2-1].style.display = "block";
            dots2[slideIndex2-1].className += " active";
            captionText2.innerHTML = dots2[slideIndex2-1].alt;
          }
        
//  javaScript function --> press button to navigate to the section (resources)
          function goToSection() {
            window.location.href = '#section2';
          }

//  javaScript function --> press button to navigate to the section (discover)
function goToSection3() {
  window.location.href = '#section';
}

//  javaScript function --> press button to navigate to the section (trends)
function goToSection2() {
  window.location.href = '#section3';
}

// data for line chart (mental health search)
    const Searches = [0,67,0,29,0,0,0,0,0,0,33,80,40,37,32,18,0,0,27,0,21,0,21,20,0,64,33,0,0,10,30,48,17,20,29,30,29,46,10,0,11,39,22,18,16,35,20,11,14,24,27,18,10,8,37,10,15,25,8,17,15,15,25,9,15,0,21,12,12,22,19,3,23,16,12,19,22,8,26,12,14,25,14,13,12,19,18,17,13,16,21,13,14,20,21,16,17,20,18,9,19,15,22,16,18,19,13,9,15,13,21,27,16,16,19,17,11,23,19,16,16,14,17,18,20,21,20,23,19,19,14,13,18,18,17,15,15,16,20,16,14,20,17,17,17,19,18,23,18,17,17,19,22,27,28,19,24,20,26,24,31,17,25,20,28,37,26,20,29,30,29,28,27,26,31,28,31,46,32,25,30,31,31,32,34,31,32,29,32,57,46,30,47,42,47,52,64,60,54,58,57,72,49,42,51,51,58,51,65,66,69,82,81,100,77,49,64,87,87,92,84,68,75,70,78,95,83,54,72,79,79,94];

// line chart for mental health searches in Singapore
new Chart("myChart2", {
type: 'line',
data: {
labels: ["2004-01","2004-02","2004-03","2004-04","2004-05","2004-06","2004-07","2004-08","2004-09","2004-10","2004-11","2004-12","2005-01","2005-02","2005-03","2005-04","2005-05","2005-06","2005-07","2005-08","2005-09","2005-10","2005-11","2005-12","2006-01","2006-02","2006-03","2006-04","2006-05","2006-06","2006-07","2006-08","2006-09","2006-10","2006-11","2006-12","2007-01","2007-02","2007-03","2007-04","2007-05","2007-06","2007-07","2007-08","2007-09","2007-10","2007-11","2007-12","2008-01","2008-02","2008-03","2008-04","2008-05","2008-06","2008-07","2008-08","2008-09","2008-10","2008-11","2008-12","2009-01","2009-02","2009-03","2009-04","2009-05","2009-06","2009-07","2009-08","2009-09","2009-10","2009-11","2009-12","2010-01","2010-02","2010-03","2010-04","2010-05","2010-06","2010-07","2010-08","2010-09","2010-10","2010-11","2010-12","2011-01","2011-02","2011-03","2011-04","2011-05","2011-06","2011-07","2011-08","2011-09","2011-10","2011-11","2011-12","2012-01","2012-02","2012-03","2012-04","2012-05","2012-06","2012-07","2012-08","2012-09","2012-10","2012-11","2012-12","2013-01","2013-02","2013-03","2013-04","2013-05","2013-06","2013-07","2013-08","2013-09","2013-10","2013-11","2013-12","2014-01","2014-02","2014-03","2014-04","2014-05","2014-06","2014-07","2014-08","2014-09","2014-10","2014-11","2014-12","2015-01","2015-02","2015-03","2015-04","2015-05","2015-06","2015-07","2015-08","2015-09","2015-10","2015-11","2015-12","2016-01","2016-02","2016-03","2016-04","2016-05","2016-06","2016-07","2016-08","2016-09","2016-10","2016-11","2016-12","2017-01","2017-02","2017-03","2017-04","2017-05","2017-06","2017-07","2017-08","2017-09","2017-10","2017-11","2017-12","2018-01","2018-02","2018-03","2018-04","2018-05","2018-06","2018-07","2018-08","2018-09","2018-10","2018-11","2018-12","2019-01","2019-02","2019-03","2019-04","2019-05","2019-06","2019-07","2019-08","2019-09","2019-10","2019-11","2019-12","2020-01","2020-02","2020-03","2020-04","2020-05","2020-06","2020-07","2020-08","2020-09","2020-10","2020-11","2020-12","2021-01","2021-02","2021-03","2021-04","2021-05","2021-06","2021-07","2021-08","2021-09","2021-10","2021-11","2021-12","2022-01","2022-02","2022-03","2022-04","2022-05","2022-06","2022-07","2022-08","2022-09","2022-10","2022-11","2022-12","2023-01","2023-02","2023-03","2023-04"],
datasets: [
{ 
data: Searches,
label: "Search interest",
borderColor: "rgba(83,181,185,255)",
fill: false
},
]
},
options: {
plugins: {
title: {
display: true,
text: 'Interest Over Time in Singapore',
font: {
size: 18,
weight: 'bold'
}
}
}
}});

// bar chart showing suicides in Singapore
const suicides = [12.4, 11.3, 12.4, 12.1, 11.7, 11.2, 11.7, 10.7,10.4,10.5,9.9,9.6,11.3,10.3,10.2,9,9.1,9,9.4,11.2];
const years2 = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"];

// data for bar chart (suicides)
const dataObj2 = {
  labels: years2,
  datasets: [
    {
      label: 'Suicide mortality rate',
      data: suicides,
      borderWidth: 1,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', // different color for each bar
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    },
  ],
};

// bar chart for suicides
new Chart('sm-bar-chart2', {
  type: 'bar',
  data: dataObj2,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Suicide mortality rate (per 100,000 population) in Singapore',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// red boxes with white text that change to green and black text upon clicking using innerhtml, event listener
function changeBox() {
  var box = document.getElementById("myBox"); // Get the box element by its ID
      box.innerHTML = "Fact 1: Mental disorders are medical illnesses just like heart disease and diabetes. Research shows there are genetic and biological causes for mental illness, and they can be treated effectively, especially with early detection and intervention."; // Change the text inside the box
      box.style.backgroundColor = "#00ff00"; // Change the background color of the box
      box.style.color = "#000000"; // Change the font color of the box
  }

  function changeBox2() {
    var box = document.getElementById("myBox2"); // Get the box element by its ID
        box.innerHTML = "Fact 2: The specific causes of mental illness are not yet fully understood. Stress and factors such as genetic predisposition and abnormalities in brain chemicals are possible contributing factors."; // Change the text inside the box
        box.style.backgroundColor = "#00ff00"; // Change the background color of the box
        box.style.color = "#000000"; // Change the font color of the box
    }


  function changeBox3() {
    var box = document.getElementById("myBox3"); // Get the box element by its ID
        box.innerHTML = "Fact 3: People with mental illness are no more violent than the general population. In fact, they are far more likely to be the victims of violence than to be violent themselves."; // Change the text inside the box
        box.style.backgroundColor = "#00ff00"; // Change the background color of the box
        box.style.color = "#000000"; // Change the font color of the box
    }

    function changeBox4() {
      var box = document.getElementById("myBox4"); // Get the box element by its ID
          box.innerHTML = "Fact 4: A mental illness is an illness, not a character flaw. It has nothing to do with being weak or lacking will-power. Although people with mental illness can play a big part in their own recovery, they did not choose to become ill."; // Change the text inside the box
          box.style.backgroundColor = "#00ff00"; // Change the background color of the box
          box.style.color = "#000000"; // Change the font color of the box
      }

      function changeBox5() {
        var box = document.getElementById("myBox5"); // Get the box element by its ID
            box.innerHTML = "Fact 5: The best treatments for serious mental illnesses today are highly effective. With appropriate medication, psychotherapy and rehabilitation services, most people who live with serious mental illnesses can significantly reduce the impact of their illness and find a satisfying measure of achievement and independence. A key concept is to develop expertise in developing strategies to manage the illness process."; // Change the text inside the box
            box.style.backgroundColor = "#00ff00"; // Change the background color of the box
            box.style.color = "#000000"; // Change the font color of the box
        }

        function changeBox6() {
          var box = document.getElementById("myBox6"); // Get the box element by its ID
              box.innerHTML = "Fact 6: Four of the 10 leading causes of disability worldwide are mental disorders. Among developed nations, major depression is the leading cause of disability. Also near the top of these rankings are bipolar disorder, schizophrenia, and obsessive-compulsive disorder."; // Change the text inside the box
              box.style.backgroundColor = "#00ff00"; // Change the background color of the box
              box.style.color = "#000000"; // Change the font color of the box
          }