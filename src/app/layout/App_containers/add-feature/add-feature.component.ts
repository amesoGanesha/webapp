// add-feature.component.ts
import { Component } from '@angular/core';
import { Feature } from '../feature'; // Ensure Feature interface is correctly imported
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.css']
})
export class AddFeatureComponent {
  feature: Feature = {
    id: 0,
    customerName: '',
    customerId: '',
    beamStockManagement: false,
    yarnStockManagement: false,
    factoryManagement: false,
    shiftManagement: false,
    machineManagement: false,
    defectiveMeterEntry: false,
    machineProfiles: false,
    clothQualityManagement: false,
    machinesAllowed: 0 // Add this property as required by the Feature interface
  };

  constructor(private featureService: FeatureService) { }

  onSubmit(): void {
    this.featureService.addFeature(this.feature);
    console.log('Form submitted with:', this.feature);

    // Reset form after adding feature
    this.feature = {
      id: 0,
      customerName: '',
      customerId: '',
      beamStockManagement: false,
      yarnStockManagement: false,
      factoryManagement: false,
      shiftManagement: false,
      machineManagement: false,
      defectiveMeterEntry: false,
      machineProfiles: false,
      clothQualityManagement: false,
      machinesAllowed: 0
    };
  }
}
