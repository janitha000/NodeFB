import { Component, OnInit } from '@angular/core';
import { StatService } from '../../services/stat.service'
import { Chart } from 'chart.js'

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  chart = [];


  constructor(private statService: StatService) { }

  ngOnInit() {
    this.statService.getAllStats().subscribe(res => {
      console.log(res);
      let chartLables = ['Users', 'Posts'];





      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: chartLables,
          datasets: [
            {
              data: 8,
              borderColor: "#3cba9f",
              fill: false
            },
            {
              data: 8,
              borderColor: "#ffcc00",
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    })
  }

}
