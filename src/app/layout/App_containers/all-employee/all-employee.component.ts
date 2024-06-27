// all-employee.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent {

  employees = [
    {
      name: 'John Doe',
      phoneNumber: '123-456-7890',
      address: '123 Main St',
      shift: 'Day Shift',
      machinesManagement: ['Spinning machinery', 'Carding', 'Molding'],
      totalMachines: 3
    },
    {
      name: 'Jane Smith',
      phoneNumber: '098-765-4321',
      address: '456 Elm St',
      shift: 'Night Shift',
      machinesManagement: ['Carding', 'Molding'],
      totalMachines: 2
    },
    {
      name: 'Michael Johnson',
      phoneNumber: '234-567-8901',
      address: '789 Oak St',
      shift: 'Day Shift',
      machinesManagement: ['Spinning machinery'],
      totalMachines: 1
    },
    {
      name: 'Emily Davis',
      phoneNumber: '345-678-9012',
      address: '101 Pine St',
      shift: 'Night Shift',
      machinesManagement: ['Carding'],
      totalMachines: 1
    },
    {
      name: 'William Brown',
      phoneNumber: '456-789-0123',
      address: '202 Birch St',
      shift: 'Day Shift',
      machinesManagement: ['Spinning machinery'],
      totalMachines: 1
    },
    {
      name: 'Olivia Martinez',
      phoneNumber: '567-890-1234',
      address: '303 Cedar St',
      shift: 'Night Shift',
      machinesManagement: ['Spinning machinery', 'Carding', 'Molding'],
      totalMachines: 3
    },
    {
      name: 'James Wilson',
      phoneNumber: '678-901-2345',
      address: '404 Maple St',
      shift: 'Day Shift',
      machinesManagement: ['Spinning machinery', 'Carding', 'Molding'],
      totalMachines: 3
    },
    {
      name: 'Ava Moore',
      phoneNumber: '789-012-3456',
      address: '505 Walnut St',
      shift: 'Night Shift',
      machinesManagement: ['Carding', 'Molding'],
      totalMachines: 2
    },
    {
      name: 'Benjamin Taylor',
      phoneNumber: '890-123-4567',
      address: '606 Cherry St',
      shift: 'Day Shift',
      machinesManagement: ['Spinning machinery'],
      totalMachines: 1
    },
    {
      name: 'Sophia Anderson',
      phoneNumber: '901-234-5678',
      address: '707 Ash St',
      shift: 'Night Shift',
      machinesManagement: ['Carding'],
      totalMachines: 1
    }
  ];

}
