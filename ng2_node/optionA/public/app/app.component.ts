import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ch-app',
  templateUrl: 'app.template.html'
})

export class AppComponent {
  appName: string = "Angular 2 Chat App";
}
