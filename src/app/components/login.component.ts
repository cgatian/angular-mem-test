import { Component } from '@angular/core';

@Component({
  selector: 'login',
  template: `
    <h1>Login</h1>
        <div>because the p element has the structural directive (*appToolbar), it will not be displayed inside this component. Instead, it will perform the actions in the directive's constructor  (see toolbar.directive.ts) - which sends it to the toolbar</div>
    <div>Any changes that are made to the p element from this component WILL be reflected in the toolbar</div>

  `,
})
export class LoginViewComponent {
}
