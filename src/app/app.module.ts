import { MaterialModule } from './material-modules';
import { DemoComponent } from './features/demo-component/demo-component/demo.component';
import { TempelateComponent } from './features/demo-component/tempelate-component/tempelate.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDynamicComponentService } from './shared/services/create-dynamic-component.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TempelateComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [CreateDynamicComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
