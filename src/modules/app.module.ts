import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmitterService } from '../services/emitter-service';
import { SocialWallSerivce } from "../services/social-wall-service";
import { SafePipe } from "../base/safe";

import { AppComponent } from '../components/app.component';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    EmitterService,
    SocialWallSerivce
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
