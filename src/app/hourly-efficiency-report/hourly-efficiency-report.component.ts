import { Component, OnInit, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-hourly-efficiency-report',
  templateUrl: './hourly-efficiency-report.component.html',
  styleUrls: ['./hourly-efficiency-report.component.css']
})
export class HourlyEfficiencyReportComponent implements OnInit {

  private chart: Chart | undefined;
  private ctx: CanvasRenderingContext2D | null = null;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const canvas = this.elementRef.nativeElement.querySelector('#efficiencyChart') as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d');
    this.fetchData('1st Factory', '', '2024-05-12');
  }

  createChart(data: any): void {
    if (this.ctx) {
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Efficiency (%)',
            data: data.values,
            backgroundColor: '#15AEE4',
            borderColor: '#15AEE4',
            borderWidth: 1,
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

  fetchData(factory: string, floor: string, date: string): void {
    // Simulate fetching data for a single day
    const data = {
      labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      values: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100))
    };
    this.createChart(data);
  }

  onFactoryChange(event: Event): void {
    const factory = (event.target as HTMLInputElement).value;
    this.fetchData(factory, '', '');
  }

  onFloorChange(event: Event): void {
    const floor = (event.target as HTMLInputElement).value;
    this.fetchData('', floor, '');
  }

  onDateChange(event: Event): void {
    const date = (event.target as HTMLInputElement).value;
    this.fetchData('', '', date);
  }

}
