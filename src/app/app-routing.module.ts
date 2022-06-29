import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { JoinComponent } from './pages/join/join.component';

import { ParallaxComponent } from './pages/parallax/parallax.component';
import { OwltasticComponent } from './pages/owltastic/owltastic.component';

const routes: Routes = [
  { path: 'parallax', component: ParallaxComponent },
  { path: 'owltastic', component: OwltasticComponent },
  { path: 'profile', component: ProfileComponent },

  // 로그인 관련
  { path: 'login', component: LoginComponent },
  { path: 'join', component:JoinComponent },

  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
