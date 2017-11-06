import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { View1Component } from './components/view1.component';
import { View2Component } from './components/view2.component';

@NgModule({
  declarations: [
    View1Component, View2Component
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'view1', component: View1Component },
      { path: 'view2', component: View2Component },
      { path: '**', redirectTo: 'view1' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


