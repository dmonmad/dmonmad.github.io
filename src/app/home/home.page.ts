import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedBackground: number = 1;

  constructor() {
    this.selectedBackground = Math.floor(Math.random() * 4) + 1;
    console.log(this.selectedBackground);
  }

}
