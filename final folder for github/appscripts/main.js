// function for tab, getElementsByClass
function openPage(pageName, elmnt, color) {
  // hide all elements with class="tabcontent" by default
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // remove the background color of all tablinks/buttons[p0-]
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

// move slider will change number and text
var slider = document.getElementById('range');
var display = document.getElementById('display');
var getVal = slider.value;

numVal.innerHTML = getVal;

slider.onchange = function () {
  numVal.innerHTML = this.value; // to show at which number the label will change

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

// tool tip for ranking of countries in world happiness bar chart
const footer = (tooltipItems) => {
  return 'Rank: ' + Rank[tooltipItems[0].dataIndex];
};

// data for bar chart
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

// bar chart
    new Chart('sm-bar-chart', {
    type: 'bar',
    data: dataObj,
    options: {
    plugins: {
    title: {
    display: true,
    text: 'Ranking of Happiness based on a three-year-average 2019-2021',
    fontFamily: 'TrebuchetMS',
    fontSize: 40,
    fontColor: 'rgb(0,0,0)',
    },
    tooltip: {
    callbacks: {
    footer: footer,
    },
    },
    },
    },
    });

// line chart
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
    text: 'Worldwide Happiness Ranking of Singapore',
    font: {
    size: 18,
    weight: 'bold'
    }
    }
    }
    }});  
        
// data for line chart
var years = [2015,2016,2017,2018,2019,2020,2021,2022];
var happiness = [6.798, 6.739, 6.572, 6.343, 6.262, 6.377, 6.377, 6.480];
var gdp = [1.522, 1.646, 1.692, 1.529, 1.572, 1.520, 1.695, 2.149];
var health = [1.025, 0.947, 0.949, 1.008, 1.141, 1.138, 0.897, 0.851];
var freedom = [0.543, 0.488, 0.550, 0.631, 0.556, 0.635, 0.664, 0.672];
var government = [0.4921, 0.46987, 0.46430, 0.457, 0.453, 0.533, 0.547, 0.587];
var support = [null, null, , 1.451, 1.463, 1.395, 1.019, 1.127];
var generosity = [0.311, 0.327, 0.346, 0.261, 0.271, 0.219, 0.176, 0.163];

// line chart
          new Chart("myChart", {
            type: 'line',
            data: {
              labels: years,
              datasets: [
                { 
                  data: happiness,
                  label: "Happiness score",
                  borderColor: "#1084a5",
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
                  text: 'Happiness Factors of Singapore from 2015-2022',
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
        
//  javaScript function to navigate to the section (resources)
          function goToSection() {
            window.location.href = '#section2';
          }

//  javaScript function to navigate to the section (discover)
function goToSection3() {
  window.location.href = '#section';
}

//  javaScript function to navigate to the section (trends)
function goToSection2() {
  window.location.href = '#section3';
}

