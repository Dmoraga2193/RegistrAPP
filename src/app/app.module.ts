import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import {AuthGuardService} from './service/auth-guard.service';
import {AuthenticationService} from './service/authentication.service';
import { IonicStorageModule } from '@ionic/storage-angular';


import { Camera } from '@awesome-cordova-plugins/camera/ngx';


@NgModule({
  declarations: [AppComponent],
<<<<<<< Updated upstream
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,HttpClientModule,
  ],
  providers: [Camera,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule,IonicStorageModule.forRoot()],
  providers: [AuthenticationService,AuthGuardService,Camera,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
>>>>>>> Stashed changes
  bootstrap: [AppComponent],
})
export class AppModule {}


