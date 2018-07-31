import { BrowserModule } from '@angular/platform-browser';

import { NgModule,Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { DemocounterComponent } from './democounter/democounter.component';

@NgModule({
  declarations: [
    DemocounterComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[
    DemocounterComponent
  ],
  providers: [],
  bootstrap:[]
})
export class AppModule {

  public constructor(private injector:Injector){

  }
  ngDoBootstrap(){
    const el=createCustomElement(DemocounterComponent,{injector:this.injector});
    customElements.define('demo-counter',el);
  }
 }
