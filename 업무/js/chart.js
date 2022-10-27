function lineChart(canvasId, dataLabels, datas, yTicks) {
   var ctx = document.getElementById(canvasId);

   var labels = dataLabels; 
   var dataSet = datas; 
   var maxRange = Math.max.apply(null, datas);
   var yTicksColor = yTicks ? yTicks : 'rgba(255,255,255,0)';

   var data = {
      labels: labels,
      datasets: [{
         label: '',
         backgroundColor: 'rgba(23,118,225,1)',
         borderColor: 'rgba(23, 118, 225, 0.3)',
         data: dataSet,
      fill: false,
         datalabels: {
            align: 'top',
            anchor: 'end',
            offset: 5,
         },
      }]
   };

   var config = {
      type: 'line',
      data: data,
      plugins: [ChartDataLabels],
      options: {
      pointBackgroundColor: 'rgba(23,118,225,1)',
         pointBorderColor: 'rgba(23,118,225,1)',
         borderWidth:4,
         pointBorderWidth: 6,
         plugins: {
            legend: {
               display: false,
            },
            tooltip: {
               enabled: false,
            },
            datalabels: {
               backgroundColor: function(context) {
                  return 'rgba(2, 52, 107, 0.3)';
               },
               borderRadius: 23,
               color: 'white',
               font: {
                  weight: 'bold'
               },
               formatter: Math.round,
               padding: {
                  top: 2.5,
                  right: 10,
                  bottom: 2.5,
                  left: 10,
               },
               clamp: true,
            }
        },
        aspectRatio: 5 / 3,
        layout: {
          padding: {
            top: 15,
            right: 16,
            bottom: 5,
            left: 0
          }
        },
        elements: {
          line: {
            fill: false
          }
        },
        scales: {
         x: {
            grid:{
               display: false,
               borderWidth: 2,
               borderColor: '#C3CCDE',
            },
            ticks: {
               color: 'rgba(112,127,156,1)',
            }  
         },
          y: {
            stacked: true,
            min: 0,
            max: maxRange + 5,
            grid: {
               borderColor: 'rgba(255,255,255,0)',
            },
            ticks: {
               stepSize: 5,
               color: yTicksColor,
            },
          }
        }
      }
    }


   new Chart(ctx, config);
};
function barChart(canvasId, dataLabels, datas, yTicks) {
   var ctx = document.getElementById(canvasId);

   var labels = dataLabels; 
   var dataSet = datas; 
   var maxRange = Math.max.apply(null, datas);
   var yTicksColor = yTicks ? yTicks : 'rgba(255,255,255,0)';

   var data = {
      labels: labels,
      datasets: [{
         label: '',
         fill: false,
         borderRadius: 5,
         borderColor: [
            '#2142FA',
            '#1992FB',
            '#00E3FD',
         ],
         data: dataSet,
         backgroundColor: [
            '#2142FA',
            '#1992FB',
            '#00E3FD',
          ],
         datalabels: {
            align: 'top',
            anchor: 'end',
            offset: 5,
         },
      }]
   };

   var config = {
      type: 'bar',
      data: data,
      plugins: [ChartDataLabels],
      options: {
         maxBarThickness: 20,
         pointBorderWidth: 6,
         plugins: {
            legend: {
               display: false,
            },
            tooltip: {
               enabled: false,
            },
            datalabels: {
               backgroundColor: function(context) {
                  return 'rgba(2, 52, 107, 0.3)';
               },
               borderRadius: 23,
               color: 'white',
               font: {
                  weight: 'bold'
               },
               formatter: Math.round,
               padding: {
                  top: 2.5,
                  right: 10,
                  bottom: 2.5,
                  left: 10,
               },
               clamp: true,
            }
        },
        aspectRatio: 5 / 3,
        layout: {
          padding: {
            top: 15,
            right: 16,
            bottom: 5,
            left: 0
          }
        },
        elements: {
          line: {
            fill: false,
            tension: 0.4
          }
        },
        scales: {
         x: {
            grid:{
               display: false,
               borderWidth: 2,
               borderColor: '#C3CCDE',
            },
            ticks: {
               color: 'rgba(112,127,156,1)',
            }  
         },
          y: {
            min: 0,
            max: maxRange + 5,
            grid: {
               borderColor: 'rgba(255,255,255,0)',
            },
            ticks: {
               stepSize: 5,
               positoin:'left',
               color: yTicksColor,
            },
          }
        }
      }
    }


   new Chart(ctx, config);
}