import { Component } from '@angular/core';

@Component({
  selector: 'app-view2',
  template: `
    <h1>View 2</h1>
    <button>TEST</button>
  `,
})
export class View2Component {
  test() {
    console.log('clicked!');
  }
}
