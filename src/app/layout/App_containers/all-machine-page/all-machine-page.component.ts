import { Component } from '@angular/core';

@Component({
  selector: 'app-all-machine-page',
  templateUrl: './all-machine-page.component.html',
  styleUrls: ['./all-machine-page.component.css']
})
export class AllMachinePageComponent {
  machineData = [
    { MachineID: 'M001', FactoryName: 'Factory A', Floor: 'Floor 1', MachineProfile: 'Profile 1', ClothQuality: 'Good' },
    { MachineID: 'M002', FactoryName: 'Factory B', Floor: 'Floor 2', MachineProfile: 'Profile 2', ClothQuality: 'Excellent' },
    { MachineID: 'M003', FactoryName: 'Factory A', Floor: 'Floor 1', MachineProfile: 'Profile 3', ClothQuality: 'Very Good' },
    { MachineID: 'M004', FactoryName: 'Factory C', Floor: 'Floor 3', MachineProfile: 'Profile 4', ClothQuality: 'Good' }
    // Add more machine data as needed
  ];

}
