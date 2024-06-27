import { Component } from '@angular/core';
// At the top of your employee-shift-calendar.component.ts file
interface Shift {
  employee: string;
  type: string;
}

interface ShiftData {
  [key: string]: Shift[];
}

@Component({
  selector: 'app-employee-shift-calendar',
  templateUrl: './employee-shift-calendar.component.html',
  styleUrls: ['./employee-shift-calendar.component.css']
})
export class EmployeeShiftCalendarComponent {
  
  // Properties
  calendarWeek: any[] = [];
  currentWeekStart!: Date;
  currentWeekEnd!: Date;
  currentDate!: Date;

  // Shift data (mocked)
  shiftData: { [date: string]: Shift[] } = {
    "2024-06-01": [
      { employee: "John Doe", type: "day" },
      { employee: "Jane Smith", type: "day" },
      { employee: "Michael Brown", type: "night" }
    ],
    "2024-06-02": [
      { employee: "Alice Johnson", type: "day" },
      { employee: "Robert Wilson", type: "night" },
      { employee: "Michael Brown", type: "night" }
    ],
    // Add more data as needed
  };

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentWeekStart = new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay()));
    this.currentWeekEnd = new Date(this.currentWeekStart);
    this.currentWeekEnd.setDate(this.currentWeekEnd.getDate() + 6);

    this.renderCalendar();
  }

  // Methods

  renderCalendar(): void {
    this.calendarWeek = [];
    let currentDay = new Date(this.currentWeekStart);

    for (let i = 0; i < 7; i++) {
      const dateString = this.formatDate(currentDay);
      const shifts = this.shiftData[dateString] || [];

      const dayObject = {
        date: dateString,
        dayName: this.getDayName(currentDay.getDay()),
        dayNumber: currentDay.getDate(),
        shifts: shifts.length > 0 ? shifts : [{ employee: "No employee assigned", type: "no-shift" }]
      };

      this.calendarWeek.push(dayObject);
      currentDay.setDate(currentDay.getDate() + 1);
    }
  }

  getDayName(dayIndex: number): string {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[dayIndex];
  }

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  // Event Handlers

  prevWeek(): void {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
    this.currentWeekEnd.setDate(this.currentWeekEnd.getDate() - 7);
    this.renderCalendar();
  }

  nextWeek(): void {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
    this.currentWeekEnd.setDate(this.currentWeekEnd.getDate() + 7);
    this.renderCalendar();
  }

  goToSelectedWeek(): void {
    const selectedDate = new Date(this.currentDate);
    this.currentWeekStart = new Date(selectedDate.setDate(selectedDate.getDate() - selectedDate.getDay()));
    this.currentWeekEnd = new Date(this.currentWeekStart);
    this.currentWeekEnd.setDate(this.currentWeekEnd.getDate() + 6);
    this.renderCalendar();
  }
  
}
