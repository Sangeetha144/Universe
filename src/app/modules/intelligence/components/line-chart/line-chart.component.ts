import { Component, OnInit, ViewChild,Input,OnChanges, SimpleChanges, EventEmitter, Output } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'; // Import NavigationEnd
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  fill?: {
    colors?: string[];
    type?: string;
    gradient?: {
      shadeIntensity?: number;
      opacityFrom?: number;
      opacityTo?: number;
      stops?: number[];
    };
  };
};

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"]
})
export class LineChartComponent implements OnInit {
  
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;
@Input() options:string|null = "";
@Output() chartEvent = new EventEmitter<boolean>();
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if ('options' in changes) {
      this.changeChart();
    }
  }
changeChart(){
  if(this.options === 'No of Logins'){
    this.chartOptions = {
      series: [
        {
          name: "Users",
          data: [10, 41, 55, 80, 49, 62, 69, 91, 148]
          
        }
      ],
      chart: {
        type: 'area',
        height: 350,
        animations: {
          enabled: true,
          easing: 'easein',
          speed: 800,
          
        },
        toolbar: { // Add toolbar settings
          show: true,
          tools: { // Add tools property for customizing toolbar icons
            download: false // Set to true to show the download icon
            
          }
        },
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: " ",
        align: "left"
      },
      fill: {
        colors: ['#008FFB'],
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "8 AM",
          "10 AM",
          "12 PM",
          "2 PM",
          "4 PM",
          "6 PM",
          "8 PM",
          "10 PM",
          "12 AM"
        ]
      }
    };
  }
 
  else if(this.options === 'No of successful payment'){
    this.chartOptions = {
      series: [
        {
          name: "Users",
          data: [40, 41, 55, 80, 89, 162,169, 191, 148],
          color:'#008000'
        }
      ],
      chart: {
        type: 'area',
        height: 350,
        animations: {
          enabled: true,
          easing: 'easein',
          speed: 800,
          
        },
        toolbar: { // Add toolbar settings
          show: true,
          tools: { // Add tools property for customizing toolbar icons
            download: false // Set to true to show the download icon
            
          }
        },
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: " ",
        align: "left"
      },
      fill: {
        colors: ['#008FFB'],
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "8 AM",
          "10 AM",
          "12 PM",
          "2 PM",
          "4 PM",
          "6 PM",
          "8 PM",
          "10 PM",
          "12 AM"
        ]
      }
    };
  }
  else if(this.options === 'No of failure payment'){
    this.chartOptions = {
      series: [
        {
          name: "Users",
          data: [10, 21, 35, 25, 29, 32, 19, 39, 48],
          color:'#ff0000'
        }
      ],
      chart: {
        type: 'area',
        height: 350,
        animations: {
          enabled: true,
          easing: 'easein',
          speed: 800,
          
        },
        toolbar: { // Add toolbar settings
          show: true,
          tools: { // Add tools property for customizing toolbar icons
            download: false // Set to true to show the download icon
            
          }
        },
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: " ",
        align: "left"
      },
      fill: {
        colors: ['#008FFB'],
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "8 AM",
          "10 AM",
          "12 PM",
          "2 PM",
          "4 PM",
          "6 PM",
          "8 PM",
          "10 PM",
          "12 AM"
        ]
      }
    };
  }
}
  ngOnInit(): void {
    this.changeChart()

  
  }

  chartClicked(event: any, chart: any): void {
 
    // Emit a boolean value to notify the parent component that the chart was clicked
    this.chartEvent.emit(true);
  }
}