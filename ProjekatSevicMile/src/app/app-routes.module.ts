import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { KnjigaListComponent } from './knjiga/knjiga-list/knjiga-list.component';
import { CreateKnjigaComponent } from './knjiga/create-knjiga/create-knjiga.component';
import { KnjigaDetailsComponent } from './knjiga/knjiga-details/knjiga-details.component';
import { AuthGuard } from './guards/auth.guard';



const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'knjige/list', component: KnjigaListComponent, canActivate: [AuthGuard] },
  { path: 'knjige/create', component: CreateKnjigaComponent, canActivate: [AuthGuard] },
  { path: 'knjiga/:code', component: KnjigaDetailsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/register' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutesModule { }
