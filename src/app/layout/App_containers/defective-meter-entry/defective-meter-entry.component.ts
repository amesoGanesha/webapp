import { Component } from '@angular/core';

@Component({
  selector: 'app-defective-meter-entry',
  templateUrl: './defective-meter-entry.component.html',
  styleUrls: ['./defective-meter-entry.component.css']
})
export class DefectiveMeterEntryComponent {
  currentSection: string = 'defectiveMeterEntry'; // Track current section
  defectiveEntry: any = {
    factory: '',
    floor: '',
    machineID: '',
    defectiveDate: '',
    shift: '',
    defectiveMeters: null
  };

  productionReportData: any[] = [
    { factory: 'Factory 1', floor: 'Floor 1', machineID: 'M001', shift: 'Shift 1', totalClothManufactured: 1000, defectiveMeters: 50, effectiveClothManufactured: 950 },
    { factory: 'Factory 2', floor: 'Floor 2', machineID: 'M002', shift: 'Shift 2', totalClothManufactured: 1200, defectiveMeters: 60, effectiveClothManufactured: 1140 },
    // Add more data objects as needed
  ];

  defectiveReportData: any[] = [
    { factory: 'Factory 1', floor: 'Floor 1', machineID: 'M001', shift: 'Shift 1', defectiveMeters: 50, date: '2023-05-20' },
    { factory: 'Factory 1', floor: 'Floor 1', machineID: 'M002', shift: 'Shift 2', defectiveMeters: 60, date: '2023-05-21' },
    { factory: 'Factory 2', floor: 'Floor 2', machineID: 'M003', shift: 'Shift 1', defectiveMeters: 70, date: '2023-05-20' },
    // Add more data objects as needed
  ];

  filteredProductionReportData: any[] = []; // Initialize as empty array

  filterOptions: any = {
    machineIDs: [],
    floors: [],
    factory: '',
    shift: ''
  };
  defectivefilteredProductionReportData: any[] = [...this.productionReportData]; // Initialize with all data

  defectivefilterOptions: any = {
    factory: '',
    floor: '',
    dateRange: '',
    shift: ''
  };

  constructor() {
    // Initialize with all data
    this.defectivefilteredProductionReportData = [...this.defectiveReportData];
  }

  switchSection(section: string): void {
    this.currentSection = section;
    if (section === 'effectiveProductionReport') {
      this.applyFilters(); // Apply filters when switching to the effective production report section
    }
  }

  submitDefectiveEntry(): void {
    console.log('Form submitted:', this.defectiveEntry);
    // Further processing logic
  }

  resetForm(): void {
    this.defectiveEntry = {
      factory: '',
      floor: '',
      machineID: '',
      defectiveDate: '',
      shift: '',
      defectiveMeters: null
    };
  }

  toggleMachineIDFilter(event: any): void {
    const machineID = event.target.value;
    if (machineID === 'all') {
      this.filterOptions.machineIDs = [];
    } else {
      const index = this.filterOptions.machineIDs.indexOf(machineID);
      if (index >= 0) {
        this.filterOptions.machineIDs.splice(index, 1);
      } else {
        this.filterOptions.machineIDs.push(machineID);
      }
    }
    this.applyFilters();
  }

  toggleFloorFilter(event: any): void {
    const floor = event.target.value;
    if (floor === 'all') {
      this.filterOptions.floors = [];
    } else {
      const index = this.filterOptions.floors.indexOf(floor);
      if (index >= 0) {
        this.filterOptions.floors.splice(index, 1);
      } else {
        this.filterOptions.floors.push(floor);
      }
    }
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredProductionReportData = this.productionReportData.filter(item => {
      let matches = true;
      if (this.filterOptions.machineIDs.length > 0 && !this.filterOptions.machineIDs.includes(item.machineID)) {
        matches = false;
      }
      if (this.filterOptions.floors.length > 0 && !this.filterOptions.floors.includes(item.floor)) {
        matches = false;
      }
      if (this.filterOptions.factory && this.filterOptions.factory !== item.factory) {
        matches = false;
      }
      if (this.filterOptions.shift && this.filterOptions.shift !== item.shift) {
        matches = false;
      }
      return matches;
    });
  }
  defectiveapplyFilters(): void {
    this.defectivefilteredProductionReportData = this.defectiveReportData.filter(item => {
      let matches = true;
      if (this.defectivefilterOptions.factory && this.defectivefilterOptions.factory !== item.factory) {
        matches = false;
      }
      if (this.defectivefilterOptions.floor && this.defectivefilterOptions.floor !== item.floor) {
        matches = false;
      }
      if (this.defectivefilterOptions.dateRange && !this.isDateInRange(new Date(item.date), this.defectivefilterOptions.dateRange)) {
        matches = false;
      }
      if (this.defectivefilterOptions.shift && this.defectivefilterOptions.shift !== item.shift) {
        matches = false;
      }
      return matches;
    });
  }

  isDateInRange(itemDate: Date, dateRange: string): boolean {
    const [startDateStr, endDateStr] = dateRange.split(' - ');
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    return itemDate >= startDate && itemDate <= endDate;
  }
}
