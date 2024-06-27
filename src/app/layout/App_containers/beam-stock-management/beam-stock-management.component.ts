import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface BeamStock {
  factory: string;
  floor: string;
  machineID: string;
  stockNumber: string;
  beamsUsed: number;
  beamNumbersUsed: string;
}

@Component({
  selector: 'app-beam-stock-management',
  templateUrl: './beam-stock-management.component.html',
  styleUrls: ['./beam-stock-management.component.css']
})

export class BeamStockManagementComponent implements OnInit {
  currentSection: string = 'allStockSummary'; // Default section to display
  activeButton: string = 'allStockSummary'; // Track the active button
  activeTab: string = 'newBeamEntryForm'; // Default active tab

  // Variables for card data
  inStock!: number;
  inUse!: number;
  beamUsedPercentage!: number;

  beamStockData = [
    { stockNumber: 'BSN1234', entryDate: '2024-05-01', beamQuality: 'Good', totalBeams: 100, beamNumberRange: 'BN001 - BN100' },
    { stockNumber: 'BSN5678', entryDate: '2024-05-02', beamQuality: 'Average', totalBeams: 150, beamNumberRange: 'BN101 - BN250' },
    // Add more data as needed
  ];

  beamuseData: BeamStock[] = [
    { factory: 'Factory 1', floor: 'Floor 1', machineID: 'M001', stockNumber: 'BSN1234', beamsUsed: 10, beamNumbersUsed: 'BN001, BN002, BN003, BN004, BN005, BN006, BN007, BN008, BN009, BN010' },
    { factory: 'Factory 2', floor: 'Floor 2', machineID: 'M002', stockNumber: 'BSN5678', beamsUsed: 15, beamNumbersUsed: 'BN011, BN012, BN013, BN014, BN015' },
    // Add more data as needed
  ];

  // Define filter properties
  filters = {
    dateRange: '',
    beamQuality: '',
    beamNumberRange: ''
  };

  beamuseDatafilters = {
    factory: '',
    floor: '',
    machineID: ''
  };

  ngOnInit() {
    // Initialize the card data
    this.fetchStockSummaryData();
  }

  // Method to switch sections based on button click
  switchSection(section: string, buttonName: string): void {
    this.currentSection = section;
    this.activeButton = buttonName;
    if (section === 'allStockSummary') {
      this.fetchStockSummaryData();
    }
  }

  // Method to determine if a button is active
  isButtonActive(buttonName: string): boolean {
    return this.activeButton === buttonName;
  }

  // Method to switch tabs in the addNewStock section
  switchTab(tabName: string): void {
    this.activeTab = tabName;
  }

  // Method to fetch data for all stock summary
  fetchStockSummaryData(): void {
    // For demonstration, generate random numbers
    this.inStock = this.getRandomNumber();
    this.inUse = this.getRandomNumber();
    this.beamUsedPercentage = this.getRandomNumber();
  }

  // Helper method to generate a random number between 1 and 100
  getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Method called on form submission
  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form submitted:', form.value);
      // Perform further actions like API calls or data processing
    }
  }

  // Method called on form reset
  onReset(form: NgForm): void {
    form.resetForm();
    console.log('Form reset');
  }

  // Method to filter data based on filters
// Method to filter data based on filters
filterData(): any[] {
  let filteredData = this.beamStockData;

  if (this.filters.dateRange) {
    const selectedDateStr = this.filters.dateRange;
    const selectedDate = new Date(selectedDateStr);

    console.log('Selected Date:', selectedDate);

    filteredData = filteredData.filter(item => {
      const entryDate = new Date(item.entryDate);
      // Check if the entryDate matches the selectedDate
      return entryDate.getFullYear() === selectedDate.getFullYear() &&
             entryDate.getMonth() === selectedDate.getMonth() &&
             entryDate.getDate() === selectedDate.getDate();
    });
  }

  if (this.filters.beamQuality) {
    filteredData = filteredData.filter(item => item.beamQuality === this.filters.beamQuality);
  }

  if (this.filters.beamNumberRange) {
    const rangeParts = this.filters.beamNumberRange.split('-').map(part => part.trim());
    const startRange = rangeParts[0];
    const endRange = rangeParts[1];

    filteredData = filteredData.filter(item => {
      const itemRange = item.beamNumberRange.split('-').map(part => part.trim());
      const itemStart = itemRange[0];
      const itemEnd = itemRange[1];

      return (itemStart >= startRange && itemStart <= endRange) || (itemEnd >= startRange && itemEnd <= endRange);
    });
  }

  return filteredData;
}

filterBeamUsageData(): BeamStock[] {
  let filteredData = this.beamuseData;

  // Apply filters
  if (this.beamuseDatafilters.factory) {
    filteredData = filteredData.filter(item => item.factory === this.beamuseDatafilters.factory);
  }

  if (this.beamuseDatafilters.floor) {
    filteredData = filteredData.filter(item => item.floor === this.beamuseDatafilters.floor);
  }

  if (this.beamuseDatafilters.machineID) {
    filteredData = filteredData.filter(item => item.machineID === this.beamuseDatafilters.machineID);
  }

  return filteredData;
}

}
