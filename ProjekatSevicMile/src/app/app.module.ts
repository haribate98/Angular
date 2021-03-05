import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KnjigaItemComponent } from './knjiga/knjiga-item/knjiga-item.component';
import { KnjigaListComponent } from './knjiga/knjiga-list/knjiga-list.component';
import { CreateKnjigaComponent } from './knjiga/create-knjiga/create-knjiga.component';
import { KnjigaService } from './services/knjiga.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { KnjigaDetailsComponent } from './knjiga/knjiga-details/knjiga-details.component';
import { AuthService } from './services/auth.service';
import { KnjigaAppInterceptor } from './services/knjiga-app.interceptor';
import { AppRoutesModule } from './app-routes.module';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    KnjigaItemComponent,
    KnjigaListComponent,
    CreateKnjigaComponent,
    KnjigaDetailsComponent,
    LoginComponent,
    RegisterComponent,
    KnjigaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutesModule
  ],
  providers: [KnjigaService,
   AuthService,
    UserService,
    UserStoreService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KnjigaAppInterceptor,
      multi: true,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
