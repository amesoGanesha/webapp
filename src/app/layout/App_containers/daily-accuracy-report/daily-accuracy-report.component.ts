import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-daily-accuracy-report',
  templateUrl: './daily-accuracy-report.component.html',
  styleUrls: ['./daily-accuracy-report.component.css']
})
export class DailyAccuracyReportComponent {

  private chart: Chart | undefined;
  private ctx: CanvasRenderingContext2D | null = null;

  constructor() { }

  ngOnInit(): void {
    const canvas = document.getElementById('accuracyChart') as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d');
    this.fetchData('1st Factory', '', '2024-04');
  }

  createChart(data: any): void {
    if (this.ctx) {
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: data.days,
          datasets: [{
            label: 'Accuracy (%)',
            data: data.values,
            backgroundColor: 'rgba(21, 174, 228, 0.2)',
            borderColor: '#15AEE4',
            borderWidth: 2,
            fill: false,
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              beginAtZero: true
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

  fetchData(factory: string, floor: string, dateRange: string): void {
    // Simulate fetching data for a month
    const startOfMonth = new Date(dateRange);
    const endOfMonth = new Date(startOfMonth.getFullYear(), startOfMonth.getMonth() + 1, 0);
    const daysInMonth = endOfMonth.getDate();

    const data = {
      days: Array.from({ length: daysInMonth }, (_, i) => {
        const day = i + 1;
        return `${day < 10 ? '0' + day : day}-${startOfMonth.getMonth() + 1}-${startOfMonth.getFullYear()}`;
      }),
      values: Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 101)) // Random accuracy values
    };
    this.createChart(data);
  }

  onFactoryChange(event: Event): void {
    const factory = (event.target as HTMLInputElement).value;
    const dateRange = (document.getElementById('dateRange') as HTMLInputElement).value;
    this.fetchData(factory, '', dateRange);
  }

  onFloorChange(event: Event): void {
    const floor = (event.target as HTMLInputElement).value;
    const dateRange = (document.getElementById('dateRange') as HTMLInputElement).value;
    this.fetchData('', floor, dateRange);
  }

  onDateChange(event: Event): void {
    const dateRange = (event.target as HTMLInputElement).value;
    const factory = (document.getElementById('factorySelect') as HTMLInputElement).value;
    const floor = (document.getElementById('floorSelect') as HTMLInputElement).value;
    this.fetchData(factory, floor, dateRange);
  }

}
