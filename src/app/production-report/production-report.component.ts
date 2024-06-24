import { Component } from '@angular/core';

@Component({
  selector: 'app-production-report',
  templateUrl: './production-report.component.html',
  styleUrls: ['./production-report.component.css']
})
export class ProductionReportComponent {

  productionData = [
    {
      "id": 1,
      "totalMachines": 100,
      "clothProduced": 50000,
      "efficiency": "85%",
      "accuracy": "90%",
      "yarnUsed": "2000 kg",
      "beamUsed": "1500 units",
      "incomingBeamStock": "300 units",
      "incomingYarnStock": "2500 kg",
      "beamInStock": "400 units",
      "beamInUse": "200 units"
    }
  ];

}
