import { Component } from '@angular/core';

@Component({
  selector: 'app-machine-management',
  templateUrl: './machine-management.component.html',
  styleUrls: ['./machine-management.component.css']
})
export class MachineManagementComponent {

  constructor() { }

  ngOnInit(): void {
  }

  importMachines(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvData = e.target?.result as string;
        console.log('CSV Data:', csvData);
        // You can process the CSV data here, such as parsing and sending it to a service
      };
      reader.readAsText(file);
    } else {
      alert('Please select a file.');
    }
  }

  onSubmit(): void {
    // Handle form submission logic here
    console.log('Form submitted.');
  }
}
