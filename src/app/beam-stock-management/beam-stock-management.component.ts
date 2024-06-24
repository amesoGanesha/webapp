import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  // Define filter properties
  filters = {
    dateRange: '',
    beamQuality: '',
    beamNumberRange: ''
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

  // Method to filter data based on provided filters
  filterData(): any[] {
    let filteredData = this.beamStockData;

    // Apply filters based on user input
    if (this.filters.dateRange) {
      const [startDate, endDate] = this.filters.dateRange.split(' - ').map(dateStr => new Date(dateStr));
      filteredData = filteredData.filter(item => {
        const entryDate = new Date(item.entryDate);
        return entryDate >= startDate && entryDate <= endDate;
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

    // Return filtered data
    return filteredData;
  }

}
