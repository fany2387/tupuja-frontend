import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ParseComponent} from './parse/parse.component';
import {BidService} from './bid/bid.service';
import {UserService} from './user/user.service';


@NgModule({
  imports: [BrowserModule],
  providers: [BidService, ParseComponent, UserService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
