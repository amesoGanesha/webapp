// employee-shift-management.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-shift-management',
  templateUrl: './employee-shift-management.component.html',
  styleUrls: ['./employee-shift-management.component.css']
})
export class EmployeeShiftManagementComponent {

  employee: any = {
    name: '',       // Selected employee name
    id: '',         // Selected employee ID
    shift: '',      // Selected shift (day or night)
    factory: '',    // Selected factory
    floor: '',      // Selected floor
    machines: {     // Machines responsible
      spinning: false,
      carding: false,
      cutting: false,
      molding: false
    },
    gender: '',     // Selected gender
    startDate: '',  // Start date of the shift
    endDate: ''     // End date of the shift
  };

  constructor() { }

  submitForm() {
    // Here you would typically handle form submission logic,
    // e.g., send data to a backend server or perform other actions.
    console.log('Form submitted with data:', this.employee);
    // You can reset the form after submission if needed
    // this.employee = { ... }; // Reset form fields
  }

}
