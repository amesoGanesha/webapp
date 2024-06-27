// operations-ms.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations-ms',
  templateUrl: './operations-ms.component.html',
  styleUrls: ['./operations-ms.component.css']
})
export class OperationsMSComponent implements OnInit {
  runningCount: number = 0;
  stoppedCount: number = 0;
  unknownCount: number = 0;
  machineStatusData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Simulated data for demonstration
    this.machineStatusData = [
      {
        "_id": { "$oid": "667a4512459256f693ebd286" },
        "ClientID": "BSP",
        "MachineID": "PL 09",
        "SerialNumber": "D3B4F2",
        "Timestamp": { "$date": "2024-06-25T04:14:59.227Z" },
        "Status": 0,
        "CurrentStatus": "stopped",
        "Machinestatus": "stopped",
        "Hours": "1d 06hrs 38m"
      },
      {
        "_id": { "$oid": "667a4512459256f693ebd286" },
        "ClientID": "BSP",
        "MachineID": "PL 10",
        "SerialNumber": "D3B4F2",
        "Timestamp": { "$date": "2024-06-25T04:14:59.227Z" },
        "Status": 0,
        "CurrentStatus": "Unknown",
        "Machinestatus": "Unkown",
        "Hours": "1d 06hrs 38m"
      },
      {
        "_id": { "$oid": "667a4512459256f693ebd286" },
        "ClientID": "BSP",
        "MachineID": "PL 11",
        "SerialNumber": "D3B4F2",
        "Timestamp": { "$date": "2024-06-25T04:14:59.227Z" },
        "Status": 0,
        "CurrentStatus": "Unknown",
        "Machinestatus": "Unkown",
        "Hours": "1d 06hrs 38m"
      },
      {
        "_id": { "$oid": "667a4512459256f693ebd286" },
        "ClientID": "BSP",
        "MachineID": "PL 12",
        "SerialNumber": "D3B4F2",
        "Timestamp": { "$date": "2024-06-25T04:14:59.227Z" },
        "Status": 0,
        "CurrentStatus": "running",
        "Machinestatus": "running",
        "Hours": "1d 06hrs 38m"
      },
      {
        "_id": { "$oid": "667a4512459256f693ebd286" },
        "ClientID": "BSP",
        "MachineID": "PL 13",
        "SerialNumber": "D3B4F2",
        "Timestamp": { "$date": "2024-06-25T04:14:59.227Z" },
        "Status": 0,
        "CurrentStatus": "running",
        "Machinestatus": "running",
        "Hours": "1d 06hrs 38m"
      },
      // Add more sample data objects here
    ];

    // Calculate status counts
    this.calculateStatusCounts();
  }

  calculateStatusCounts(): void {
    this.runningCount = this.machineStatusData.filter(machine => machine.CurrentStatus === 'running').length;
    this.stoppedCount = this.machineStatusData.filter(machine => machine.CurrentStatus === 'stopped').length;
    this.unknownCount = this.machineStatusData.filter(machine => machine.CurrentStatus !== 'running' && machine.CurrentStatus !== 'stopped').length;
  }
}
