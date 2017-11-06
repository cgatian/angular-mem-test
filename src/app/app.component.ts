import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLink="/view1">View1</a>
  
  <a routerLink="/view2">View2</a>
  
  <router-outlet></router-outlet>
`,
})
export class AppComponent {
  title = 'app';



}

