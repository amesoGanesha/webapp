import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-hourly-accuracy-report',
  templateUrl: './hourly-accuracy-report.component.html',
  styleUrls: ['./hourly-accuracy-report.component.css']
})
export class HourlyAccuracyReportComponent implements OnInit {

  private chart: Chart | undefined;
  private ctx: CanvasRenderingContext2D | null = null;

  constructor() { }

  ngOnInit(): void {
    const canvas = document.getElementById('accuracyChart') as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d');
    this.fetchData('1st Factory', '', '2024-06-24'); // Initial data load with default values
  }

  createChart(data: any): void {
    if (this.chart) {
      this.chart.destroy();
    }
    if (this.ctx) {
      this.chart = new Chart(this.ctx, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          interaction: {
            intersect: false,
            axis: 'x'
          },
          plugins: {
            title: {
              display: true,
              text: 'Machine Accuracy'
            }
          },
          elements: {
            line: {
              tension: 0.4, // Adjust tension here
              backgroundColor: 'rgba(21, 174, 228, 0.2)',
              borderColor: '#15AEE4',
              fill: false
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              ticks: {
                callback: function (value, index) {
                  const hour = (index + 1) % 12 || 12;
                  const period = index < 12 ? 'AM' : 'PM';
                  return `${hour}:00 ${period}`;
                }
              }
            },
            y: {
              min: 0,
              max: 100
            }
          }
        }
      });
    }
  }

  fetchData(factory: string, floor: string, date: string): void {
    // Simulate fetching data based on filters
    const data = {
      labels: Array.from({ length: 24 }, (_, i) => i),
      datasets: [{
        label: 'Accuracy (%)',
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 101)), // Random accuracy values
      }]
    };
    this.createChart(data);
  }

  updateChart(): void {
    const factory = (document.getElementById('factorySelect') as HTMLSelectElement).value;
    const floor = (document.getElementById('floorSelect') as HTMLSelectElement).value;
    const date = (document.getElementById('dateSelect') as HTMLInputElement).value;

    this.fetchData(factory, floor, date);
  }

}
