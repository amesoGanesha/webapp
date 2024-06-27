import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-daily-production-report',
  templateUrl: './daily-production-report.component.html',
  styleUrls: ['./daily-production-report.component.css']
})
export class DailyProductionReportComponent {
  todayData = [
    { MachineID: 'M001', OperatorName: 'John Doe', MachineSpeed: 120, Quality: 'Good', Shift: 'Day', Uptime: 8, MeterProduced: 500, TotalMeterProduced: 5000, WeightOfCloth: 100, TotalWeightOfCloth: 1050, DefectiveMeter: 10, TotalDefectiveMeter: 100, EffectiveMetersProduced: 490, TotalEffectiveMetersProduced: 4900 },
    { MachineID: 'M002', OperatorName: 'Jane Smith', MachineSpeed: 125, Quality: 'Excellent', Shift: 'Night', Uptime: 7, MeterProduced: 450, TotalMeterProduced: 4700, WeightOfCloth: 95, TotalWeightOfCloth: 1020, DefectiveMeter: 8, TotalDefectiveMeter: 90, EffectiveMetersProduced: 442, TotalEffectiveMetersProduced: 4600 },
    { MachineID: 'M003', OperatorName: 'Sam Wilson', MachineSpeed: 115, Quality: 'Very Good', Shift: 'Day', Uptime: 8.5, MeterProduced: 480, TotalMeterProduced: 5100, WeightOfCloth: 102, TotalWeightOfCloth: 1045, DefectiveMeter: 12, TotalDefectiveMeter: 92, EffectiveMetersProduced: 468, TotalEffectiveMetersProduced: 5008 }
  ];
  yesterdayData = [
    { MachineID: 'M004', OperatorName: 'Jack Johnson', MachineSpeed: 130, Quality: 'Very Good', Shift: 'Day', Uptime: 9, MeterProduced: 600, TotalMeterProduced: 5500, WeightOfCloth: 110, TotalWeightOfCloth: 1150, DefectiveMeter: 15, TotalDefectiveMeter: 115, EffectiveMetersProduced: 585, TotalEffectiveMetersProduced: 5300 },
    { MachineID: 'M005', OperatorName: 'Jim Beam', MachineSpeed: 135, Quality: 'Good', Shift: 'Night', Uptime: 6, MeterProduced: 400, TotalMeterProduced: 4500, WeightOfCloth: 80, TotalWeightOfCloth: 900, DefectiveMeter: 12, TotalDefectiveMeter: 95, EffectiveMetersProduced: 388, TotalEffectiveMetersProduced: 4400 },
    { MachineID: 'M006', OperatorName: 'Nancy Drew', MachineSpeed: 138, Quality: 'Excellent', Shift: 'Day', Uptime: 8, MeterProduced: 620, TotalMeterProduced: 5700, WeightOfCloth: 115, TotalWeightOfCloth: 1180, DefectiveMeter: 10, TotalDefectiveMeter: 108, EffectiveMetersProduced: 610, TotalEffectiveMetersProduced: 5592 }
  ];
  customRangeData = [
    { MachineID: 'M007', OperatorName: 'Alice Cooper', MachineSpeed: 140, Quality: 'Outstanding', Shift: 'Day', Uptime: 8, MeterProduced: 700, TotalMeterProduced: 7000, WeightOfCloth: 90, TotalWeightOfCloth: 900, DefectiveMeter: 10, TotalDefectiveMeter: 100, EffectiveMetersProduced: 690, TotalEffectiveMetersProduced: 6900 },
    { MachineID: 'M008', OperatorName: 'Bob Marley', MachineSpeed: 145, Quality: 'Excellent', Shift: 'Night', Uptime: 7, MeterProduced: 500, TotalMeterProduced: 6000, WeightOfCloth: 100, TotalWeightOfCloth: 950, DefectiveMeter: 8, TotalDefectiveMeter: 90, EffectiveMetersProduced: 492, TotalEffectiveMetersProduced: 5910 },
    { MachineID: 'M009', OperatorName: 'Charlie Brown', MachineSpeed: 150, Quality: 'Very Good', Shift: 'Day', Uptime: 7.5, MeterProduced: 650, TotalMeterProduced: 7200, WeightOfCloth: 105, TotalWeightOfCloth: 980, DefectiveMeter: 9, TotalDefectiveMeter: 105, EffectiveMetersProduced: 641, TotalEffectiveMetersProduced: 7095 }
  ];

  filteredData: any[] = [];
  selectedDate: string = 'today'; // Default selection

  constructor() {
    this.filterData();
  }

  filterData(): void {
    switch (this.selectedDate) {
      case 'today':
        this.filteredData = this.todayData;
        break;
      case 'yesterday':
        this.filteredData = this.yesterdayData;
        break;
      case 'customRange':
        // Modify filtering logic based on your specific criteria
        // For example, filter based on MachineID or other criteria
        this.filteredData = this.customRangeData.filter(item =>
          item.MachineID === 'M007' // Example filter criteria
        );
        break;
      default:
        this.filteredData = [];
        break;
    }
  }

  onSelectDate(): void {
    this.filterData();
  }
}
