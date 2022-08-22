import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@nrwl/angular/mf';

@Component({
  selector: 'mfe-poc-programmatic-loading',
  standalone: true,
  templateUrl: './programmatic-loading.component.html',
})
export class ProgrammaticLoadingComponent {

  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  async load(): Promise<void> {

    const m = await loadRemoteModule('login', './StandaloneComponent');

    const ref = this.viewContainer.createComponent(m.StandaloneComponent);
    const compInstance: any = ref.instance;

    compInstance.header = 'myNEXUS!'
  }

}
