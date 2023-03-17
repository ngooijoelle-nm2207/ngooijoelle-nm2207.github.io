    // Average daily time spent using social media in the Asia-Pacific region in 3rd quarter of 2021, by country
    // const { registerables } = require("chart.js");
    // Source: https://www-statista-com.libproxy1.nus.edu.sg/statistics/1128147/apac-daily-time-spent-using-social-media-by-country-or-region/
    const footer = (tooltipItems) => {
        let sum = 0;
      
        tooltipItems.forEach(function(tooltipItem) {
          sum += tooltipItem.parsed.y;
        });
        return 'Sum: ' + sum;
      }; //tooltip because i want to display a second item in the popup when i hover over the barplot --> code not working but i want the ranks of countries to be shown in the popup too
    
    const Country = ["Finland","Denmark","Iceland","Switzerland","Netherlands","Luxembourg","Sweden","Norway","Israel","New Zealand","Austria","Australia","Ireland","Germany","Canada","United States","United Kingdom","Czechia","Belgium","France","Bahrain","Slovenia","Costa Rica","United Arab Emirates","Saudi Arabia","Taiwan Province of China","Singapore","Romania","Spain","Uruguay","Italy","Kosovo","Malta","Lithuania","Slovakia","Estonia","Panama","Brazil","Guatemala","Kazakhstan","Cyprus","Latvia","Serbia","Chile","Nicaragua","Mexico","Croatia","Poland","El Salvador","Kuwait","Hungary","Mauritius","Uzbekistan","Japan","Honduras","Portugal","Argentina","Greece","South Korea","Philippines","Thailand","Moldova","Jamaica","Kyrgyzstan","Belarus","Colombia","Bosnia and Herzegovina","Mongolia","Dominican Republic","Malaysia","Bolivia","China","Paraguay","Peru","Montenegro","Ecuador","Vietnam","Turkmenistan","North Cyprus","Russia","Hong Kong S.A.R. of China","Armenia","Tajikistan","Nepal","Bulgaria","Libya","Indonesia","Ivory Coast","North Macedonia","Albania","South Africa","Azerbaijan","Gambia","Bangladesh","Laos","Algeria","Liberia","Ukraine","Congo","Morocco","Mozambique","Cameroon","Senegal","Niger","Georgia","Gabon","Iraq","Venezuela","Guinea","Iran","Ghana","Turkey","Burkina Faso","Cambodia","Benin","Comoros","Uganda","Nigeria","Kenya","Tunisia","Pakistan","Palestinian Territories","Mali","Namibia","Kingdom of Eswatini","Myanmar","Sri Lanka","Madagascar","Egypt","Chad","Ethiopia","Yemen","Mauritania","Jordan","Togo","India","Zambia","Malawi","Tanzania","Sierra Leone","Lesotho","Botswana","Rwanda","Zimbabwe","Lebanon","Afghanistan"];
    const LifeEvaluation = [7.821,7.636,7.557,7.512,7.415,7.404,7.384,7.365,7.364,7.200,7.163,7.162,7.041,7.034,7.025,6.977,6.943,6.920,6.805,6.687,6.647,6.630,6.582,6.576,6.523,6.512,6.480,6.477,6.476,6.474,6.467,6.455,6.447,6.446,6.391,6.341,6.309,6.293,6.262,6.234,6.221,6.180,6.178,6.172,6.165,6.128,6.125,6.123,6.120,6.106,6.086,6.071,6.063,6.039,6.022,6.016,5.967,5.948,5.935,5.904,5.891,5.857,5.850,5.828,5.821,5.781,5.768,5.761,5.737,5.711,5.600,5.585,5.578,5.559,5.547,5.533,5.485,5.474,5.467,5.459,5.425,5.399,5.377,5.377,5.371,5.330,5.240,5.235,5.199,5.199,5.194,5.173,5.164,5.155,5.140,5.122,5.122,5.084,5.075,5.060,5.048,5.048,5.046,5.003,4.973,4.958,4.941,4.925,4.891,4.888,4.872,4.744,4.670,4.640,4.623,4.609,4.603,4.552,4.543,4.516,4.516,4.483,4.479,4.459,4.396,4.394,4.362,4.339,4.288,4.251,4.241,4.197,4.153,4.152,4.112,3.777,3.760,3.750,3.702,3.574,3.512,3.471,3.268,2.995,2.955,2.404];  // Average Life Evaluation
    const Rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

    const dataObj = {
        labels: Country,
        datasets: [
            {
                label: "Average life evaluation",
                data: LifeEvaluation,
                borderWidth: 1,
                backgroundColor: "hsla(20,100%,80%,0.8)",
                borderColor: "hsla(0,100%,50%,1)"
            }
        ]
    }
    new Chart("sm-bar-chart", {//!--Notice here we put the id of the "new chart" we created in the html part.
                type: "bar",
                data: dataObj,
                options: { // configure options here
                    plugins: {
                        title: {
                        display: true,
                        text: 'World Happiness Report 2022',
                        fontFamily: "TrebuchetMS",
                        fontSize: 40,
                        fontColor: 'rgb(0,120,0)',
                    },
                    subtitle: {
                        display: true,
                        text: 'Ranking of Happiness based on a three-year-average 2019-2021',
                        fontFamily: "TrebuchetMS",
                        fontSize: 26,
                        fontColor: 'rgb(0,0,0)',
                    }
                },
            }
            });