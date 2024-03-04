 
import { Component, OnInit,ViewChild } from '@angular/core';
 
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexTitleSubtitle
} from "ng-apexcharts";
 
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
 
 
@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {
  @ViewChild("chart") chart!:ChartComponent;
  isLoading: boolean = true;
  donutChart1Options: any = {
    series: [44, 55, 41],
    chart: {
      type: 'donut',
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center'
    },
    title: {
      text: 'Device Category'
    },
    dataLabels: {
      enabled: false
    },
    labels: ['Desktop', 'Mobile', 'Others'],
    colors: ['#228B22', '#FFA500', '#A9A9A9'],
   
    plotOptions: {
      pie: {
        customScale: 1,
       
       
        // Adjust the size of the donut
        dataLabels: {
          enabled: false,
 
         
        }
    }
 
    },
    total: {
      showAlways: true,
      show: true
    },
    fill: {
      colors: ['#fff'] // Background color of the donut hole
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
 
 
  donutChart2Options: any = {
    series: [30, 40, 45, 60],
    chart: {
      type: 'donut',
   
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center'
    },
    title: {
      text: 'Browser'
    },
    labels: ['Chrome', 'Safari', 'Edge', 'Others'],
    colors: ['#228B22', '#FF0000', '#FFA500', '#A9A9A9'] // corrected from colors2 to colors
  };
 
  TreemapChartOptions: any = {
 
   
      series: [
        {
          data: [
            {
              x: "Home",
              y: 118
            },
            {
              x: "Documents",
              y: 109
            },
            {
              x: "View access status",
              y: 124
            },
            {
              x: "Appointment",
              y: 55
            },
            {
              x: "Search health system",
              y: 84
            },
            {
              x: "Badge history",
              y: 31
            },
            {
              x: "Documents",
              y: 70
            },
            {
              x: "View providers ",
              y: 30
            },
            {
              x: "Reps",
              y: 44
            }
           
          ]
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 300,
        type: "treemap"
      },
      title: {
        text: "Most visited screens",
        align: "left",
       
      },
      colors: [
        "#3B93A5",
        "#F7B844",
        "#ADD8C7",
        "#EC3C65",
        "#CDD7B6",
        "#C1F666",
        "#D43F97",
        "#1E5D8C",
        "#421243",
        "#7F94B0",
        "#EF6537",
        "#C0ADDB"
      ],
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false
        }
      }
    };
 
 
  public generateData(count: number, yrange: { max: number; min: number; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
 
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
 
 
 
    funnelChartOptions : any= {
      series: [
        {
          name: "Funnel Series",
          data: [1380, 1100, 830, 580, 240, ]
        }
      ],
      chart: {
        type: "bar",
        height: 300,
        width: 280
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          barHeight: "80%",
          isFunnel: true
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: string, opt: { w: { globals: { labels: { [x: string]: string; }; }; }; dataPointIndex: string | number; }) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        dropShadow: {
          enabled: true
        }
      },
      title: {
        text: "Functional flow",
        align: "center"
      },
      xaxis: {
        categories: [
          "Search Health system",
          "Membership",
          "Service Package",
          "Billing Info",
          "Payment"
         
        ]
      },
      legend: {
        show: false
      }
    };
 
 
  heatmapChartOptions: any = {
   // Define heatmap chart options here
      series: [
        {
          name: 'Access status',
          data: [
            { x: 'Mon', y: 45 },
            { x: 'Tue', y: 15 },
            { x: 'Wed', y: 25 },
            { x: 'Thu', y: 30 },
            { x: 'Fri', y: 10 },
            { x: 'Sat', y: 35 },
            { x: 'Sun', y: 20 }
          ]
        },
        {
          name: 'Profile',
          data: [
            { x: 'Mon', y: 45 },
            { x: 'Tue', y: 5 },
            { x: 'Wed', y: 20 },
            { x: 'Thu', y: 32 },
            { x: 'Fri', y: 42 },
            { x: 'Sat', y: 20 },
            { x: 'Sun', y: 25 }
          ]
        },
        {
          name: 'Appointment',
          data: [
            { x: 'Mon', y: 35 },
            { x: 'Tue', y: 25 },
            { x: 'Wed', y: 30 },
            { x: 'Thu', y: 35 },
            { x: 'Fri', y: 10 },
            { x: 'Sat', y: 40 },
            { x: 'Sun', y: 25 }
          ]
        },
        {
          name: 'Documents',
          data: [
            { x: 'Mon', y: 40 },
            { x: 'Tue', y: 25 },
            { x: 'Wed', y: 10 },
            { x: 'Thu', y: 35 },
            { x: 'Fri', y: 15 },
            { x: 'Sat', y: 20 },
            { x: 'Sun', y: 25 }
          ]
        },
        {
          name: 'Accounts',
          data: [
            { x: 'Mon', y: 35 },
            { x: 'Tue', y: 25 },
            { x: 'Wed', y: 30 },
            { x: 'Thu', y: 35 },
            { x: 'Fri', y: 45 },
            { x: 'Sat', y: 40 },
            { x: 'Sun', y: 25 }
          ]
        },
        // Add more series as needed
      ],
      chart: {
        type: 'heatmap',
        height: 300,
       
        width: '1200px'
      },
      plotOptions: {
        heatmap: {
          reverseNegativeShade: true
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Pages visited',
        align: 'left',
      },
      xaxis: {
        type: 'category'
      },
      yaxis: {
        reversed: true
      },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'] // Different colors for each series
   
  };
 
  constructor() { }
 
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
 
  }
}