import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  PieChart: any;
  array=[50, 200, 300, 400, 700]

  constructor() { }

  ngOnInit() {
    this.PieChart = new Chart('pieChart', {
      type: 'bar',
      data: {
        labels: ["New", "In Progress", "On Hold", "Accepted", "Rejected"],
        datasets: [{
          label: '# of votes',
          data: this.array,
          backgroundColor: [
            '#E74C3C',
            '#A569BD',
            '#3498DB',
            '#E67E22',
            '#2ECC71'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Pie Chart",
          display: true
        },
        responsive: false,
        display: true,
      }
    });
  }

}
