// factory-management.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-factory-management',
  templateUrl: './factory-management.component.html',
  styleUrls: ['./factory-management.component.css']
})
export class FactoryManagementComponent {
  
  factory: any = {
    factoryId: '',
    factoryName: '',
    factoryLocation: '',
    floors: null,
    factoryAddress: '',
    primaryContact: {
      name: '',
      email: '',
      phone: ''
    },
    secondaryContact: {
      name: '',
      email: '',
      phone: ''
    }
  };

  submitForm(): void {
    // Implement submission logic here
    console.log('Form submitted:', this.factory);
    // Reset form after submission if needed
    this.resetForm();
  }

  cancel(): void {
    // Implement cancellation logic here
    console.log('Form cancelled');
    // Reset form if needed
    this.resetForm();
  }

  resetForm(): void {
    // Reset all form fields
    this.factory = {
      factoryId: '',
      factoryName: '',
      factoryLocation: '',
      floors: null,
      factoryAddress: '',
      primaryContact: {
        name: '',
        email: '',
        phone: ''
      },
      secondaryContact: {
        name: '',
        email: '',
        phone: ''
      }
    };
  }
}
