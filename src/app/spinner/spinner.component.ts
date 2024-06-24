import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <nz-spin nzSimple></nz-spin>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  `]
})
export class LoadingComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
