import { Component } from '@angular/core';

@Component({
  selector: 'app-machine-profile-management',
  templateUrl: './machine-profile-management.component.html',
  styleUrls: ['./machine-profile-management.component.css']
})
export class MachineProfileManagementComponent {

  profileID: string = '';
  machineType: string = '';
  machineMake: string = '';
  modelNumber: string = '';
  digitalMachine: string = '';

  constructor() { }

  addMachineProfile() {
    // Logic to handle form submission, e.g., send data to backend or perform validation
    console.log('Adding machine profile...');
  }

  onCancel() {
    // Logic to handle cancellation, e.g., clear form fields or navigate away
    console.log('Cancelled adding machine profile.');
  }

  clearForm() {
    this.profileID = '';
    this.machineType = '';
    this.machineMake = '';
    this.modelNumber = '';
    this.digitalMachine = '';
  }
  
}
