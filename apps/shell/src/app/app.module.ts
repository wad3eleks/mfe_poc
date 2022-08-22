import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';
import { ButtonModule } from 'primeng/button';
import { ProgrammaticLoadingComponent } from './programmatic-loading/programmatic-loading.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          loadChildren: () =>
            loadRemoteModule('login', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: '',
          component: NxWelcomeComponent,
        },
        {
          path: 'dashboard',
          loadChildren: () =>
            loadRemoteModule('dashboard', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    ProgrammaticLoadingComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
