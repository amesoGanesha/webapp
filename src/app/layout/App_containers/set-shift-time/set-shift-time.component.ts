import { Component } from '@angular/core';

@Component({
  selector: 'app-set-shift-time',
  templateUrl: './set-shift-time.component.html',
  styleUrls: ['./set-shift-time.component.css']
})
export class SetShiftTimeComponent {

  constructor() { }

  cancel() {
    // Handle cancel logic here, such as navigating back or resetting form data
    console.log('Cancel clicked');
  }
}
