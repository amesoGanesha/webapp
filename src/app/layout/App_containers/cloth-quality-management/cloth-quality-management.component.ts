import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cloth-quality-management',
  templateUrl: './cloth-quality-management.component.html',
  styleUrls: ['./cloth-quality-management.component.css']
})
export class ClothQualityManagementComponent implements OnInit {
  currentSection = 'clothQualityAdd'; // default to 'clothQualityAdd' for demonstration
  clothQualityForm!: FormGroup;
  changeMachineQualityForm!: FormGroup;
  sampleData: any[] = []; // Initialize sampleData as an empty array
  qualityChangeData: any[] = []; // Sample data for quality change report
  machineNames: string[] = ['Machine A', 'Machine B', 'Machine C']; // Example machine names

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.clothQualityForm = this.fb.group({
      clientId: ['', Validators.required],
      qualityName: ['', Validators.required],
      machineProfile: ['', Validators.required],
      qualitySpeed: ['', [Validators.required, Validators.pattern("^[0-9]*$")]], // Assuming RPM should be numeric
      meterProducedPerHour: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      qualityWeight: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      beamUsePerMeter: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      yarnUsePerMeter: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });

    this.changeMachineQualityForm = this.fb.group({
      clientId: ['', Validators.required],
      selectMachineName: ['', Validators.required],
      setClothQuality: ['', Validators.required],
      startTime: ['', Validators.required]
    });

    this.loadSampleData(); // Call method to load sample data
  }

  onSubmit(): void {
    if (this.currentSection === 'clothQualityAdd' && this.clothQualityForm.valid) {
      console.log(this.clothQualityForm.value);
      // Handle form submission logic here
    } else if (this.currentSection === 'changeMachineQuality' && this.changeMachineQualityForm.valid) {
      console.log(this.changeMachineQualityForm.value);
      // Handle form submission logic here
    } else {
      console.log("Form is invalid");
    }
  }

  onCancel(): void {
    this.clothQualityForm.reset();
    this.changeMachineQualityForm.reset();
  }

  setSection(section: string) {
    this.currentSection = section;
  }

  loadSampleData(): void {
    this.sampleData = [
      {
        clientId: '1234',
        qualityName: 'Sample Quality 1',
        machineProfile: 'Profile A',
        qualitySpeed: 1500,
        meterProducedPerHour: 200,
        qualityWeight: 12.5,
        beamUsePerMeter: 2.3,
        yarnUsePerMeter: 1.8
      },
      {
        clientId: '5678',
        qualityName: 'Sample Quality 2',
        machineProfile: 'Profile B',
        qualitySpeed: 1800,
        meterProducedPerHour: 180,
        qualityWeight: 10.8,
        beamUsePerMeter: 2.1,
        yarnUsePerMeter: 1.5
      },
      // Add more sample data objects as needed
    ];

    this.qualityChangeData = [
      {
        clientId: '1234',
        selectMachineName: 'Machine A',
        setClothQuality: 'Quality A',
        startTime: '2024-06-25T08:00:00Z'
      },
      {
        clientId: '5678',
        selectMachineName: 'Machine B',
        setClothQuality: 'Quality B',
        startTime: '2024-06-25T09:00:00Z'
      },
      // Add more quality change data objects as needed
    ];
  }
}
