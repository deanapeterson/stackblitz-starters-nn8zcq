import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FretboardComponent } from './fretboard/fretboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-fretboard/>`,
  imports: [FretboardComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
