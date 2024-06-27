import { Component } from '@angular/core';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent {
  cardVisible: boolean = false;
  selectedClientId: string = '';

  onClientChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedClientId = target.value;
    this.cardVisible = !!this.selectedClientId; // Show card if selectedClientId is truthy
  }

  onGo(): void {
    console.log('Go clicked');
    // Implement your logic here
  }

  onCancel(): void {
    console.log('Cancel clicked');
    this.cardVisible = false; // Hide the card
  }
}
