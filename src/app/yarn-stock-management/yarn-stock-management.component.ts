import { Component } from '@angular/core';

@Component({
  selector: 'app-yarn-stock-management',
  templateUrl: './yarn-stock-management.component.html',
  styleUrls: ['./yarn-stock-management.component.css']
})
export class YarnStockManagementComponent {
  currentSection: string = 'report'; // Default section to show

  // Properties for update form
  yarnStockNumber!: string;
  clientId!: string;
  dateOfEntry!: Date;
  yarnQuality!: string;
  yarnWidthMeter!: number;
  yarnStockData: any[] = [
    { factory: 'Factory 1', dateOfEntry: '2024-05-01', yarnStockNumber: 'YSN1234', yarnQuality: 'Good', widthMeters: 5000 },
    { factory: 'Factory 1', dateOfEntry: '2024-05-02', yarnStockNumber: 'YSN5678', yarnQuality: 'Excellent', widthMeters: 8000 },
    { factory: 'Factory 2', dateOfEntry: '2024-05-03', yarnStockNumber: 'YSN9012', yarnQuality: 'Good', widthMeters: 6000 },
    { factory: 'Factory 2', dateOfEntry: '2024-05-04', yarnStockNumber: 'YSN3456', yarnQuality: 'Excellent', widthMeters: 7000 }
    // Add more sample data as needed
  ];

  filteredYarnStockData: any[] = [];

  constructor() {
    this.filteredYarnStockData = [...this.yarnStockData]; // Initialize with all data
  }

  applyDateFilter(event: any): void {
    const startDate = event.startDate.format('YYYY-MM-DD');
    const endDate = event.endDate.format('YYYY-MM-DD');
    
    this.filteredYarnStockData = this.yarnStockData.filter(item => {
      const entryDate = new Date(item.dateOfEntry);
      return entryDate >= new Date(startDate) && entryDate <= new Date(endDate);
    });
  }

  clearDateFilter(): void {
    this.filteredYarnStockData = [...this.yarnStockData]; // Reset to all data
  }

  // Method to switch between report and update sections
  switchSection(section: string): void {
    this.currentSection = section;
  }

  // Method to update yarn stock (replace with actual logic)
  updateYarnStock(): void {
    console.log(`Updating yarn stock for Yarn Stock Number: ${this.yarnStockNumber}`);
    console.log(`Client ID: ${this.clientId}`);
    console.log(`Date of Entry: ${this.dateOfEntry}`);
    console.log(`Yarn Quality: ${this.yarnQuality}`);
    console.log(`Yarn Width Meter: ${this.yarnWidthMeter}`);
    // Add your logic here to update the yarn stock
    // Typically involves sending data to a backend service
  }

  // Method to reset the form (optional, if needed)
  resetForm(): void {
    this.yarnStockNumber = '';
    this.clientId = '';
    this.dateOfEntry =  null!;
    this.yarnQuality = '';
    this.yarnWidthMeter = null!;
  }
}
