import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { BetterHighlightHostListenerDirective } from './better-highlight-hostlistener/better-highlight-host-listener.directive';
import {BetterHighlightHostBindingDirective} from './better-highlight-hostbinding/better-host-binding-directive';
import { BindingDirectivePropertiesDirective } from './Binding-Directive-Properties/binding-directive-properties.directive';
import {UnlessDirective} from '../Binding-custom-structural-Directive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
      BasicHighlightDirective,
      BetterHighlightDirective,
      BetterHighlightHostListenerDirective,
      BetterHighlightHostBindingDirective,
      BindingDirectivePropertiesDirective,
      UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
