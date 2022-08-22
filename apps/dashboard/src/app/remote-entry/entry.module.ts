import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { TableModule } from 'primeng/table';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [RemoteEntryComponent, DemoComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        children: [
          {
            path: 'product',
            component: DemoComponent,
          }
        ]
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
