import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModuleComponent } from './login-module/login-module.component';
import { VideosComponent } from './videos/videos.component';
import { VideosDetailsComponent } from './videos-details/videos-details.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { SafePipe } from './safe.pipe';

const appRoutes : Routes = [
    { path: 'addUser', component: DashboardComponent },
    { path: 'login', component: LoginModuleComponent },
    { path: 'videos', component: VideosComponent }
] 


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginModuleComponent,
    VideosComponent,
    VideosDetailsComponent,
    VideosListComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule              // <-Add HttpModule
  ],
  providers: [DataService], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }
