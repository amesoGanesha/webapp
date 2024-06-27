import { Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-daily-efficiency-report',
  templateUrl: './daily-efficiency-report.component.html',
  styleUrls: ['./daily-efficiency-report.component.css']
})
export class DailyEfficiencyReportComponent implements OnInit {

  private chart: Chart<"line"> | null = null; // Adjust type based on your chart type
  private ctx: CanvasRenderingContext2D | null = null;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const canvas = this.elementRef.nativeElement.querySelector('#efficiencyChart') as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d');
    this.fetchData(); // Call fetchData to initially load the chart
  }

  createChart(data: any): void {
    if (this.ctx) {
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(this.ctx, {
        type: 'line', // Adjust type based on your chart type
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Efficiency (%)',
            data: data.values,
            backgroundColor: 'rgba(21, 174, 228, 0.2)',
            borderColor: '#15AEE4',
            borderWidth: 2,
            fill: true,
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

  fetchData(): void {
    // Simulate fetching data based on filters
    const data = {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      values: [70, 75, 80, 85, 90, 95, 85]
    };
    this.createChart(data);
  }

}
