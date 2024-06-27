import { Component } from '@angular/core';

interface ReportData {
  quality: string;
  shift: string;
  clothProduced: number;
  defectiveMeter: number;
  effectiveMeterProduced: number;
  efficiencyPercent: number;
  lossPercent: number;
  beamUsed: number;
  yarnUsed: number;
  floor: string; // Ensure 'floor' property is included
}

@Component({
  selector: 'app-cloth-quality-report',
  templateUrl: './cloth-quality-report.component.html',
  styleUrls: ['./cloth-quality-report.component.css']
})
export class ClothQualityReportComponent {
  data: ReportData[] = [
    { quality: 'Quality 1', shift: 'Day Shift', clothProduced: 1000, defectiveMeter: 50, effectiveMeterProduced: 950, efficiencyPercent: 95, lossPercent: 5, beamUsed: 200, yarnUsed: 150, floor: '1' },
    { quality: 'Quality 2', shift: 'Night Shift', clothProduced: 1200, defectiveMeter: 60, effectiveMeterProduced: 1140, efficiencyPercent: 94.67, lossPercent: 5.33, beamUsed: 220, yarnUsed: 160, floor: '2' },
    // Add more rows as needed, ensuring 'floor' property is included in each object
  ];

  filteredData: ReportData[] = this.data; // Initially show all data

  dateRange: string = ''; // Initialize or set default values as needed
  shiftSelect: string = '';
  factorySelect: string = '';
  floorSelect: string = '';

  applyFilter(): void {
    // Implement filtering logic based on selected filters
    this.filteredData = this.data.filter(item => {
      let dateMatch = true; // Implement date range filtering logic as needed
      let shiftMatch = this.shiftSelect ? item.shift === this.shiftSelect : true;
      let factoryMatch = this.factorySelect ? item.quality === this.factorySelect : true;
      let floorMatch = this.floorSelect ? item.floor === this.floorSelect : true;

      return dateMatch && shiftMatch && factoryMatch && floorMatch;
    });
  }
}
