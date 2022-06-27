import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Form Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// pages
import { ParallaxComponent } from './pages/parallax/parallax.component';

// items
import { PHeaderComponent } from './items/p-header/p-header.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,

    // pages
    ParallaxComponent,

    // items
    PHeaderComponent,
     MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Form Module
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
