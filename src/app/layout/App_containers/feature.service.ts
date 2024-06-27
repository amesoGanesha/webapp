// feature.service.ts

import { Injectable } from '@angular/core';
import { Feature } from './feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private features: Feature[] = [
    { 
      id: 1, 
      customerName: 'Ameso POC', 
      customerId: '12345', 
      beamStockManagement: true, 
      yarnStockManagement: false, 
      factoryManagement: false, 
      shiftManagement: false, 
      machineManagement: false, 
      defectiveMeterEntry: false, 
      machineProfiles: false, 
      clothQualityManagement: false,
      machinesAllowed: 0
    },
    { 
      id: 2, 
      customerName: 'Ganu', 
      customerId: '67890', 
      beamStockManagement: true, 
      yarnStockManagement: true, 
      factoryManagement: false, 
      shiftManagement: true, 
      machineManagement: false, 
      defectiveMeterEntry: false, 
      machineProfiles: false, 
      clothQualityManagement: false,
      machinesAllowed: 0
    }
  ];

  constructor() { }

  getAllFeatures(): Feature[] {
    return this.features;
  }

  addFeature(feature: Feature): void {
    this.features.push(feature);
  }

  updateFeature(updatedFeature: Feature): void {
    const index = this.features.findIndex(f => f.id === updatedFeature.id);
    if (index !== -1) {
      this.features[index] = updatedFeature;
    }
  }
}
