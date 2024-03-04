import { Component, OnInit, Query } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexTitleSubtitle, ApexXAxis, ApexFill } from "ng-apexcharts";
 
 
import {
  ChartComponent,
 
 
  ApexTooltip,
 
 
  ApexLegend,
 
 
} from "ng-apexcharts";
 
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  barChartOptions: any = {
    series: [
      {
        name: "Inflation",
        data: [10.3, 9.3, 8.3, 7.3, 6.3, 5.3, 5.3, 4.3, 5.4, 10.8, 9.5, 8]
      }
    ],
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false // Set toolbar to false to hide it
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top" // top, center, bottom
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"]
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      position: "top",
      labels: {
        offsetY: -18
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: true,
        offsetY: -35
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
      }
    },
    title: {
      text: "Monthly Inflation in Argentina, 2002",
      floating: 0,
      offsetY: 320,
      align: "center",
      style: {
        color: "#444"
      }
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft",
        offsetY: 30,
        offsetX: 60
      }}
  };
 
  lineChartOptions: any= {
    series: [
          {
            name: "Income",
            type: "column",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
          },
          {
            name: "Cashflow",
            type: "column",
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
          },
          {
            name: "Revenue",
            type: "line",
            data: [20, 29, 37, 36, 44, 45, 50, 58]
          }
        ],
        chart: {
          height: 350,
          type: "line",
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#008FFB"
            },
            labels: {
              style: {
                colors: "#008FFB"
              }
            },
            title: {
              text: "Income (thousand crores)",
              style: {
                color: "#008FFB"
              }
            }
          },
          {
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#00E396"
            },
            labels: {
              style: {
                colors: "#00E396"
              }
            },
            title: {
              text: "Operating Cashflow (thousand crores)",
              style: {
                color: "#00E396"
              }
            }
          },
          {
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#FEB019"
            },
            labels: {
              style: {
                colors: "#FEB019"
              }
            },
            title: {
              text: "Revenue (thousand crores)",
              style: {
                color: "#FEB019"
              }
            }
          }
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft",
            offsetY: 30,
            offsetX: 60
          }
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40
        }
     
     
   
     
    };
    constructor() {}
    ngOnInit(): void {
    }
   
 
  }
 
 
 
 
 
 
 
 