import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Form Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Add
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';

// plugin

// pages
import { ParallaxComponent } from './pages/parallax/parallax.component';

// items
import { PHeaderComponent } from './items/p-header/p-header.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './items/header/header.component';

@NgModule({
  declarations: [
    AppComponent,

    // pages
    MainComponent,

    ParallaxComponent,

    // items
    HeaderComponent,

    PHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Form Module
    FormsModule,
    ReactiveFormsModule,

    // Add
    FontAwesomeModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
