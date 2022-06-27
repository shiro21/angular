import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { MainComponent } from './pages/main/main.component';
import { ParallaxComponent } from './pages/parallax/parallax.component';

const routes: Routes = [
  { path: 'parallax', component: ParallaxComponent },

  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
