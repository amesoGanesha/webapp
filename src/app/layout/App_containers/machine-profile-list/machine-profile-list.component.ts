import { Component, OnInit } from '@angular/core';

export interface MachineProfile {
  profileID: string;
  machineType: string;
  machineMake: string;
  modelNumber: string;
  digitalMachine: string;
}

@Component({
  selector: 'app-machine-profile-list',
  templateUrl: './machine-profile-list.component.html',
  styleUrls: ['./machine-profile-list.component.css']
})
export class MachineProfileListComponent implements OnInit {
  machineProfiles: MachineProfile[] = []; // Array to hold machine profiles
  filteredProfiles: MachineProfile[] = []; // Array to hold filtered machine profiles
  clientID: string = ''; // Input for Client ID filter
  factory: string = ''; // Input for Factory filter

  ngOnInit() {
    // Initialize the component, load data, etc.
    this.loadMachineProfiles();
  }

  loadMachineProfiles() {
    // Simulated data for demonstration (replace with actual JSON data loading)
    const sampleData: MachineProfile[] = [
      { profileID: '1', machineType: 'AirJet', machineMake: 'ABC Inc.', modelNumber: 'AJ1001', digitalMachine: 'Yes' },
      { profileID: '2', machineType: 'WaterJet', machineMake: 'XYZ Corp.', modelNumber: 'WJ2002', digitalMachine: 'No' }
    ];

    this.machineProfiles = sampleData;
    this.filteredProfiles = [...this.machineProfiles]; // Initialize filtered profiles with all profiles
  }

  applyFilters() {
    // Apply filters based on clientID and factory inputs
    this.filteredProfiles = this.machineProfiles.filter(profile =>
      profile.machineType.toLowerCase().includes(this.clientID.toLowerCase()) &&
      profile.digitalMachine.toLowerCase().includes(this.factory.toLowerCase())
    );
  }

  resetFilters() {
    // Reset filters and show all profiles
    this.clientID = '';
    this.factory = '';
    this.filteredProfiles = [...this.machineProfiles];
  }
}
