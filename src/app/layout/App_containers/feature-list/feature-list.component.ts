import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feature } from '../feature';
import { FeatureService } from '../feature.service';


@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {
  features: Feature[] = [];
  editingFeature: Feature | null = null;

  constructor(private router: Router,private featureService: FeatureService) {}

  ngOnInit(): void {
    this.features = this.featureService.getAllFeatures();
  }

  editFeature(feature: Feature): void {
    this.editingFeature = { ...feature }; // Create a copy to avoid directly modifying the original
  }

  navigateToAddFeature() {
    this.router.navigateByUrl('/App/add-features');
  }

  cancelEdit(): void {
    this.editingFeature = null;
  }

  saveFeature(): void {
    if (this.editingFeature) {
      this.featureService.updateFeature(this.editingFeature);
      this.editingFeature = null;
    }
  }

  inactiveFeature(index: number): void {
    // Implement your inactive feature logic here
  }
}
