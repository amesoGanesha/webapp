import { Component } from '@angular/core';

@Component({
  selector: 'app-ameso-tag-status',
  templateUrl: './ameso-tag-status.component.html',
  styleUrls: ['./ameso-tag-status.component.css']
})
export class AmesoTagStatusComponent {
  // Define variables for filters and table data (sample)
  clientID: string = '';
  factory: string = '';
  floor: string = '';
  customerName: string = '';
  status: string = '';
  firmwareVersion: string = '';

  // Sample data (replace with actual data retrieval logic)
  tableData = [
    {
      clientID: 'Client1',
      customerName: 'Customer 1',
      serialNumber: 'SN1234',
      factory: 'Factory A',
      floor: 'Floor 1',
      machineID: 'Machine1',
      bootCount: 10,
      amesoTagStatus: 'Active',
      firmwareVersion: 'v1.0',
      lastRebootTime: '2024-05-01 08:00:00'
    },
    {
      clientID: 'Client2',
      customerName: 'Customer 1',
      serialNumber: 'SN1234',
      factory: 'Factory A',
      floor: 'Floor 2',
      machineID: 'Machine2',
      bootCount: 10,
      amesoTagStatus: 'Inactive',
      firmwareVersion: 'v1.0',
      lastRebootTime: '2024-05-01 08:00:00'
    },
    {
      clientID: 'Client3',
      customerName: 'Customer 1',
      serialNumber: 'SN1234',
      factory: 'Factory A',
      floor: 'Floor 3',
      machineID: 'Machine3',
      bootCount: 10,
      amesoTagStatus: 'Active',
      firmwareVersion: 'v1.0',
      lastRebootTime: '2024-05-01 08:00:00'
    },
    // Add more data as needed
  ];

  // Filtered data array
  filteredData = this.tableData;

  // Function to apply filters based on user input
  applyFilters(): void {
    this.filteredData = this.tableData.filter(item => 
      (!this.clientID || item.clientID.toLowerCase().includes(this.clientID.toLowerCase())) &&
      (!this.factory || item.factory.toLowerCase().includes(this.factory.toLowerCase())) &&
      (!this.floor || item.floor.toLowerCase().includes(this.floor.toLowerCase())) &&
      (!this.customerName || item.customerName.toLowerCase().includes(this.customerName.toLowerCase())) &&
      (!this.status || item.amesoTagStatus.toLowerCase() === this.status.toLowerCase()) &&
      (!this.firmwareVersion || item.firmwareVersion.toLowerCase().includes(this.firmwareVersion.toLowerCase()))
    );
  }

  // Function to reset filters and show all data
  resetFilters(): void {
    this.clientID = '';
    this.factory = '';
    this.floor = '';
    this.customerName = '';
    this.status = '';
    this.firmwareVersion = '';
    this.filteredData = this.tableData;
  }
}
