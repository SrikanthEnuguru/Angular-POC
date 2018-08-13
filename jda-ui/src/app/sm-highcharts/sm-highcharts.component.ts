import { Component, ElementRef, ViewChild } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sm-highcharts',
  templateUrl: './sm-highcharts.component.html',
  styleUrls: ['./sm-highcharts.component.css']
})
export class SmHighchartsComponent {
  title = 'Highcharts + Angular 5 Demo';

  @ViewChild('chartTarget') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;
  
  ngAfterViewInit() {
    const options: Highcharts.Options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Seasonality Profile'
      },
      xAxis: {
        categories: ['1', '2', '3','4', '5', '6','7', '8', '9']
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      series: [{
        name: 'Input Values',
        data: [0.81, 1.1, 1.2, 1.3, 1.4, 1.2, 0.5, 0.9, 2.0]
      }, {
        name: 'Normalized Values',
        data: [1.5, 1.7, 1.3, 1.1, 1.5, 0.7, 0.3, 2.1, 1.8]
      }]
    };
  
    this.chart = chart(this.chartTarget.nativeElement, options);
  }

  addSeries(){
    this.chart.addSeries({
      name:'Balram',
      data:[2,3,7]
    })    
  }
}